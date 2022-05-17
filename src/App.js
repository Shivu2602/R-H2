import React, { useState } from 'react';
import './App.css';
import Forms from './Practice/Forms';
import Lists from './Practice/Lists';


function App() {
  const [employees, setEmployees] = useState([]);

const addEmployeeHandler = (employee) => {
  setEmployees([...employees, employee]);
}

  return (
    <div className="App">
      <Forms addEmployeeHandler={addEmployeeHandler}/>
      <Lists employees={employees}/>

    </div>
  );
}

export default App;
