import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-around py-5   bg-sky-100   '> 
            <div className='flex ml-8'>
                <h1 className='text-6xl text-green-400 font-bold'>Quiz</h1>
                <p className='pl-2 flex items-center text-2xl font-bold text-green-500'>School</p>
            </div>
            <div className=''>
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