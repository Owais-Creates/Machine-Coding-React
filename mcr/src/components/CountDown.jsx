import React from 'react'

const CountDown = (props) => {

    const { handlePause, handleResume,
        handleReset, isPaused,
        hours, minutes,
        seconds } = props

    return (
        <>
            <div className='bg-zinc-700 w-[350px] p-10 rounded-xl' >
                <div className='flex justify-center text-3xl gap-3 font-bold text-white' >
                    <p>{hours < 10 ? "0" + hours : hours} :</p>
                    <p>{minutes < 10 ? "0" + minutes : minutes} :</p>
                    <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                </div>

                <div className='flex mt-5 justify-center' >
                    <div>
                        {!isPaused && <button
                            onClick={handlePause}
                            className='bg-red-500 py-2 px-6 rounded-xl mr-8 font-bold text-white'>Pause</button>}

                        {isPaused && <button
                            onClick={handleResume}
                            className='bg-green-500 py-2 px-6 rounded-xl mr-4 font-bold text-white'>Resume</button>}

                    </div>

                    <button
                        onClick={handleReset}
                        className='bg-zinc-500 py-2 px-6 rounded-xl font-bold text-white'>Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default CountDown