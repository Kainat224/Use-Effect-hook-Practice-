import React, {useState, useEffect} from 'react';
import useTitleCount from './useTitleCount';

const CustomHookTest = () => {

  const [count, setCount] = useState(0);

  //Custom Hook
  useTitleCount(count);

  return (
    <div className='designing'>
      <h1>{count}</h1> 
      <button onClick={
        () => setCount(count + 1)
      }>Coustom Hook</button>
    </div>
  )
}

export default CustomHookTest
