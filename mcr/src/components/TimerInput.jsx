import React from 'react'

const TimerInput = ({handleStart , handleInput}) => {
    return (
        <>
            <div className=' bg-zinc-500 rounded-xl p-5'>
                <input
                    onChange={handleInput}
                    className='w-[80px] mr-2 text-white text-2xl p-5 text-center bg-zinc-700' id='hours' type="text" placeholder='HH' />

                <input
                    onChange={handleInput}
                    className='w-[80px] mr-2 text-white text-2xl p-5 text-center bg-zinc-700' id='minutes' type="text" placeholder='MM' />

                <input
                    onChange={handleInput}
                    className='w-[80px] mr-2 text-white text-2xl p-5 text-center bg-zinc-700' id='seconds' type="text" placeholder='SS' />

                <button
                    onClick={handleStart}
                    className='bg-green-700 py-2 ml-4 px-6  text-white font-bold rounded-xl' >Start</button>
            </div>
        </>
    )
}

export default TimerInput