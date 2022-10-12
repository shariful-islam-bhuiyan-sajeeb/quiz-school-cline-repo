import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizes = useLoaderData().data;
   
    const { id, name, questions}=quizes
   
    return (
        <div>
            <h1 className='text-center pt-10 text-4xl font-bold '>Quize Of {name}</h1>

           <div>
                {
                    questions.map(question => <Questions key={question.id} quizQuestion={question}  ></Questions> )
                }
           </div>
        </div>
    );
};

export default Quiz;