import React, { useEffect, useState } from 'react'
import { Dispatcher } from 'flux'

const dispatcher = new Dispatcher()
const KARTHIK = "KARTHIK"
const SRINATH = "SRINATH"

const karthikAction = () => ({
    type : KARTHIK
})

const srinathAction = () => ({
    type : SRINATH
})

let counter = "";

const listeners = [];

const registerListener = (listener) => listeners.push(listener);

const notifyListeners = () => listeners.forEach( (listener) => listener(counter));

dispatcher.register( (action) => {
   switch(action.type) {
        case KARTHIK : 
            counter="Hi Karthik";
            break;
        case SRINATH : 
            counter="Hi Srinath...";
            break;
        default : 
            return;
   }
   notifyListeners();
});

const Demo = () => {
    const[count,setCount] = useState(counter)
    
    useEffect(() => {
        registerListener(setCount)
    },[]);

    const karthikFn = () => {
        dispatcher.dispatch(karthikAction());
    };

    const srinathFn = () => {
        dispatcher.dispatch(srinathAction());
    };

    return (
        <div>
            <h1>Redux First Example</h1>
            Count is : {count} <br/><br/>
            <button onClick={karthikFn}>Karthik</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={srinathFn}>Srinath</button>
        </div>
    )
}

export default Demo;