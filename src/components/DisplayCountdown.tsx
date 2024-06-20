import { useState, useEffect } from 'react';
import ConvertDateToTimestamp from '../services/ConvertDateToTimestamp';
import { useTime } from 'react-timer-hook';

function DisplayCountdown() {

  // const {
  //   seconds,
  //   minutes,
  //   hours,
  //   ampm,
  // } = useTime({ format: '12-hour'});

  function timerUpdate() {        
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    setTimeout(timerUpdate,1000);
    return `${h}-${m}-${s}`
    //Update the hour, minute and second in UI
}

useEffect(()=>{

},[new Date().getTime()])

  const [countdown, setCountdown] = useState(timerUpdate());

  return (
    <div>
      <h1>react-timer-hook </h1>
      <p>Current Time Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{countdown}</span>
      </div>
    </div>  )
}

export default DisplayCountdown