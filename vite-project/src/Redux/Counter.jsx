import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement } from './counterSlice'

function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;


// for send actions to the reducers================dispatch()
// get updated value =======useSelected Hook