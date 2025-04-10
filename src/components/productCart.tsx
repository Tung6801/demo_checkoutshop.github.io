import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import { RootState } from '../stores';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    slug: string;
    [key: string]: any;
}
type ProductCartProps = {
    data: Product;
}
type CartItem = {
    productId: number;
    quantity: number;
}
const ProductCart: React.FC<ProductCartProps> = ({data}) => {
    const carts = useSelector((store: RootState) => store.cart.items);
    console.log(carts);
    const {id, name, price, image, slug} = data;
    const dispatch = useDispatch();
    
    const handleAddToCart = (): void => {
        const cartItem: CartItem = {
            productId: id,
            quantity: 1
        };
        dispatch(addToCart(cartItem));
    };
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between h-[500px]'>
        <Link to={slug}>
        <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007] hover:scale-105'/>
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium cursor-pointer'>{name}</h3>
        <div className='flex justify-between items-center mt-auto'>
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