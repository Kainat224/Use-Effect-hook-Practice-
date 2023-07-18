import React, { useReducer, useState } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    // return console.log(state, action);
    if(action.type === 'Increment'){
        return state + 1;
    }
    if(action.type === 'Decrement'){
        return state - 1;
    }

}

const UseReduser = () => {
    // const [counts, setCounts] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <div className='designing'>
      <p className='display-1'>{state}</p>
      <button onClick={() => dispatch({type: 'Increment'})}>Inc</button>
      <button onClick={() => dispatch({type: 'Decrement'})}>Dec</button>
    </div>
  )
}

export default UseReduser
