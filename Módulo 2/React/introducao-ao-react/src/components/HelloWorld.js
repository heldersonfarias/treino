import React from "react";

export function HelloWorld({helloWorld, key}) {
    function getCurrentDate(){
      const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleString(date, options);
    }

    const currentDate = getCurrentDate()
    
    return (
      <li key={key}>{helloWorld} {currentDate}</li>
    )
}

export default HelloWorld;