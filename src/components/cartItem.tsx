import React, {useState, useEffect} from 'react'
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { ChangeQuantity } from '../stores/cart';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    [key: string]: any;
}
interface CartItemProps {
    data: {
      productId: number;
      quantity: number;
    };
  }
const CartItem: React.FC<CartItemProps> = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState<Product | null>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
        dispatch(ChangeQuantity({
            productId: productId,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(ChangeQuantity({
            productId: productId,
            quantity: quantity + 1
        }));
    }
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={detail?.image} alt='' className='w-12'/>
        <h3>{detail?.name}</h3>
        <p>${detail?.price}</p>
        <div className='w-20 flex justify-between'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-black' onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-black' onClick={handlePlusQuantity}>+</button>
        </div>
    </div>
  )
}

export default CartItem