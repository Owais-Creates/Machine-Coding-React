import React from 'react'
import Faq from './components/Faq'

const App = () => {



  return (
    <>
      <div className='flex flex-col pt-32 items-center w-full h-screen bg-zinc-400' >
        <h1 className=' font-sans text-4xl font-bold text-white mb-10' >FAQ's About CATS</h1>
        <Faq />
      </div>
    </>
  )
}

export default App