import {  useContext } from 'react'
import { Layout} from '../../components/Layout'
import { Card } from '../../components/Card'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import {ProductDetail} from '../../components/ProductDetail/ProductDetail'



function Home() {
 
  const {  items, setItems, searchByTitle,setSearchByTitle, filteredItems} = useContext(ShoppingCartContext)

  const renderView = ()=> {
      if(filteredItems?.length > 0){
        return ( 
          filteredItems?.map((item) => (
           <Card key={item.id} data={item} />
         ))
       )
      } else {
        return (
          <div className="text-center mt-5">No hay concidencias</div>
        )
      }
     
    } 
  



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
        {renderView()}
      
      </div>  
      <ProductDetail/>
   </Layout>
  )
}

export {Home}
