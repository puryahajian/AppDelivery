import React from 'react';
import '../slider/Slider.scss';
import { Carousel } from 'antd';
import bgSlider from '../../assets/img/baner-slider.jpeg'
import iconhealth from '../../assets/img/remove-bg.png'

function Slider() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <>
      <div className='slider'>
        <img className='icon-health rotate' src={iconhealth} alt="" />
        <Carousel autoplay>
            <div>
                <h3 className='item-slider' style={contentStyle}>
                    <img className='bg-slider' src={bgSlider}/>
                </h3>
            </div>
            <div>
                <h3 className='item-slider' style={contentStyle}>
                    <img className='bg-slider' src={bgSlider}/>
                </h3>
            </div>
            <div>
                <h3 className='item-slider' style={contentStyle}>
                    <img className='bg-slider' src={bgSlider}/>
                </h3>
            </div>
            <div>
                <h3 className='item-slider' style={contentStyle}>
                    <img className='bg-slider' src={bgSlider}/>
                </h3>
            </div>
        </Carousel>
        <img className='icon-health' src={iconhealth} alt="" />

      </div>
    </>
  );
}

export default Slider;



