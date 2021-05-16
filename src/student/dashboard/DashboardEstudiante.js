import {
  Accordion,
  AccordionPanel,
  Box,
  Heading,
  List,
  Spinner
} from 'grommet';
import React, { useEffect, useState } from 'react';
import useAuth from '../../providers/Auth';
import Documentos from './extras/Documentos';
import Practicas from './extras/Practicas';
import Formulario from '../../form/Formulario';
import { db, storage } from '../../firebase';
import { Route, Switch } from 'react-router-dom';
import StudentApplications from './applications/StudentApplications';
import ApplicationDetails from './applications/ApplicationDetails';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

function DashboardEstudiante(props) {
  const { user, userData } = useAuth();
  const [generalInfo, setGeneralInfo] = useState();
  const [careerInternshipInfo, setCareerInternshipInfo] = useState();
  const [docs, setDocs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [practicas, setPracticas] = useState([]);

  useEffect(() => {
    if (userData) {
      db.collection('careers')
        .doc('general')
        .get()
        .then((info) =>
          setGeneralInfo(
            EditorState.createWithContent(convertFromRaw(info.data().info))
          )
        );

      db.collection('careers')
        .doc(userData.careerId)
        .get()
        .then((career) =>
          setCareerInternshipInfo(
            EditorState.createWithContent(convertFromRaw(career.data().info))
          )
        );

      storage
        .ref('careers-docs/general')
        .listAll()
        .then((res) => setDocs(res.items));

      storage
        .ref(`careers-docs/${userData.careerId}`)
        .listAll()
        .then((res) => setDocs((docs) => docs.concat(res.items)));

      db.collection('internships')
        .where('studentId', '==', user.uid)
        .get()
        .then((querySnapshot) => {
          const temp = [];
          querySnapshot.forEach((doc) =>
            temp.push({ id: doc.id, ...doc.data() })
          );
          setPracticas(temp);
          setLoaded(true);
        });
    }
  }, [user, userData]);

  return (
    <Switch>
      <Route exact path='/'>
        <Box pad='xlarge'>
          {loaded ? (
            <>
              <Heading margin='small'>
                ¡Hola, {userData && userData.name}!
              </Heading>
              <Box
                margin='medium'
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(
                    convertToRaw(generalInfo.getCurrentContent())
                  )
                }}
              />
              <Box
                margin='medium'
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(
                    convertToRaw(careerInternshipInfo.getCurrentContent())
                  )
                }}
              />
              <Accordion margin='small'>
                <AccordionPanel label='Documentos'>
                  <List
                    data={docs}
                    primaryKey='name'
                    onClickItem={(e) =>
                      e.item.getDownloadURL().then((url) => window.open(url))
                    }
                  />
                </AccordionPanel>
                <AccordionPanel label='Prácticas'>
                  <Practicas practicas={practicas} />
                </AccordionPanel>
              </Accordion>
            </>
          ) : (
            <Box align='center'>
              <Spinner margin='medium' size='large' />
            </Box>
          )}
        </Box>
      </Route>
      <Route path='/form/:userId/:internshipId'>
        <Formulario />
      </Route>
      <Route path='/internship/:studentId/:internshipId'>
        <StudentApplications />
      </Route>
      <Route path='/applications/:applicationId'>
        <ApplicationDetails />
      </Route>
    </Switch>
  );
}

export default DashboardEstudiante;
