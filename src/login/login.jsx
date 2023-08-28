import "../login/login.css";
import React, { useState, useEffect, props } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import greenLoginIcon from "../assets/73782-education.gif";
import userIcon from "../assets/user-icon.svg";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/88860-success-animation.gif";
import ImgFailed from "../assets/94303-failed.gif";
// import { createBrowserHistory } from 'history';
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import apiurl from "../api/api";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);

  const showSuccessChanges = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showFailed = () => {
    const background = document.querySelector("#popup-Failed");
    background.style.display = "flex";
    const popUpLogin = document.querySelector(".detail-Failed");
    popUpLogin.style.display = "grid";
    popUpLogin.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeFailed = () => {
    const background = document.querySelector("#popup-Failed");
    setTimeout(() => (background.style.display = "none"), 300);
    const popUpLogin = document.querySelector(".detail-Failed");
    setTimeout(() => (popUpLogin.style.display = "none"), 250);
    popUpLogin.style.animation = "slide-up 0.3s ease-in-out";
  };

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const showPopupLoading = () => {
    const background = document.querySelector(".popup-loading");
    background.style.display = "flex";
    const PopupLoading = document.querySelector(".body-loading");
    PopupLoading.style.display = "grid";
    PopupLoading.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closePopupLoading = () => {
    const background = document.querySelector(".popup-loading");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const PopupLoading = document.querySelector(".body-loading");
    setTimeout(() => (PopupLoading.style.display = "none"), 250);
    PopupLoading.style.animation = "slide-up 0.3s ease-in-out";
  };

  // const {isUserLoggedIn, userAuthentication} = props

  const login = (e) => {
    e.preventDefault();
    console.log("mengirim data");
    showPopupLoading();

    axios
      .post(`${apiurl}login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data);
        sessionStorage.setItem("token", response.data.token);
        setisLoading(true);
        closePopupLoading();
        if (response.data.kelas_id !== undefined)
          return window.location.replace("murid/berandamurid");
        else if (response.data.mapel_id !== undefined)
          return window.location.replace("guru/berandaguru");
        else if (response.data.siswa_id !== undefined)
          return window.location.replace("waliMurid/berandawalimurid");
        else return window.location.replace("admin/berandaadmin");
      })
      .catch((err) => {
        console.log("terjadi kesalahan : ", err);
        console.log(err.response);
        setisLoading(false);
        showFailed();
        closePopupLoading();
      });
  };

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );

  return (
    <div>
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
            <p className="desc-form-login">
              Masukkan akun anda terlebih dahulu untuk masuk!
            </p>
          </div>
          <form className="form-login" onSubmit={login}>
            <div className="con-form-username">
              <img src={userIcon} className="icon-input" />
              <input
                type="text"
                id="email"
                name="email"
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
                name="password"
                placeholder="password"
                className="input-password"
                value={password}
                onChange={handlePassword}
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="btn-mata"
              >
                <img src={mataIcon} className="icon-mata" />
              </button>
            </div>
            <button type="submit" value="Login" className="btn-login">
              MASUK
            </button>
          </form>
        </div>
      </div>
      <div id="popup-success">
        <div className="detail-success">
          <Icon
            icon="radix-icons:cross-circled"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={closeSuccess}
          />
          <div className="image-success">
            <img
              src={ImgSuccess}
              alt="Delete Success"
              className="img-success"
            />
          </div>
          <p className="desc-success">SELAMAT DATANG DI NUGASYUK!!!</p>
          <button className="btn-success" onClick={closeSuccess}>
            Kembali
          </button>
        </div>
      </div>

      <div id="popup-Failed">
        <div className="detail-Failed">
          <Icon
            icon="radix-icons:cross-circled"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={closeFailed}
          />
          <div className="image-Failed">
            <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
          </div>
          <p className="desc-Failed">
            Email atau Password yang anda masukkan salah!!!
          </p>
          <button className="btn-Failed" onClick={closeFailed}>
            Kembali
          </button>
        </div>
      </div>

         {/* page laoding */}

         <div className="popup-loading">
          <div className="body-loading" id="body-loading">
            <svg
              class="pl"
              viewBox="0 0 200 200"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                  <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                  <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                </linearGradient>
                <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                  <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                </linearGradient>
              </defs>
              <circle
                class="pl__ring"
                cx="100"
                cy="100"
                r="82"
                fill="none"
                stroke="url(#pl-grad1)"
                stroke-width="36"
                stroke-dasharray="0 257 1 257"
                stroke-dashoffset="0.01"
                stroke-linecap="round"
                transform="rotate(-90,100,100)"
              />
              <line
                class="pl__ball"
                stroke="url(#pl-grad2)"
                x1="100"
                y1="18"
                x2="100.01"
                y2="182"
                stroke-width="36"
                stroke-dasharray="1 165"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>

        {/* end page loading */}
    </div>
  );
}

export default Login;