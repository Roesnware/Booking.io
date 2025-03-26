// import DOM and router 
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages 
import App from './App.jsx';
import Home from './pages/homePage/home.jsx';
import Signup from './pages/signupPage/signup.jsx';
import Login from './pages/loginPage/login.jsx';
import ErrorPage from './pages/errorPage/error.jsx';
import Dashbaord from './pages/dashboardPage/dashboard.jsx';
import Account from './pages/accountPage/account.jsx';

// define router paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/dashboard',
        element: <Dashbaord />
      }, {
        path: '/account/:customerId',
        element: <Account />
      }
    ]
  },
]);

// mount router
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);