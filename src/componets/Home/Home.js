import { faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderImages from '../HeaderImages/HeaderImages';
import { LoderDataContext } from '../Layout/Main';

const Home = () => {
    const loadQuiz = useContext(LoderDataContext).data
    // console.log(loadQuiz);
    return (
        <div className=''>
            <HeaderImages></HeaderImages>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:px-16 py-10 '>
                {
                    loadQuiz.map(quiz => <div className='bg-purple-200 rounded-lg shadow-lg' key={quiz.id}>
                         <img className='w-full p-4  shadow-md ' src={quiz.logo}  alt="" />
                          <div className='flex justify-between items-center  py-3 px-2'><h1 className='text-2xl text-black'>{quiz.name}</h1>
                            <Link to={`/quiz/${quiz.id}`}><button className=' px-8 text-2xl font-bold text-black py-3 rounded-lg bg-blue-500 '><span> Start Quiz</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
                          </div>
                          </div> )
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;