import React, { useState } from 'react'

const FAQItem = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className='w-full px-4 py-6 border-t border-gray-300'>
            <div className='text-xl text-gray-800 font-semibold flex justify-between items-center'>
                {props.question}
                <button onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? 
                        <span class="iconify mdi--minus w-6 h-6"></span> : <span class="iconify mdi--plus w-6 h-6"></span>
                    }                                
                </button>
            </div>
            {showAnswer ?
                <div className='text-lg text-gray-600 mt-5'>
                    {props.answer}
                </div>
                : 
                <div></div>
            }
        </div>
    )
}

export default FAQItem