import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import NewMovieForm from './components/NewMovieForm';
import Watchlist from './components/Watchlist';
import ErrorPage from './components/ErrorPage';
import MoviesContainer from './components/MoviesContainer';
import About from './components/About';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/addmovie",
//     element: <NewMovieForm />,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/movies",
//     element: <App />,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/watchlist",
//     element: <Watchlist />,
//     errorElement: <ErrorPage/>
//   }
// ]);

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
          {
            path: "/addmovie",
            element: <NewMovieForm />,
          },
          {
            path: "/movies",
            element: <MoviesContainer />,
            
          },
          {
            path: "/about",
            element: <About />,
            
          }
      ]
    }
])









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
