import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'




function ProductDetail() {

  const { closeProductDetail, isProductDetailOpen, productToShow} = useContext(ShoppingCartContext)
  
  return (
    <aside
     className={`${isProductDetailOpen ? 'flex':'hidden' } ProductDetail  flex-col fixed right-1 border border-black rounded-lg bg-white `}>
        <div className='flex justify-between items-center '>
            <h2 className='font-medium text-xl p-6'>Detail</h2>
            <div
             className='font-medium text-xl p-6 cursor-pointer'
             onClick={closeProductDetail}>
              <XMarkIcon className='h-6 w-6 text-black'/>
            </div>
        </div>
        <figure className='px-6 flex justify-center' >
          <img className='w-48 h-48 rounded-lg  '
            src={productToShow.image}
            alt={productToShow.title}/>
        </figure>
        <p className='flex  flex-col p-6 h-full '>
          <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
          <span className='font-medium text-md mb-3'>{productToShow.title}</span>
          <span className='font-light text-sm'>{productToShow.description}</span>
        </p>
    </aside>
  )
}

export { ProductDetail } 
