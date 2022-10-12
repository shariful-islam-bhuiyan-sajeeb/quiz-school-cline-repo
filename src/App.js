import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './componets/Header/Header';
import Main from './componets/Layout/Main';
import Topics from './componets/Topics/Topics';
import Home from './componets/Home/Home';
import Statistics from './componets/Statistics/Statistics';
import About from './componets/About/About';
import Blog from './componets/Blog/Blog';
import HeaderImages from './componets/HeaderImages/HeaderImages';
import Quiz from './componets/Quiz/Quiz';
import Questions from './componets/Questions/Questions';
import Footer from './componets/Footer/Footer';
import ErrorPage from './componets/ErrorPage/ErrorPage';


function App() {
  const router = createBrowserRouter([
    {
     path:'/',
     loader:()=>{
       return fetch('https://openapi.programming-hero.com/api/quiz')
     },
     element:<Main></Main>,
     children:[
       {path: '/header',element: <Header></Header>},
       {path:'/headerImages', element:<HeaderImages></HeaderImages>},
       { path: '/', element: <Home></Home> },
       {path:'home',element:<Home></Home>},
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
    {path:'*', element: <ErrorPage></ErrorPage>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
