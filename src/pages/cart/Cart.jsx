import React, { useState } from 'react';
import '../cart/Cart.scss';
import Header from '../../component/header/Header';
import logoproduct from '../../assets/img/Remove-bg.ai_1717876678591.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CartPayment from '../../component/cartPayment/CartPayment';

const Cart = () => {

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 0));
    };

    const handleTrashClick = () => {
        setCount(0);
        
    };

  return (
    <div className="cart">
        <div className="">
            <Header/>
            <div className="inset-cart">
                <div className="product-to-cart">
                    <img className='logoproduct' src={logoproduct} alt="" />
                    <ul>
                        <li className='list-cart'>
                            <p>نام</p>
                            <p>{count} <FontAwesomeIcon icon={faClose}/></p>
                            <div className="btns">
                                <button className='plus' type="submit" onClick={handleIncrement}>+</button>
                                {count === 1 ? (
                                    <FontAwesomeIcon icon={faTrashCan} className='btn-trash' onClick={handleTrashClick} />
                                ) : (
                                    <button className='negative' type="button" onClick={handleDecrement}>-</button>
                                )}
                                {/* <button className='negative' type="submit" onClick={handleDecrement}>-</button> */}
                            </div>
                        </li>
                        
                    </ul>
                    <img className='logoproduct-bottom' src={logoproduct} alt="" />
                </div>
            </div>
        </div>
        <CartPayment/>
        {/* <div className="toturial">
            <div className="it-price">
                <button type="submit">پرداخت</button>
            </div>
            <div className="it-price">
                <p>2000 تومان</p>
            </div>
        </div> */}
    </div>
  );
};

export default Cart;