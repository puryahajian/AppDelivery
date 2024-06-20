import React from 'react';
import '../profile/Profile.scss';
import Header from '../../component/header/Header';
import vectorUser from '../../assets/img/img-user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faList12, faLocation, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../component/menu/Menu';
import { Link } from 'react-router-dom';

function Profile() {
  
  return (
    <>
        <div className="div-profile">
            <Header/>
            <div className="box-top-profile"></div>
            <img className='img-profile-user' src={vectorUser} alt="" />
            <Link className='Link-To-Page' to='/edit-profile'>
                <button className='btns'>
                    <FontAwesomeIcon className='icon-btn' icon={faUserCheck}/>
                    <p>تکمیل پروفایل</p>
                    <FontAwesomeIcon icon={faArrowLeftLong}/>
                </button>
            </Link>
            <button className='btns'>
                <FontAwesomeIcon className='icon-btn' icon={faLocation}/>
                <p>ثبت آدرس</p>
                <FontAwesomeIcon icon={faArrowLeftLong}/>
            </button>
            <button className='btns'>
                <FontAwesomeIcon className='icon-btn' icon={faList12}/>
                <p>سفارشات پیشین</p>
                <FontAwesomeIcon icon={faArrowLeftLong}/>
            </button>
            <Menu/>
        </div>
    </>
  );
}

export default Profile;



