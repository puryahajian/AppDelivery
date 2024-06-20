import React, { useState } from 'react';
import '../cartToListModal/CartToListModal.scss';
import iconToman from '../../assets/img/svgexport-21.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function CartToListModal() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const handleTrashClick = () => {
        setCount(0);
    };

    const price = 2000;
    const formatedPrice = price.toLocaleString('fa-IR')
  
  return (
    <>
      <div className="CTLM">
        <div className="div-CTLM">
            <div className="list-CTLM">
                <div className="name-product">
                    <p>نام</p>
                </div>
                <div className="btns">
                    <button className='plus' type="submit">+</button>
                    2 
                    <button className='negative' type="submit">-</button>
                </div>
            </div>
            <div className="list-CTLM">
                <div className="name-product">
                    <p>نام</p>
                </div>
                <div className="btns">
                    <button className='plus' type="submit">+</button>
                    2 
                    <button className='negative' type="submit">-</button>
                </div>
            </div>
            <div className="list-CTLM">
                <div className="name-product">
                    <p>نام</p>
                </div>
                <div className="btns">
                    <button className='plus' type="submit">+</button>
                    2 
                    <button className='negative' type="submit">-</button>
                </div>
            </div>
            <div className="list-CTLM">
                <div className="name-product">
                    <p>نام</p>
                </div>
                <div className="btns">
                    <button className='plus' type="submit">+</button>
                    2 
                    <button className='negative' type="submit">-</button>
                </div>
            </div>
        </div>
        <button className='btn-sub-modal'>رفتن به سبد خرید</button>
      </div>
    </>
  );
}

export default CartToListModal;



