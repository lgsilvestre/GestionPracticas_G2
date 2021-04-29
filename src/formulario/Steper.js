import { useState } from 'react';
import { Stepper } from 'react-form-stepper';
import { Button } from 'grommet';
import Formulario from './Formulario';
const Steper = () => {
  const [activeStep, setActiveStep] = useState(0);

  //hay que setear los formularios

  const predefinedForm = {
    title: 'Información Personal',
    description: '',
    required: [
      'bbdecdc9-21f8-4b67-8327-92ec7ce39517',
      '97ad85c2-5c33-44f7-b281-14842e953722',
      'd9b5fc43-3341-4b26-90d8-2dabd51585da',
      'b0ad152a-ae02-45e8-af7c-157c7227dad2'
    ],
    properties: {
      '97ad85c2-5c33-44f7-b281-14842e953722': {
        title: 'Nombres',
        description: '',
        options: [],
        name: '97ad85c2-5c33-44f7-b281-14842e953722'
      },
      'd9b5fc43-3341-4b26-90d8-2dabd51585da': {
        title: 'Apellidos',
        description: '',
        options: [],
        name: 'd9b5fc43-3341-4b26-90d8-2dabd51585da'
      },
      'b0ad152a-ae02-45e8-af7c-157c7227dad2': {
        title: 'RUT',
        description: '',
        options: [],
        name: 'b0ad152a-ae02-45e8-af7c-157c7227dad2'
      }
    },
    ui: {
      intro: { widget: 'paragraph' },
      'bbdecdc9-21f8-4b67-8327-92ec7ce39517': {
        className: '',
        widget: 'checkbox',
        autofocus: false
      },
      'f6d7778e-eda1-4fcb-8a13-aca8df2c1a4b': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      '97ad85c2-5c33-44f7-b281-14842e953722': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'd9b5fc43-3341-4b26-90d8-2dabd51585da': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'b0ad152a-ae02-45e8-af7c-157c7227dad2': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'f6b3ed83-244a-4229-ad5c-ec6728297c75': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      '214cd2fb-5917-4acf-a978-3ccbb33c1c81': {
        className: '',
        widget: 'input',
        autofocus: false
      }
    },
    values: {}
  };
  const predefinedForm1 = {
    title: 'Información de la empresa',
    description: '',
    required: [
      'bbdecdc9-21f8-4b67-8327-92ec7ce39517',
      '97ad85c2-5c33-44f7-b281-14842e953722',
      'd9b5fc43-3341-4b26-90d8-2dabd51585da',
      'b0ad152a-ae02-45e8-af7c-157c7227dad2',
      'cfba77b5-36e9-43a6-9ff8-98acbab50dd3',
      '10782be3-7bd5-485d-bb44-1dac25d59b30',
      '90cec645-74f3-4410-ac11-702c900ef472',
      'dbe20097-fd78-4061-b283-2dd10eb201bb',
      'ac53a060-a706-434f-8c2c-455a9ab1bbcf',
      '9c4c2afc-8660-437e-9813-669088411beb',
      'e5ed138c-340f-471e-805e-993f6aebfeb7'
    ],
    properties: {
      'cfba77b5-36e9-43a6-9ff8-98acbab50dd3': {
        title: 'Nombre',
        description: '',
        options: [],
        name: 'cfba77b5-36e9-43a6-9ff8-98acbab50dd3'
      },
      '10782be3-7bd5-485d-bb44-1dac25d59b30': {
        title: 'RUT de empresa',
        description: '',
        options: [],
        name: '10782be3-7bd5-485d-bb44-1dac25d59b30'
      },
      '247be3f2-7fe3-458f-9d13-dfc699813e3b': {
        title: 'Datos Supervisor',
        description: '',
        options: [],
        name: '247be3f2-7fe3-458f-9d13-dfc699813e3b'
      },
      '90cec645-74f3-4410-ac11-702c900ef472': {
        title: 'Nombre',
        description: '',
        options: [],
        name: '90cec645-74f3-4410-ac11-702c900ef472'
      },
      'dbe20097-fd78-4061-b283-2dd10eb201bb': {
        title: 'Email',
        description: '',
        options: [],
        name: 'dbe20097-fd78-4061-b283-2dd10eb201bb'
      },
      'ac53a060-a706-434f-8c2c-455a9ab1bbcf': {
        title: 'Cargo',
        description: '',
        options: [],
        name: 'ac53a060-a706-434f-8c2c-455a9ab1bbcf'
      },
      '9c4c2afc-8660-437e-9813-669088411beb': {
        title: 'Teléfono',
        description: '',
        options: [],
        name: '9c4c2afc-8660-437e-9813-669088411beb'
      },
      'e5ed138c-340f-471e-805e-993f6aebfeb7': {
        title: 'RUT',
        description: '',
        options: [],
        name: 'e5ed138c-340f-471e-805e-993f6aebfeb7'
      }
    },
    ui: {
      intro: { widget: 'paragraph' },
      'bbdecdc9-21f8-4b67-8327-92ec7ce39517': {
        className: '',
        widget: 'checkbox',
        autofocus: false
      },
      'f6d7778e-eda1-4fcb-8a13-aca8df2c1a4b': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      '97ad85c2-5c33-44f7-b281-14842e953722': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'd9b5fc43-3341-4b26-90d8-2dabd51585da': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'b0ad152a-ae02-45e8-af7c-157c7227dad2': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'f6b3ed83-244a-4229-ad5c-ec6728297c75': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      '214cd2fb-5917-4acf-a978-3ccbb33c1c81': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'cfba77b5-36e9-43a6-9ff8-98acbab50dd3': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      '10782be3-7bd5-485d-bb44-1dac25d59b30': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      '247be3f2-7fe3-458f-9d13-dfc699813e3b': {
        className: '',
        widget: 'paragraph',
        autofocus: false
      },
      '90cec645-74f3-4410-ac11-702c900ef472': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'dbe20097-fd78-4061-b283-2dd10eb201bb': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'ac53a060-a706-434f-8c2c-455a9ab1bbcf': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      '9c4c2afc-8660-437e-9813-669088411beb': {
        className: '',
        widget: 'input',
        autofocus: false
      },
      'e5ed138c-340f-471e-805e-993f6aebfeb7': {
        className: '',
        widget: 'input',
        autofocus: false
      }
    },
    values: {}
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <>
      <Stepper
        steps={[
          { label: 'Informacion Personal' },
          { label: 'Informacion de la empresa' },
          { label: 'Archivos' }
        ]}
        activeStep={activeStep}
      />

      {activeStep === 0 && (
        <Formulario predefinedForm={predefinedForm} isStudent />
      )}

      {activeStep === 1 && (
        <Formulario predefinedForm={predefinedForm1} isStudent />
      )}

      {activeStep === 2 && <h1>Archivos</h1>}

      {activeStep > 0 && (
        <Button label='back' color='red' onClick={handleBack} />
      )}
      {activeStep < 2 && (
        <Button label='next' color='red' onClick={handleNext} />
      )}
    </>
  );
};

export default Steper;
