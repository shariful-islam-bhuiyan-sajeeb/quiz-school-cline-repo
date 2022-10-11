import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'


const Questions = ({ quizQuestion }) => {
    const [count,setCount]=useState('')
    // console.log(count);
    const { question, options, correctAnswer } = quizQuestion;
    // console.log(question);
    const questionError = correctAnswer.replaceAll(' ','')
    const getInnerText =(btn)=>{
        const btnError = btn.replaceAll(' ','');
        if(questionError === btnError){
           toast.success('Congratulation your!!',{autoClose:500} )
        }else{
            toast.warning('Wrong answer your!!', { autoClose: 500 })
        }
    }

    const eyeCurrectAnswer =(answer)=>{
        setCount(answer)
        console.log(answer);
    }
  
    return (
        <div className='border-2 border-gray-300 rounded-lg px-4 py-6 my-20 lg:w-3/4 mx-auto md:w-11/12  text-center text-2xl  shadow-xl relative '> 
            <div className='flex justify-between '>
                <p className='font-semibold pb-6 text-center '> {question}</p>
                <p> <EyeIcon onClick={() => eyeCurrectAnswer(correctAnswer) } className="h-6 w-6 text-blue-500" /></p>
                <p className='absolute right-16'> {count}</p>
                
            </div>
             <div className='grid md:grid-cols-2 gap-4 pt-4'>
                {
                    options.map((option,idx) => <div className='bg-gray-200 rounded-lg shadow- shadow-lg' key={idx} >
                        <button onClick={(e) => getInnerText(e.target.innerText) } className='py-3 w-full h-full'> <input className='' type="radio" /> {option}</button>
                     </div>)  
                }
                
             </div>
        </div>
    );
};

export default Questions;