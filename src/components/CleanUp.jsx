import React, { useEffect, useState } from 'react'

const CleanUp = () => {

  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    // console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  }

  useEffect(() => {
   window.addEventListener('resize', actualWidth);

   return () => {
    window.removeEventListener('resize', actualWidth); //CleanUp Function
   }
  })

  return (
    <div className='designing'>
      <h3>The actual size of screen:</h3>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default CleanUp
