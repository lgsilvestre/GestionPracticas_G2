import { Box, Button, Heading, Select, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { db } from '../firebase';

function InternshipInfo() {
  const [selected, setSelected] = useState();
  const [careersList, setCareersList] = useState([]);
  const [editorState, setEditorState] = useState();

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

  function handleSave() {
    db.collection('careers')
      .doc(selected.id)
      .update({ info: convertToRaw(editorState.getCurrentContent()) });
  }

  function handleOnChange({ option }) {
    setSelected(option);
    setEditorState(EditorState.createWithContent(convertFromRaw(option.info)));
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
          wrapperStyle={{
            padding: '1rem',
            border: '1px solid #ccc'
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
      </Box>
      <Button label='Guardar' margin='medium' onClick={handleSave} primary />
    </Box>
  );
}

export default InternshipInfo;
