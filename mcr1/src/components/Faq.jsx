// CREATE A FREQUENTLY ASKED QUESTIONS COMPONENT USING AN ARRAY OF QUESTIONS.
// THE FIRST FAQ SHOULD BE OPEN BY DEFAULT 

import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


const Faq = () => {

    const quesArr = [
        {
            question: "How many bones does a cat have?",
            answer: "A cat has 230 bones - 6 more than a human",
            visibility: true
        },
        {
            question: "How much do cats sleep?",
            answer: "The average cat sleeps 12-16 hours per day",
            visibility: false
        },
        {
            question: "How long do cats live",
            answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
            visibility: false
        },
    ]
    const [faqArr, setfaqArr] = useState(quesArr);


    const handleVisibility = (id) => {

        setfaqArr((prev) => {
          
            return prev.map((item,index) => (
                index == id ? {...item , visibility: !item.visibility} : item
            ))
        })

    }

    return (
        <>
            {faqArr.map((item, index) => (
                <div key={index} className=' bg-zinc-500 w-[600px] p-6 rounded-xl mb-5 ' >

                    <h2
                        className='text-2xl text-black font-bold flex items-center gap-2 mb-3' >
                        <span onClick={() => handleVisibility(index)} className='text-[30px] cursor-pointer'><IoMdArrowDropdown color='white' /></span>
                        {item.question}
                    </h2>

                    <hr />

                    {item.visibility &&
                        (<div>
                            <p className='text-[20px] text-center mt-5 text-white font-semibold' >{item.answer}</p>
                        </div>)
                    }
                </div>
            ))}
        </>
    )
}

export default Faq