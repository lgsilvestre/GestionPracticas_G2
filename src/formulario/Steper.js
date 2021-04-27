import { useState } from 'react'
import { Stepper } from 'react-form-stepper';
import {
    Button,
  } from 'grommet';
import Formulario from './Formulario';
  const Steper = () => {
    const [activeStep, setActiveStep] = useState(0);

    const predefinedForm = {
        "title": "Información Personal",
        "description": "",
        "required": ["fullname"],
        "properties": {
          "Name": {
            "title": "Nombre Completo"
          },
          "rut": {
              "title": "RUT"
            },
          "email": {
            "title": "Correo electronico"
          }
          ,
          "telefono": {
            "title": "Numero de telefono"
          }
          ,
          "contacto de emergencia": {
            "title": "Contacto de emergencia"
          },
          "Numero contacto de emergencia": {
              "title": "Numero contacto de emergencia"
            }
        },
        "ui": {
        },
        "values": {
            
        }
      }
      const predefinedForm1 = {
        "title": "Información de la empresa",
        "description": "",
        "required": [],
        "properties": {
          "Name": {
            "title": "Nombre de la empresa"
          },
         
        },
        "ui": {
        },
        "values": {
            
        }
      }
      


    const handleBack =   () => {
       setActiveStep(activeStep-1)
      }
    const handleNext= () => {
        setActiveStep(activeStep+1)
      }
    return (
    <>
        <Stepper
            steps={[{ label: 'Informacion Personal' }, { label: 'Informacion de la empresa' }, { label: 'Archivos' }]}
            activeStep={activeStep}
            />

       
        {activeStep === 0 &&(
            
            <Formulario 
                predefinedForm={predefinedForm}
                
                />

        )}
            
        {activeStep === 1 &&(
            <Formulario 
                predefinedForm={predefinedForm1}
                
            />
        )}

        {activeStep === 2 &&(
            <h1>Archivos</h1>
        )}


        {activeStep > 0 &&
          (
            <Button
                        
                label='back'
                color='red'
                onClick={handleBack}
            />
          )}
          {activeStep < 2 &&
          (
            <Button
            
            label='next'
            color='red'
            onClick={handleNext}
        />
          )}
        
        
    </>
    );
  }
  
  export default Steper;
  