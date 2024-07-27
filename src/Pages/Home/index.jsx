import { useState, useEffect } from 'react'
import { Layout} from '../../components/Layout'
import { Card } from '../../components/Card'



function Home() {
 const [ items, setItems ] = useState(null)

 useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then( res =>res.json() )
    .then( data => setItems(data))
 },[])


  return (
   <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
          <Card key={item.id} data={item} />
        ))
        }
      
      </div>
     
   </Layout>
  )
}

export {Home}
