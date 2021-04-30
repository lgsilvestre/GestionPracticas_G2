import { useState } from 'react';
import { Stepper } from 'react-form-stepper';
import { Button, Form, FormField, TextInput, Box, Select, DateInput } from 'grommet';
import Formulario from './Formulario';
const Steper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setFormState] = useState({});
  const [value, setValue] = useState('Online');
  //hay que setear los formularios

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleEnviar = () => {
    console.log(form);
    //codigo bonito para enviar
  };

  return (
    <>
      <Stepper
        steps={[
          { label: 'Información personal' },
          { label: 'Información de la empresa' },
          { label: 'Archivos' }
        ]}
        activeStep={activeStep}
      />

      {activeStep === 0 && (
        <Box
          justify='center'
          direction='row-responsive'
          responsive='true'
          width='100%'>
          <Box pad='large' width='75%' justify='center' responsive='true'>
            <h1>Información personal</h1>
            <Form>
              <FormField
                name='name'
                htmlFor='text-input-id'
                label='Nombre completo'>
                <TextInput
                  id='text-input-id'
                  name='name'
                  value={form.nameStudent}
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      nameStudent: e.target.value
                    }))
                  }
                />
              </FormField>
              <FormField name='email' htmlFor='text-input-id' label='Correo'>
                <TextInput
                  id='text-input-email'
                  name='email'
                  type='email'
                  value={form.emailStudent}
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      emailStudent: e.target.value
                    }))
                  }
                />
              </FormField>
              <FormField
                name='enrollment'
                htmlFor='text-input-id'
                label='Numero de matricula'>
                <TextInput
                  id='text-input-id'
                  name='enrollment'
                  value={form.matricula}
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      matricula: e.target.value
                    }))
                  }
                />
              </FormField>
              <FormField name='phone' htmlFor='text-input-id' label='Telefono'>
                <TextInput
                  id='text-input-id'
                  name='phone'
                  value={form.phoneStudent}
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      phoneStudent: e.target.value
                    }))
                  }
                />
              </FormField>
              <FormField name='emergencyPhone' htmlFor='text-input-id' label='Telefono de emergencia'>
                <TextInput
                  id='text-input-id'
                  name='emergencyPhone'
                  value={form.emergencyPhoneStudent}
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      phoneStudent: e.target.value
                    }))
                  }
                />
              </FormField>
              <FormField name='rut' htmlFor='text-input-id' label='RUT'>
                <TextInput
                  id='text-input-id'
                  name='rut'
                  value={form.rutStudent}
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      rutStudent: e.target.value
                    }))
                  }
                />
              </FormField>
              <FormField name='modality' htmlFor='text-input-id' label='Modalidad'>
                
                <Select
                  options={['Online', 'Presencial', 'Mixta']}
                  value={form.modality}
                  onChange={({ option }) => setValue(option)
                  }
                />

              </FormField>
              <FormField name='healthCare' htmlFor='text-input-id' label='Seguro de salud'>
                
                <Select
                  options={['Fonasa', 'Isapre', 'No se sabe']}
                  value={form.healthCare}
                  onChange={({ option }) => setValue(option)
                  }
                />
              </FormField>
            </Form>
          </Box>
        </Box>
      )}

      {activeStep === 1 && (
        <>
          <Box
            justify='center'
            direction='row-responsive'
            responsive='true'
            width='100%'>
            <Box pad='large' width='75%' justify='center' responsive='true'>
              <h1>Informacion de la empresa</h1>
              <Form>
                <FormField name='name' htmlFor='text-input-id' label='Nombre'>
                  <TextInput
                    id='text-input-id'
                    name='name'
                    value={form.nameCompany}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        nameCompany: e.target.value
                      }))
                    }
                  />
                </FormField>
                <FormField
                  name='city'
                  htmlFor='text-input-id'
                  label='Ciudad donde se realizara la practica'>
                  <TextInput
                    id='text-input-id'
                    name='city'
                    value={form.city}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        city: e.target.value
                      }))
                    }
                  />
                </FormField>
                <FormField
                  name='startDate'
                  htmlFor='date-input-id'
                  label='Inicio de practica' 
                >
                  <DateInput
                    id='date-input-id'
                    name='startDate'
                    format="mm/dd/yyyy"
                    value={(new Date()).toISOString()}
                    onChange={({ value }) => {}
                      }
                />
                </FormField>
                <FormField
                  name='endDate'
                  htmlFor='date-input-id'
                  label='Fin de practica' 
                >
                  <DateInput
                    id='date-input-id'
                    name='endDate'
                    format="mm/dd/yyyy"
                    value={(new Date()).toISOString()}
                    onChange={({ value }) => {}
                      }
                />
                  </FormField>
              </Form>
              <h1>Informacion del supervisor</h1>
              <Form>
                <FormField
                  name='name'
                  htmlFor='text-input-id'
                  label='Nombre completo'>
                  <TextInput
                    id='text-input-id'
                    name='name'
                    value={form.nameSupervisor}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        nameSupervisor: e.target.value
                      }))
                    }
                  />
                </FormField>
                <FormField name='email' htmlFor='text-input-id' label='Correo'>
                  <TextInput
                    id='text-input-email'
                    name='email'
                    type='email'
                    value={form.emailSupervisor}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        emailSupervisor: e.target.value
                      }))
                    }
                  />
                </FormField>
                <FormField
                  name='position'
                  htmlFor='text-input-id'
                  label='Cargo'>
                  <TextInput
                    id='text-input-id'
                    name='position'
                    value={form.positionSupervisor}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        positionSupervisor: e.target.value
                      }))
                    }
                  />
                </FormField>
                <FormField
                  name='phone'
                  htmlFor='text-input-id'
                  label='Telefono'>
                  <TextInput
                    id='text-input-id'
                    name='phone'
                    value={form.phoneSupervisor}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        phoneSupervisor: e.target.value
                      }))
                    }
                  />
                </FormField>
                <FormField name='rut' htmlFor='text-input-id' label='RUT'>
                  <TextInput
                    id='text-input-id'
                    name='rut'
                    value={form.rutSupervisor}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        rutSupervisor: e.target.value
                      }))
                    }
                  />
                </FormField>
              </Form>
            </Box>
          </Box>
        </>
      )}

      {activeStep === 2 && <h1>Archivos</h1>}

      <Box
        align='center'
        alignContent='center'
        justify='center'
        responsive='true'
        width='100%'>
        <Box
          direction='row'
          pad='large'
          alignContent='center'
          width='100%'
          justify='center'
          responsive='true'>
          {activeStep > 0 && (
            <Box width='15%'>
              <Button label='volver' color='red' onClick={handleBack} />
            </Box>
          )}
          {activeStep < 2 && (
            <Box width='15%'>
              <Button label='siguiente' color='red' onClick={handleNext} />
            </Box>
          )}
          {activeStep === 2 && (
            <Box width='15%'>
              <Button label='Enviar' color='red' onClick={handleEnviar} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Steper;
