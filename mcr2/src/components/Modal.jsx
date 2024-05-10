import React from 'react'
import { GiCrossedBones } from "react-icons/gi";

const Modal = ({ isClicked, setSelected, selected }) => {

    const closeModal = () => {
        isClicked(false)
    }

    const handle = () => {
        setSelected(true)
        isClicked(false)
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            {!selected &&

                <div onClick={closeModal} className='w-full h-screen bg-black flex justify-center items-center'>

                    <div onClick={stopPropagation} className='w-[400px] flex justify-center items-center flex-col bg-zinc-300  text-center p-5 font-bold rounded-xl relative z-50'>

                        <span onClick={closeModal} className='absolute top-3 left-3 text-[20px] cursor-pointer '> <GiCrossedBones />
                        </span>

                        <h2 className=' text-zinc-700 text-2xl mt-10'>Click the button below to accept our amazing offer.</h2>

                        <button onClick={handle} className='bg-black text-white py-3 px-8 mt-8 rounded-xl'>Accept Offer
                        </button>

                    </div>


                </div>

            }
        </>
    )
}

export default Modal
