import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { toggleStatusTab, clearCart } from "../stores/cart";
import { products } from "../products";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [isCartEmpty, setCartEmpty] = useState(false);

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const totalAmount = carts.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const handleCheckout = () => {
    if (carts.length === 0) {
      setCartEmpty(true);
    } else {
      setCheckoutModalOpen(true);
    }
  };

  const handleConfirmCheckout = () => {
    setCheckoutModalOpen(false);
    dispatch(clearCart());
    dispatch(toggleStatusTab());
    setTimeout(() => {
      alert(`Đặt hàng thành công !`);
    }, 500);
  };

  const handleCancelCheckout = () => {
    setCheckoutModalOpen(false);
    setCartEmpty(false); 
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 bg-stone-600 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
      transform transition-transform duration-500
      ${statusTab === false ? "translate-x-full" : ""}`}
      >
        <h2 className="p-5 text-white text-2xl">CHAIR SHOP</h2>
        <div className="p-5">
          {carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
        </div>
        <div className="grid grid-cols-2">
          <button className="bg-black text-white font-bold" onClick={handleCloseTabCart}>
            CLOSE
          </button>
          <button className="bg-red-600 text-white font-bold" onClick={handleCheckout}>
            CHECKOUT
          </button>
        </div>
      </div>

      
      {isCartEmpty && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-xl font-bold mb-4 text-red-500">Bạn chưa thêm sản phẩm vào giỏ hàng</h2>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-500 text-white px-6 py-2 rounded-lg" onClick={handleCancelCheckout}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-xl font-bold mb-4">Tổng số tiền thanh toán của bạn là</h2>
            <p className="text-2xl font-bold text-red-500 mb-6">${totalAmount.toFixed(2)}</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg" onClick={handleConfirmCheckout}>
                Xác nhận
              </button>
              <button className="bg-gray-500 text-white px-6 py-2 rounded-lg" onClick={handleCancelCheckout}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartTab;
