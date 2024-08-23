import React, { useEffect, useState } from 'react'
import { Dispatcher } from 'flux'

const dispatcher = new Dispatcher()
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const incrementAction = () => ({
    type : INCREMENT
})

const decrementAction = () => ({
    type : DECREMENT
})

let counter = 0;

const listeners = [];

const registerListener = (listener) => listeners.push(listener);

const notifyListeners = () => listeners.forEach( (listener) => listener(counter));

dispatcher.register( (action) => {
   switch(action.type) {
        case INCREMENT : 
            counter++;
            break;
        case DECREMENT : 
            counter--;
            break;
        default : 
            return;
   }
   notifyListeners();
});

const First = () => {
    const[count,setCount] = useState(counter)
    
    useEffect(() => {
        registerListener(setCount)
    },[]);

    const increFn = () => {
        dispatcher.dispatch(incrementAction());
    };

    const decreFn = () => {
        dispatcher.dispatch(decrementAction());
    };

    return (
        <div>
            <h1>Redux First Example</h1>
            Count is : {count} <br/><br/>
            <button onClick={increFn}>Increment</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={decreFn}>Decrement</button>
        </div>
    )
}

export default First;