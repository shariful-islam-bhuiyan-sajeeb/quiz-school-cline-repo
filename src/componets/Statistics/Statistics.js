import React, { useContext } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { LoderDataContext } from '../Layout/Main';

const Statistics = () => {
    const loadQuiz = useContext(LoderDataContext).data;
    const {total}=loadQuiz[0]
   
    return (
        <div className='bg-slate-200 p-10'>
           <LineChart  width={500} height={300} data={loadQuiz} > 
                  
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;