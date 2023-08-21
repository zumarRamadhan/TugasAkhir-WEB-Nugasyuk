import "../login/login.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import greenLoginIcon from "../assets/73782-education.gif";
import userIcon from "../assets/user-icon.svg";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import { Icon } from "@iconify/react";
import axios from "axios";
import apiurl from "../api/api";
function Login() {
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

  // end messege
  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log("mengirim data");
    axios
      .post(`${apiurl}login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data);
        sessionStorage.setItem("token", response.data.token);
        setisLoading(false);
        if (response.data.kelas_id !== undefined)
          return window.location.replace("/murid/berandamurid");
        else if (response.data.mapel_id !== undefined)
          return window.location.replace("/guru/berandaguru");
        else if (response.data.siswa_id !== undefined)
          return window.location.replace("/waliMurid/berandawalimurid");
        else return window.location.replace("/admin/berandaadmin");
      })
      .catch((err) => {
        console.log("terjadi kesalahan : ", err);
        showFailed();
        console.log(err.response);
        setisLoading(false);
      });
  };

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

      <div id="popup-Failed" className="popup-failed-login">
        <div className="detail-Failed" id="detail-failed-login">
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
    </div>
  );
}

export default Login;
