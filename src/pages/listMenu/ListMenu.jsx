import React, { useState } from 'react';
import '../listMenu/ListMenu.scss';
import Header from '../../component/header/Header';
import imgitem from '../../assets/img/img-item.jpeg'
import iconToman from '../../assets/img/svgexport-21.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CartToListModal from '../../component/cartToListModal/CartToListModal';

function ListMenu() {
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
        <div className="list-menu">
            <Header/>
            <div className="list-item">
                <div className="item">
                    <img className='img-item' src={imgitem} alt="" />
                    <div className="name-price">
                        <h3>اسم</h3>
                        <div className="price">{formatedPrice}<img src={iconToman} alt="" /></div>
                    </div>
                    <div className="detail">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</div>
                    {count === 0 ? (
                        <button type="button" className='btn-zero' onClick={() => setCount(1)}>افزودن</button>
                    ) : (
                        <div className="btns">
                            <button className='plus' type="button" onClick={handleIncrement}>+</button>
                            <p>{count}</p>
                            {count === 1 ? (
                                <FontAwesomeIcon icon={faTrashCan} onClick={handleTrashClick} />
                            ) : (
                                <button className='negative' type="button" onClick={handleDecrement}>-</button>
                            )}
                        </div>
                    )}
                </div>
                <div className="item">
                    <img className='img-item' src={imgitem} alt="" />
                    <div className="name-price">
                        <h3>اسم</h3>
                        <div className="price">2000 <img src={iconToman} alt="" /></div>
                    </div>
                    <div className="detail">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</div>
                    <div className="btns">
                        <button className='plus' type="submit">+</button>
                        <p>2</p>
                        <button className='negative' type="submit">-</button>
                    </div>
                </div>
                <div className="item">
                    <img className='img-item' src={imgitem} alt="" />
                    <div className="name-price">
                        <h3>اسم</h3>
                        <div className="price">2000 <img src={iconToman} alt="" /></div>
                    </div>
                    <div className="detail">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</div>
                    <div className="btns">
                        <button className='plus' type="submit">+</button>
                        <p>2</p>
                        <button className='negative' type="submit">-</button>
                    </div>
                </div>
                
            </div>
            <CartToListModal/>
        </div>
    </>
  );
}

export default ListMenu;



