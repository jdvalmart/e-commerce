import { useContext } from 'react'
import { Layout } from '../../components/Layout'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import {OrdersCard}  from '../../components/OrdersCard'


function MyOrders() {
  const {order} = useContext(ShoppingCartContext)

 
  return (

    <Layout>
      <div className='flex items-center justify-center relative w-80  '>
        <h1>My Orders</h1>
      </div >
      
  
      {
          order.map((order, index) => (
            <Link key={index} to={`/MyOrders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}
                />
            </Link> 
            
          ))
        }
    </Layout>
  )
}

export  {MyOrders}
