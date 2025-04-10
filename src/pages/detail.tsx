import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../products';
import {useDispatch} from 'react-redux';
import {addToCart} from '../stores/cart';
import { AppDispatch } from '../stores';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  description: string;
  [key: string]: any;
}
interface CartItem {
  productId: number;
  quantity: number;
}
const Detail:React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [detail, setDetail] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const findDetail = products.find(product => product.slug === slug);
    if(findDetail) {
      setDetail(findDetail);
    }else{
      navigate('/', { replace: true });
    }
  },[slug, navigate])
  const handleMinusQuantity = (): void => {
    setQuantity(prev => Math.max(1, prev - 1));
  }
  const handlePlusQuantity = (): void => {
    setQuantity(prev => prev + 1);
  }
  const handleAddToCart = (): void => {
    if (!detail) return;
    
    const cartItem: CartItem = {
      productId: detail.id,
      quantity: quantity
    };
    
    dispatch(addToCart(cartItem));
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className='text-3xl text-center mb-8 font-semibold'>Product Detail</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className="flex justify-center">
          <img 
            src={detail?.image}
            className='w-full max-w-md object-cover'
          />
        </div>
        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='text-4xl font-bold mb-2'>{detail?.name}</h1>
            <p className='text-3xl font-semibold text-red-600'>
              ${detail?.price.toFixed(0)}
            </p>
          </div>
          
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <button 
                  className='bg-gray-100 h-12 w-12 font-bold text-xl rounded-xl flex justify-center items-center hover:bg-gray-200 transition-colors'
                  onClick={handleMinusQuantity}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className='bg-gray-200 h-12 w-12 font-bold text-xl rounded-xl flex justify-center items-center'>
                  {quantity}
                </span>
                <button 
                  className='bg-gray-100 h-12 w-12 font-bold text-xl rounded-xl flex justify-center items-center hover:bg-gray-200 transition-colors'
                  onClick={handlePlusQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button 
                className='bg-slate-900 text-white px-6 py-3 rounded-xl shadow-md font-bold hover:scale-105 transition-transform duration-200'
                onClick={handleAddToCart}
                aria-label={`Add ${detail?.name} to cart`}
              >
                Add To Cart
              </button>
            </div>
          </div>

          <div className='mt-4'>
            <h3 className='text-xl font-semibold mb-2'>Description</h3>
            <p className='text-gray-700 leading-relaxed'>
              {detail?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail