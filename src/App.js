import React, { useContext } from 'react';
import './App.css';
import Landing from './login/Landing';
import Estudiante from './dashboard-estudiante/Estudiante';
import 'firebase/auth';
import { UserContext } from './providers/UserProvider';
import { Grommet } from 'grommet';
import Formulario from './formulario/Formulario';
import Steper from './formulario/Steper';

const theme = {
  global: {
    colors: {
      brand: '#f4971a',
      focus: '#000000'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
};

function App() {
  const user = useContext(UserContext);
  return (
    <Grommet theme={theme} full>
      {user ? <Steper /> : <Steper />}
    </Grommet>
  );
}

export default App;
