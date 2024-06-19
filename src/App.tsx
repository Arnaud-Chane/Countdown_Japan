import { useEffect } from 'react';
import './App.css';
import ConvertDateToTimestamp from './services/ConvertDateToTimestamp';

function App() {

  useEffect(() => {
    console.log(ConvertDateToTimestamp("2024-11-20"));
    console.log(new Date().getTime());
  },[]);


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
