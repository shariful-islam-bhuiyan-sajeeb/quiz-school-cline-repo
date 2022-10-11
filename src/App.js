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
       {path:'home',element:<Home></Home>},
       {path:'topics', element:<Topics></Topics>},
       {path:'statistics', element:<Statistics></Statistics>},
      {path:'about', element:<About></About>},
      {path:'blog', element:<Blog></Blog>},
      {path:''}
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
