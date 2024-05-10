// Create a dismissible modal overlay. 
// The UI should initially show a 'Show offer' button which, when clicked, displays an overlay resembling the mockup     below, including a transparent grey overlay over the background.
// The modal should be vertically and horizontally centered, and always in the same position regardless of scrolling.

import React, { useState } from 'react'
import ShowOffer from './components/ShowOffer'
import Modal from './components/Modal'

const App = () => {

  const [clicked, isClicked] = useState(false);
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    isClicked(true)
  }


  return (
    <>
      <div className='w-full h-screen bg-red-zinc'>
        {clicked
          ?
          <Modal isClicked={isClicked}  setSelected={setSelected} selected={selected} 
          clicked={clicked} />
          :
          <ShowOffer onClick={handleClick} selected={selected} />}
      </div>
    </>
  )
}

export default App

