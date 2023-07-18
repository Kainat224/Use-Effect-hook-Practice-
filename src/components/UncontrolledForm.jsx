import React, { useRef, useState } from 'react';

const UncontrolledForm = () => {
    const [show, setShow] = useState(false);

    //its like useState hook. But its not re-render. DOM 
    const luckyName = useRef()
    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("Fill the Form Below") : setShow(true);
    }

    return (
        <div className='designing'>
        <form action="" onSubmit={submitForm}>
            <label htmlFor="">Enter Your Lucky Name: </label>
            <br/>
            <input type="text" id='luckyName' ref={luckyName} className='my-3'/>
            <br/>
            <button>Sbmit</button>
        </form>
        <br/>
        <p>{ show ? `Your Lucky Name is ${luckyName.current.value}` : "Enter Your Lucky Name" }</p>
        </div>
  )
}

export default UncontrolledForm
