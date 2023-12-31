import {useRoutes, BrowserRouter} from "react-router-dom";
import './App.css'
import {Home} from "../Home/index.jsx";
import {MyAccount} from "../MyAccount/index.jsx";
import {MyOrder} from "../MyOrder/index.jsx";
import {MyOrders} from "../MyOrders/index.jsx";
import {NotFound} from "../NotFound/index.jsx";
import {SingIn} from "../SingIn/index.jsx";
import {Navbar} from "../../Components/Navbar/index.jsx";
import {ShoppingCartProvider} from "../../context/index.jsx";

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/clothes', element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: '/furnitures', element: <Home/>},
    {path: '/toys', element: <Home/>},
    {path: '/others', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/*', element: <NotFound/>},
    {path: '/Sign-in', element: <SingIn/>},
  ])

  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
