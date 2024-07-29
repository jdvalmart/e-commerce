import {  useState } from 'react'
import { ShoppingCartContext } from '../ShoppingCartContext'


export const ShoppingCartProvider = ({children}) => {

    // Shopping cart
    const [ count, setCount ] = useState(0)

    //product detail open close
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //produc detail show porduct
    const [productToShow , setProductToShow ] = useState([])

    return (

        <ShoppingCartContext.Provider value={{
         count,
         setCount,
         openProductDetail,
         closeProductDetail,
         isProductDetailOpen,
         productToShow , 
         setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )


}


