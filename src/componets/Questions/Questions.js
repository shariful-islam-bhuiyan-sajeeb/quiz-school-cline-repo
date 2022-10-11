import React from 'react';

const Questions = ({ quizQuestion }) => {
    console.log(quizQuestion);
    const { question, options } = quizQuestion;
  
    return (
        <div className='border-2 border-gray-300 rounded-lg px-4 py-6 my-20 lg:w-3/4 mx-auto md:w-11/12  text-center text-2xl '> 
            <div>
                <p className='font-semibold pb-6 '> {question}</p>

            </div>
             <div className='grid md:grid-cols-2 gap-4 pt-4'>
                {
                    options.map((option, idx) => <div className='bg-gray-200 rounded-lg' key={idx} >
                        <button className='py-3 w-full h-full'>{option}</button>
                     </div>)  
                }
                
             </div>
        </div>
    );
};

export default Questions;