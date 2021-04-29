import React, { useState } from 'react';

import { FormBuilder, FormRender } from 'react-form-builder-component';
import 'react-form-builder-component/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Formulario = (props) => {
  const [form, setFormState] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form builder property save action
    console.log(JSON.stringify(form));
    //codigo para guardar formulario de la carrera
  };

  const handleSubmitDummy = async (payload) => {
    await setFormState(props.predefinedForm);

    await setFormState((prevState) => ({
      ...prevState,
      values: payload
    }));

    await console.log(form);

    // codigo para guardar el formulario del estudiante
  };

  const onFormBuilderUpdate = (payload) => {
    setFormState(payload);
  };
  return (
    <>
      {props.isAdmin && (
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-4'>
              <FormBuilder
                onSave={handleFormSubmit}
                formState={props.predefinedForm}
                onChange={onFormBuilderUpdate}
              />
            </div>
            <div className='col text-muted border-left '>
              <h2>Preview</h2>
              <div className='form-preview border'>
                <FormRender {...form} onsubmit={handleSubmitDummy} />
              </div>
            </div>
          </div>
        </div>
      )}
      {props.isStudent && (
        <>
          <FormRender {...props.predefinedForm} onsubmit={handleSubmitDummy} />
        </>
      )}
    </>
  );
};

export default Formulario;
