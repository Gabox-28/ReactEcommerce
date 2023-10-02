import {useRoutes, BrowserRouter} from "react-router-dom";
import './App.css'
import {Home} from "../Home/index.jsx";
import {MyAccount} from "../MyAccount/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {SingIn} from "../SingIn/index.jsx";
import {Navbar} from "../../Components/Navbar/index.jsx";

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/Sign-in', element: <SingIn/>},
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
