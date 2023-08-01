import '../login/login.css'
import React, { useState, useEffect, props } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import greenLoginIcon from '../assets/73782-education.gif';
import userIcon from '../assets/user-icon.svg';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
// import { createBrowserHistory } from 'history';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiurl from '../api/api';


function Login (){
  const location = useLocation();
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const history = useHistory();

  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  // const {isUserLoggedIn, userAuthentication} = props

  const login = (e) => {
    e.preventDefault()
    console.log("mengirim data")
    axios.post(`${apiurl}login`, {
      email: email,
      password: password
    })
    .then((response) => {
        console.log(response.data)
        // props.userAuthentication()
        console.log(response.data)
        sessionStorage.setItem('token', response.data.token)
        setisLoading(true);
        if (response.data.kelas_id !== undefined) 
          return window.location.replace('murid/berandamurid')

         else if (response.data.mapel_id !== undefined)
          return window.location.replace('guru/berandaguru')
          
         else if (response.data.siswa_id !== undefined)
          return window.location.replace('waliMurid/berandawalimurid')
          
        else 
          return window.location.replace('admin/berandaadmin')
       
        // props.history.push('murid/berandamurid')
    })
    .catch((err) => {
        console.log("terjadi kesalahan : ", err)
        alert('login gagal')
        console.log(err.response)
        setisLoading(false);
        // alert(err.response.data.error.message)
    })
  }

  if (isLoading)
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );

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
        <form className="form-login" onSubmit={login}>
          <div className="con-form-username">
            <img src={userIcon} className="icon-input" />
            <input type="text" 
              id="email"
              name='email'
              placeholder="email"
              className="input-username"
              value={email}
              onChange={handleEmail}
              required
             />
          </div>
          <div className="con-form-password">
            <img src={passIcon} className="icon-input" />
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              name='password'
              placeholder="password"
              className="input-password"
              value={password}
              onChange={handlePassword}
              required
            />
            <button type="button" onClick={togglePassword} className="btn-mata">
              <img src={mataIcon} className="icon-mata" />
            </button>
          </div>
          <button type="submit" value="Login" className="btn-login">
            MASUK
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;