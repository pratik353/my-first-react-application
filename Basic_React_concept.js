import { useState, useEffect } from 'react';
import './App.css';

//Creating Our Own Component
const Persone = (props) => {   
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2> Last name : {props.lastName}</h2>
      <h2>Age : {props.age}</h2>
    </>
  )
}

// Using of State in react
const StateInReact = () =>{
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    //Counter = 100; // we can't change it manually coz it is part of state use setter function to change it
    //setCounter(100); // it goes to often coz first change through setCounter then it goes to counter which refer to setCounter , Coz it go infinite so use depenancy array[]
    alert("Counter changes to " + Counter)
  }, [Counter]);  // dependancy arrya is used to run function only on when we change that variable only eg. [Counter], empty array shows it will run only on intially.

  return(
    <>
    <h1>Simple Counter In React</h1>
    <button onClick={() => setCounter((prevCount)=> prevCount - 1)}>-</button>
    <h1>{Counter}</h1>
    <button onClick={() => setCounter((prevCount)=> prevCount + 1)}>+</button>
    </>
  )
}



const App = () => {
  // const name = "Pratik";
  // const isName = true;

  return (
    <div className="App">

    <Persone name="Pratik" lastName="Kamble" age={22}/>  {/* Using Own created Component in Higher Component in App  */}
    {/* <Persone name="Vikas" lastName="patil" age={25}/>  We can use multiple times our cooponent in a app  */}

    <StateInReact/> {/* component calling */}
    
    

      {/* <h1>Hello, {isName ? name : "someone"}!</h1> {/*Using like if else    
      {name ? 
      (<>
        <h1>React Developer</h1>
        </>) 
      :                                                 Manually added code in App Component which is return to root Element
      (<>
        <h1>Test</h1>
        <h2>There is no more!</h2>
        </>)

      } */}

    </div>
  );
}

export default App;
