
import React from 'react';
import '../cartPayment/CartPayment.scss';


function CartPayment() {
  return (
    <div className="cartPayment">
      <div className="inset-cartPayment">
        <div className="item-cp">
            <button type="submit">پرداخت</button>
        </div>
        <div className="item-cp">
            <p><span>20000</span> تومان</p>
        </div>
      </div>
    </div>
  );
}

export default CartPayment;
