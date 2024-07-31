import {  useState } from 'react'
import { ShoppingCartContext } from '../ShoppingCartContext'


export const ShoppingCartProvider = ({children}) => {

    // Shopping cart
    const [ count, setCount ] = useState(0)

    //product detail open close
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

     //Checkout Side Menu open close
     const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false)
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //produc detail show porduct
    const [productToShow , setProductToShow ] = useState({})

    //Shoopin cart - add product to cart

    const [order , setOrder ] = useState([])

    //Shoopin cart - order

    const [cartProducts , setCartProducts ] = useState([])

    return (

        <ShoppingCartContext.Provider value={{
         count,
         setCount,
         openProductDetail,
         closeProductDetail,
         isProductDetailOpen,
         productToShow , 
         setProductToShow,
         cartProducts, 
         setCartProducts,
         isCheckoutSideMenuOpen, 
         openCheckoutSideMenu,
         closeCheckoutSideMenu,
         order,
         setOrder,
         
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )


}


