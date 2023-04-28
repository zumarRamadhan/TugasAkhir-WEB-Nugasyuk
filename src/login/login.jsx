import '../login/login.css'
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import greenLoginIcon from '../assets/login-animation.gif';
import userIcon from '../assets/user-icon.svg';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useNavigate } from 'react-router-dom';


function Login (){
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  return ( 
    <div className="container-login">
      <div className="image-login">
        <img src={greenLoginIcon} alt="" className="img-login" />
      </div>
      <div className="con-form-login">
        <h1 className="title-form-login">
          <img src={IconNugasyuk} alt="" className="icon-jurnal-login" />
          nugasyuk
        </h1>
        <div className="con-desc">
          <p className="desc-form-login">Masukkan akun anda terlebih dahulu untuk masuk!</p>
        </div>
        <form className="form-login">
          <div className="con-form-username">
            <img src={userIcon} className="icon-input" />
            <input type="text" id="username" placeholder="email" className="input-username" />
          </div>
          <div className="con-form-password">
            <img src={passIcon} className="icon-input" />
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              placeholder="password"
              className="input-password"
            />
            <button type="button" onClick={togglePassword} className="btn-mata">
              <img src={mataIcon} className="icon-mata" />
            </button>
          </div>
          <button type="submit" className="btn-login" href="" onClick={() => navigate('/berandaadmin')}>
            MASUK
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;