import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:5000'

function App() {
  const [ patients, setPatients] = useState([])
  const config = {url:`${BACKEND_URL}/patients`, method: 'get', headers: {'Access-Control-Allow-Origin': '*'}}
  useEffect(() => {
    axios(config).then(response => setPatients(response.data));
  },[])
  

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='cell border-bottom '>Name</div>
          <div className='cell border-bottom '>Age</div>
        </div>
        {patients.map(patient => <div className='row'>
          <div className='cell'>{patient.name}</div>
          <div className='cell'>{patient.age}</div>
        </div>)}
      </div>
    </div>
  );
}

export default App;
