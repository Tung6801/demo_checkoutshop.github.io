import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    console.log(carts);
    const {id, name, price, image, slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
        <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007] hover:scale-105'/>
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium cursor-pointer'>{name}</h3>
        <div className='flex justify-between items-center'>
            <p>
                ${price}<span className='text-2xl font-medium'></span>
            </p>
            <button className='bg-gray-300 p-2 rounded-md text-sm font-bold hover:bg-red-500 flex gap-2' onClick={handleAddToCart}>
                + Add To Cart +
            </button>
        </div>
    </div>
  )
}

export default ProductCart