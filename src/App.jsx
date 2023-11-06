import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registro } from './components/Registro';
import { useState } from 'react';


function App() {
const [error, setError] = useState("")

  return (
    <>
    <Registro setError={setError}
    error={error}/>
    </>

  )
}

export default App
