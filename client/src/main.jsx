import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Success from './pages/Success.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import App from './App.jsx'
import AddCategory from './components/AddCategory/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
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
        path: '/products/:id',
        element: <Detail />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/success',
        element: <Success />
      }, {
        path: '/add-category',
        element: <AddCategory/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)