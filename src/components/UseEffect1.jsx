import React, {useState, useEffect} from 'react';

const UseEffect1 = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log('hello world');
    {
      (count >= 1) ?  document.title = `Chats (${count})` :  document.title = `Chats`;
    }
  }, [count]);

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
