import React from 'react';
import '../home/Home.scss';
import Header from '../../component/header/Header';
import Slider from '../../component/slider/Slider';
import bgmenu from '../../assets/img/Garlic-Herb-Veggie-Sandwich-5c.jpg'
import Menu from '../../component/menu/Menu';
import { Link } from 'react-router-dom';

function Home() {
  
  return (
    <>
    
      <div className='origin-cover'>
        <Header/>
        <Slider/>
        <div className="menu">
          <div className="item-menu">
            <div className="inset-circle">
              <img src={bgmenu} alt="" />
            </div>
            <div className="tag-name">
              <button className='more' >
                <Link className='Link-more' to='/list-menu'>نام محصول</Link>
              </button>
            </div>
          </div> 
          <div className="item-menu">
            <div className="inset-circle">
              <img src={bgmenu} alt="" />
            </div>
            <div className="tag-name">
              <button className='more' >
                <Link className='Link-more' to='/list-menu'>نام محصول</Link>
              </button>
            </div>
          </div> 
          <div className="item-menu">
            <div className="inset-circle">
              <img src={bgmenu} alt="" />
            </div>
            <div className="tag-name">
              <button className='more' >
                <Link className='Link-more' to='/list-menu'>نام محصول</Link>
              </button>
            </div>
          </div> 
          <div className="item-menu">
            <div className="inset-circle">
              <img src={bgmenu} alt="" />
            </div>
            <div className="tag-name">
              <button className='more' >
                <Link className='Link-more' to='/list-menu'>نام محصول</Link>
              </button>
            </div>
          </div> 
          <div className="item-menu">
            <div className="inset-circle">
              <img src={bgmenu} alt="" />
            </div>
            <div className="tag-name">
              <button className='more' >
                <Link className='Link-more' to='/list-menu'>نام محصول</Link>
              </button>
            </div>
          </div> 
          
        </div>
      {/* <Menu/> */}
      </div>
    </>
  );
}

export default Home;



