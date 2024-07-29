import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext/index'
import {PlusCircleIcon} from '@heroicons/react/24/solid'



function Card(data) {

    const {count, setCount, openProductDetail, closeProductDetail, isProductDetailOpen,productToShow , setProductToShow} = useContext(ShoppingCartContext)

    const showProduct = (productDetail) =>{
        openProductDetail()
        setProductToShow(productDetail)
    }

    return (
        <div
         className='bg-white cursor-pointer w-56 h-60 rounded-lg'
         onClick={()=> showProduct(data.data) }>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category} </span>
                <img className='w-full h-full object-cover rounded-lg ' src={data.data.image} alt={data.data.description} />
                <div
                className='absolute top-0 right-0 flex justify-center items-center'
                onClick={()=> setCount(count + 1)}>
                    <PlusCircleIcon className='h-6 w-6 text-gray-500'/>
                </div>
                <p className=' flex justify-between'>
                    <span className='text-sm font-light'>{data.data.title}</span>
                    <span className='text-lg font-medium'>${data.data.price}</span>
                </p>
            </figure>
        </div>
    )

}

export {Card}