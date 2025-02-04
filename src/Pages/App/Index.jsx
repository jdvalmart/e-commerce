import {useRoutes,BrowserRouter} from 'react-router-dom'
import {ShoppingCartProvider} from '../../context/ShoppingCartProvider/index'
import {Home} from '../Home'
import {MyAccount} from '../MyAccount'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {NotFound} from '../NotFound'
import {SignIn} from '../SignIn'
import {Navbar} from '../../components/Navbar/Index'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  
  let routes = useRoutes([
    {path:'/',element: <Home/>},
    {path:'/Menclothes',element: <Home/>},
    {path:'/Jewelery',element: <Home/>},
    {path:'/Electronics',element: <Home/>},
    {path:'/Womens clothing',element: <Home/>},

    {path:'/MyAccount',element: <MyAccount/>},
    {path:'/MyOrder',element: <MyOrder/>},
    {path:'/MyOrders',element: <MyOrders/>},
    {path:'/MyOrders/last',element: <MyOrder/>},
    {path:'/MyOrders/:id',element: <MyOrder/>},
    {path:'/*',element: <NotFound/>},
    {path:'/SignIn',element: <SignIn/>}
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export {App}
