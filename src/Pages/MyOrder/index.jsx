import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../../components/OrderCard'
import { Layout } from '../../components/Layout'

function MyOrder() {

  const {  order, setOrder} = useContext(ShoppingCartContext)
  const currenPath = window.location.pathname
  let index = currenPath.substring(currenPath.lastIndexOf('/') + 1)

  if (index === 'last') index = order?.length - 1
 
  

    return (
      
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-8 '>
          <Link to='/MyOrders' className='absolute left-0'>
           <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
          </Link>

          <h1>My Order</h1>
        
        </div>
    
        <div className='flex flex-col w-80'>
          {
            order?.[index]?.products.map(product=>(
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />

            ))
          }
        </div>
      </Layout>
    )
  }
  
  export {MyOrder}
  