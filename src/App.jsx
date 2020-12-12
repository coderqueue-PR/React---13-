import React, { useState } from 'react';

const App = () =>{
    const [name , setName] = useState(""); 
    const [lastName , setLastName] = useState('');

    const [fullName , setFullName] = useState(); 
    const [lastNamenew , setLastNamenew] = useState();

    const onsubmits = (event) =>{
        event.preventDefault();
        setFullName(name);
        setLastNamenew(lastName);
    }


    const inputEvent = (event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    };    

    const inputEventTwo = (event) =>{
        setLastName(event.target.value);
    }
    return(
    <>
        <div className="main_div">
        <form onSubmit={onsubmits}>
        <div>
            <h1>Hello {fullName} {lastNamenew}</h1>
            <input type = 'text' 
            placeholder='Enter your name'
             onChange={inputEvent}
                value = {name}
             />
            <input type = 'text' 
            placeholder='Enter your LastName'
             onChange={inputEventTwo}
                value = {lastName}
             />
            <button type='submit'>Submit</button>
        </div>
        </form>
        </div>
    </>
    )
}

export default App;