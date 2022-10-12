import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './componets/Header/Header';
import Main from './componets/Layout/Main';
import Topics from './componets/Topics/Topics';

import Statistics from './componets/Statistics/Statistics';
import About from './componets/About/About';
import Blog from './componets/Blog/Blog';

import Quiz from './componets/Quiz/Quiz';
import ErrorPage from './componets/ErrorPage/ErrorPage';
import MainPage from './componets/MainPage';


function App() {
  const router = createBrowserRouter([
    {
     path:'/',
     loader:()=>{
       return fetch('https://openapi.programming-hero.com/api/quiz')
     },   
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
     children:[
       
       { path: '/', element: <MainPage></MainPage> },
       {path:'home',element:<MainPage></MainPage>},
       {path:'topics', element:<Topics></Topics>},
       {path:'statistics', 
       element:<Statistics></Statistics>},
       {path:'about', element:<About></About>},
       {path:'blog', element:<Blog></Blog>},

       {path:'quiz/:id',
        loader :({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
       },element:<Quiz></Quiz>},
       

     ]
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
