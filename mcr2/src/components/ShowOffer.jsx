
const ShowOffer = ({ onClick, selected }) => {

    return (
        <>
            <div className='flex bg-black justify-center items-center h-screen' >

                {selected
                    ?
                    (
                        <div className='w-full h-screen bg-zinc-600 flex justify-center items-center' >
                            <h1 className='text-5xl font-extrabold' >OFFER IS ACCEPTED</h1>
                        </div>
                    )
                    :
                    (
                        <button onClick={onClick} className='py-4 px-10 bg-zinc-600 text-white text-3xl font-bold rounded-xl cursor-pointer ' >Show Offer</button>
                    )
                }

            </div >
        </>
    )
}

export default ShowOffer
