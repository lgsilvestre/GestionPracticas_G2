import { Box, Button, FileInput, Heading, List, Select, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { db, storage } from '../firebase';
import { Download, Trash } from 'grommet-icons';

function InternshipInfo() {
  const [selected, setSelected] = useState();
  const [careersList, setCareersList] = useState([]);
  const [editorState, setEditorState] = useState();
  const [docs, setDocs] = useState([]);
  const [file, setFile] = useState();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const unsubscribe = db.collection('careers').onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((career) => {
        const data = { id: career.id, ...career.data() };
        if (data.id === 'general') {
          setSelected(data);
          setEditorState(
            EditorState.createWithContent(convertFromRaw(data.info))
          );
        }
        list.push(data);
      });
      setCareersList(list);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (selected)
      storage
        .ref(`careers-docs/${selected.id}`)
        .listAll()
        .then((res) => setDocs(res.items));
  }, [selected, key]);

  function handleSave() {
    db.collection('careers')
      .doc(selected.id)
      .update({ info: convertToRaw(editorState.getCurrentContent()) });
  }

  function handleOnChange({ option }) {
    setSelected(option);
    setEditorState(EditorState.createWithContent(convertFromRaw(option.info)));
  }

  function handleDelete(item, index) {
    item.delete().then(() => setKey((prevKey) => prevKey + 1));
  }

  function handleUpload() {
    storage
      .ref(`careers-docs/${selected.id}/${file.name}`)
      .put(file)
      .then(() => {
        setKey((prevKey) => prevKey + 1);
      });
  }

  return (
    <Box pad='large'>
      <Heading>Información de prácticas</Heading>
      <Box direction='row-responsive' align='center' justify='end'>
        <Text margin='medium'>Carrera: </Text>
        <Select
          labelKey='name'
          margin='medium'
          onChange={handleOnChange}
          options={careersList}
          value={selected}
        />
      </Box>
      <Box margin='medium'>
        <Heading level='3'>Información a mostrar</Heading>
        <Box pad='small' border={{ color: '#ccc' }}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbar={{
              options: [
                'inline',
                'blockType',
                'list',
                'textAlign',
                'link',
                'emoji'
              ]
            }}
            editorStyle={{
              padding: '1rem',
              border: '1px solid #ccc',
              height: 'auto'
            }}
            toolbarStyle={{
              border: '1px solid #ccc'
            }}
          />
          <Button label='Guardar' margin='small' onClick={handleSave} primary />
        </Box>
      </Box>
      <Box margin='medium'>
        <Heading level='3'>Documentos</Heading>
        <List
          action={(item, index) => (
            <Box direction='row' key={index}>
              <Button
                icon={<Download />}
                onClick={() =>
                  item.getDownloadURL().then((url) => window.open(url))
                }
              />
              <Button
                icon={<Trash />}
                onClick={() => handleDelete(item, index)}
              />
            </Box>
          )}
          data={docs}
          primaryKey='name'
        />
        <FileInput
          accept='application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          key={key}
          margin='medium'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button label='Subir' margin='medium' onClick={handleUpload} primary />
      </Box>
    </Box>
  );
}

export default InternshipInfo;
