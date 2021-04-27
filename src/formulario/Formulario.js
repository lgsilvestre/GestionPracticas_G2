import { useState } from 'react'

import { FormBuilder, FormRender } from 'react-form-builder-component'
import 'react-form-builder-component/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'







const Formulario = ({predefinedForm}) => {
  const [form, setFormState] = useState({})


  const handleFormSubmit = (e) => {
    e.preventDefault()
    // handle form builder property save action
    console.log(JSON.stringify(form))
  }


  const handleSubmitDummy = (payload) => {
    // handle form submit action
  }

  const onFormBuilderUpdate = (payload) => {
    setFormState(payload)
  }
  return (
    <>
      
      
            <div className="container">
            <div className="row">
              <div className="col-12 col-sm-4"><FormBuilder onSave={handleFormSubmit} formState={predefinedForm} onChange={onFormBuilderUpdate} /></div>
              <div className="col text-muted border-left ">
                <h2>Preview</h2>
                <div className="form-preview border">
                  <FormRender {...form}
                    onsubmit={handleSubmitDummy} /></div>
    
              </div>
    
            </div>
          </div>
  
     
    </>


  )}

export default Formulario