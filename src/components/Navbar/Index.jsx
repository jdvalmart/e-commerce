import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext/index'
import { NavLink } from 'react-router-dom'
import {ShoppingBagIcon} from '@heroicons/react/24/solid'

function Navbar() {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'
    

    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 txt-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                    to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/Menclothes'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Women's clothing
                    </NavLink>
                </li>
                
            </ul>
            <ul className='flex items-center gap-3 '>
                <li className='text-black/60'>
                    jvalmart@mail.com
                </li>
                <li>
                    <NavLink 
                    to='/MyOrders'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/MyAccount'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/SignIn'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex justify-between items-center'>
                <ShoppingBagIcon className='h-6 w-6 text-black'/>
                <div>{context.count}</div> 
                </li>
                
            </ul>
        </nav>
    )
}
export {Navbar}