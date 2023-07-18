import React, {useState, useEffect} from 'react';
import useTitleCount from './useTitleCount';

const UseEffect1 = () => {

  const [count, setCount] = useState(0);

  useTitleCount(count);

  return (
    <div className='designing'>
      <h1>{count}</h1> 
      <button onClick={
        () => setCount(count + 1)
      }>Click</button>
    </div>
  )
}

export default UseEffect1
