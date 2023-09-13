import logo from './logo.svg';
import './App.css';
import Evento from './Evento';
import { useState } from 'react';

function hora(){
const data = new Date();
let msg;
if (data.getHours()<12){
   msg = 'bom dia'
}
return <h1>{'Ola '+ msg}</h1>

}


function App() {
  const [valorInput, setValor]=useState('');
  const pega = (event)=>{
    
    
    setValor(event.target.value);
  };
  return (
    <div  className="App">{hora()}
    <label htmlFor='Nome'>Nome:</label>
  <input id='Nome'value={valorInput} onChange={pega}/>
  
  <Evento teste={valorInput}/>
    
    
    
    </div>
  );
}
const teste ={
backgroundColor:'red',
color:'gray'
}


export default App;
