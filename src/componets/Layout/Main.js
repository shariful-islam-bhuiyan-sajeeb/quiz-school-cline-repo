import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const LoderDataContext = createContext([])

const Main = () => {
    const quiz = useLoaderData()
    return (
        
        <LoderDataContext.Provider value={quiz}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </LoderDataContext.Provider>
    );
};

export default Main;