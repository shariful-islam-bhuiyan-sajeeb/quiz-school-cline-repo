import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className='flex md:justify-around justify-between px-2  py-5 sticky top-0 z-20  bg-sky-100 shadow-xl   '> 
            <div className='flex md:ml-8'>
                <img className='lg:w-20 md:w-10 w-6 mr-3 ' src="https://w7.pngwing.com/pngs/471/813/png-transparent-quiz-exam-icon-button-test-examination-logo-education-college-knowledge.png" alt="" />
                <h1 className='lg:text-6xl md:text-2xl text-xl   text-green-400 font-bold'>Quiz</h1>
                <p className='pl-2 flex items-center md:text-2xl text-lg font-bold text-green-500'>School</p>
            </div>
            <div className='flex flex-row-reverse '>
                
                <div className='w-6 h-6 md:hidden block' onClick={()=>setOpen(!open)}>
                    {
                        open ? <FontAwesomeIcon icon={faXmark}  /> : <FontAwesomeIcon icon={faBars}/>
                    }
                </div>
                <div className={`flex md:flex-row flex-col     w-full justify-center duration-500 ease-in-out  z-50 md:static absolute gap-5 ${open ? "bg-slate-200 top-12" : "-top-56"
                    }`}>
                    <Link className='px-4 text-3xl font-semibold text-black hover:bg-green-500  ' to='home'>Home</Link>
                   
                    <Link className='px-4 text-3xl font-semibold text-black hover:bg-green-500 ' to='Statistics'>Statistics</Link>
                    {/* <Link className='px-4 text-3xl font-semibold text-black hover:bg-green-500 ' to='about'>About</Link> */}
                    <Link className='px-3 text-3xl font-semibold text-black hover:bg-green-500 ' to='blog'>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;