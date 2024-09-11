import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

const  OrdersCard = props => {

  const {totalPrice, totalProducts} = props

  const currenDate = () => {
    const date = new Date().toLocaleDateString()
    return date
  }

  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg mb-4 w-80 p-4'>
        <p className='flex justify-between'>
          <div>
            <span className='font-light'>{currenDate()}</span>
            <span>{totalProducts} articles</span>
          </div>
            
            <span>{totalPrice}</span>
        </p>
        
    </div>
  )
}

export {OrdersCard}
