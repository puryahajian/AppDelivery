import React from 'react';
import '../login/Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Login() {
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };
  
  
  return (
    <>
        <div className="login">
            <div className="div-top"></div>
            <div className="div-bottom"></div>
            <form className='form-get-number' action="" method="post">
                <h2>ورود</h2>
                <label htmlFor="">شماره تلفن :</label>
                <div className="div-input">
                    <input type="tel" name="" id="" />
                </div>
                <button className='btn-sent-number' type="submit">ارسال</button>
                <div className="falow">
                  <ul>
                    <li><FontAwesomeIcon className='icon-brands' icon={faTelegram}/></li>
                    <li><FontAwesomeIcon className='icon-brands' icon={faWhatsapp}/></li>
                    <li><FontAwesomeIcon className='icon-brands' icon={faInstagram}/></li>
                    <li><FontAwesomeIcon className='icon-brands' icon={faFacebook}/></li>
                  </ul>
                </div>
            </form>


            {/* <form className='form-get-code' action="" method="post">
              <div gap="middle" align="flex-start" vertical>
                <Title className='title-get-code' level={5}>کد تایید را وارد کنید</Title>
                <Input.OTP
                  className='input-get-code'
                  formatter={(str) => str.toUpperCase()} 
                  {...sharedProps} 
                  length={4} 
                  style={{ 
                    direction: 'ltr',
                    unicodeBidi: 'bidi-override' 
                  }}
                />
              </div>
              <button className='btn-get-code' type="submit">تایید</button>
            </form> */}
        </div>
    </>
  );
}

export default Login;



