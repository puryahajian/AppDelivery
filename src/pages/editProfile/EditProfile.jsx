import React from 'react';
import '../editProfile/EditProfile.scss';
import Header from '../../component/header/Header';
import imgUser from '../../assets/img/img-user.png'

function EditProfile() {
  
  return (
    <>
        <div className="edit-profile">
            <Header/>
            <div className="box-imgUser">
                <img className='imgUser' src={imgUser} alt="" />
            </div>
            <form className='form-edit' action="" method="post">
                <label htmlFor="">نام : </label>
                <input type="text" name="" id="" />
                <label htmlFor="">نام خانوادگی : </label>
                <input type="text" name="" id="" />
                <label htmlFor="">شماره تلفن : </label>
                <input type="text" name="" id="" />
                <button className='submit-form' type="submit">ثبت تغییرات</button>
            </form>
           
        </div>
    </>
  );
}

export default EditProfile;



