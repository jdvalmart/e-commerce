import {  useContext } from 'react'
import { Layout} from '../../components/Layout'
import { Card } from '../../components/Card'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import {ProductDetail} from '../../components/ProductDetail/ProductDetail'



function Home() {
 
  const {  items, setItems, searchByTitle,setSearchByTitle} = useContext(ShoppingCartContext)



  return (
   <Layout>
       <div className='flex items-center justify-center relative w-80 mb-4 '>
        <h1 className='font-medium text-xl'> Exclusive Products</h1>
      </div >
      <input
       type="text" 
       placeholder='Search a product'
       className='rounded-lg border  border-black w-80 p-4 mb-4 focus:outline-none'
       onChange={(event)=> setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
          <Card key={item.id} data={item} />
        ))
        }
      
      </div>  
      <ProductDetail/>
   </Layout>
  )
}

export {Home}
