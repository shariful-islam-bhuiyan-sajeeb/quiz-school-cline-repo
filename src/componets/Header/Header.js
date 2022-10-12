import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className='flex justify-around py-5 sticky top-0 z-20  bg-sky-100 shadow-xl   '> 
            <div className='flex ml-8'>
                <img className='w-20 mr-3 ' src="https://w7.pngwing.com/pngs/471/813/png-transparent-quiz-exam-icon-button-test-examination-logo-education-college-knowledge.png" alt="" />
                <h1 className='text-6xl text-green-400 font-bold'>Quiz</h1>
                <p className='pl-2 flex items-center text-2xl font-bold text-green-500'>School</p>
            </div>
            <div className='items-center  '>
                <Link className='px-4 text-3xl font-semibold text-black hover:bg-green-500  ' to='home'>Home</Link>
                {/* <Link className='px-4 text-3xl font-semibold text-black hover:bg-green-500 ' to='topics'>Topics</Link> */}
                <Link className='px-4 text-3xl font-semibold text-black hover:bg-green-500 ' to='Statistics'>Statistics</Link>
                <Link className='px-4 text-3xl font-semibold text-black hover:bg-green-500 ' to='about'>About</Link>
                <Link className='px-3 text-3xl font-semibold text-black hover:bg-green-500 ' to='blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;