import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../../components/OrderCard'
import { totalPrice } from '../utils'
import './style.css'




function CheckoutSideMenu() {

  const {  isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts} = useContext(ShoppingCartContext)
  
  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id)
    setCartProducts(filteredProducts)
  }

  return (
    <aside
     className={`${isCheckoutSideMenuOpen ? 'flex':'hidden' } Checkout-side-menu  flex-col fixed right-1 border border-black rounded-lg bg-white `}>
        <div className='flex justify-between items-center '>
            <h2 className='font-medium text-xl p-6'>My Order</h2>
            <div
             className='font-medium text-xl p-6 cursor-pointer'
             onClick={closeCheckoutSideMenu}>
              <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
            </div>
        </div>
        <div className='px-6 overflow-x-scroll'>
          {
            cartProducts.map(product=>(
              <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              handleDelete={handleDelete}
              />

            ))
          }
        </div>
        <div className='px-6'>
          <p className='flex justify-between items-center'>
            <span className='font-light'>Total:</span>
            <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
          </p>
        </div>
    </aside>
  )
}

export { CheckoutSideMenu } 
