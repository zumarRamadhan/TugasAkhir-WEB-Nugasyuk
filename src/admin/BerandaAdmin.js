import '../cssAll/BerandaAdmin.css';
import '../App.css';
// import '../admin/main.js';
import { Icon } from '@iconify/react';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import ImgProfil from '../assets/img-profil.svg';
import { useState } from "react";


function BerandaAdmin (){
    const navText = "Beranda Admin";

function showDetail() {
 
  }

  return(
      <div>
          <Sidebar />
          <div className="container-content">
              <Navigation text={navText}/>
              <main className='main'>
                <div className="header-dashboard">
                    <div className="head-left">
                    <h1 className="intro-head">
                        Halo <span className="name-admin">Erika Yanti, S.pd</span>
                    </h1>
                    <p className="desc-head">
                        Selamat datang di admin nugasyuk, anda bisa memonitoring data guru, siswa dan lain lain.
                    </p>
                    </div>
                    <div className="head-right">
                    <div className="kotak1"></div>
                    </div>
                </div>

                <div className="con-content">
                    <div className="content-indiecator" style={{ background: "#EB55A3" }}>
                    <div className="icon-indie" style={{ color: "#EB55A3" }}>
                        <Icon icon="mdi:account-group-outline" width="40" />
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Siswa Keseluruhan</p>
                        <p className="value-indie">
                        <span>1000</span> Siswa
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#2A93D5" }}>
                    <div className="icon-indie" style={{ color: "#2A93D5" }}>
                        <Icon icon="fluent:class-24-regular" width="40" />
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Kelas Keseluruhan</p>
                        <p className="value-indie">
                        <span>25</span> Kelas
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#B462D0" }}>
                    <div className="icon-indie" style={{ color: "#B462D0" }}>
                        <Icon icon="la:chalkboard-teacher" width="40" />
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Guru Keseluruhan</p>
                        <p className="value-indie">
                        <span>30</span> Guru
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#585CC4" }}>
                    <div className="icon-indie" style={{ color: "#585CC4" }}>
                        <Icon icon="fluent-mdl2:education" width="40" />
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Jurusan</p>
                        <p className="value-indie">
                        <span>5</span> Jurusan
                        </p>
                    </div>
                    </div>
                </div>
            </main>
          </div>
      </div>
  );
}

// function PopupForget() {
//     const [passwordShown, setPasswordShown] = useState(false);
//     const [newPasswordShown, setNewPasswordShown] = useState(false);
//     const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  
//     const togglePassword = () => {
//       setPasswordShown(!passwordShown);
//     };
  
//     const togglePasswordNew = () => {
//       setNewPasswordShown(!newPasswordShown);
//     };
  
//     const togglePasswordConfirm = () => {
//       setConfirmPasswordShown(!confirmPasswordShown);
//     };
  
//     const closeForgetPopup = () => {
//       // fungsi untuk menutup popup
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // fungsi untuk mengirim data form
//     };
  
//     return (
//       <div className="popup-forget" id="popup-forget">
//         <form onSubmit={handleSubmit} className="detail-forget-password">
//           <div className="navbar-detail-forget">
//             <Icon
//               icon="radix-icons:cross-circled"
//               onclick="closeLogoutPopup()"
//               width="30"
//               onClick={closeForgetPopup}
//               style={{ cursor: "pointer" }}
//             ></Icon>
//             <h2>Ganti Password</h2>
//           </div>
//           <p className="judul-form">Sandi lama</p>
//           <div className="con-form-password">
//             <img src={passIcon} alt="" />
//             <input
//               type={passwordShown ? "text" : "password"}
//               id="password"
//               placeholder="*********"
//               className="input-password"
//             />
//             <button
//               type="button"
//               onClick={togglePassword}
//               className="btn-mata"
//             >
//               <img src={mataIcon} alt="" />
//             </button>
//           </div>
//           <p className="judul-form">Sandi baru</p>
//           <div className="con-form-password">
//             <img src={passIcon} alt="" />
//             <input
//               type={newPasswordShown ? "text" : "password"}
//               id="newPassword"
//               placeholder="*********"
//               className="input-password"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordNew}
//               className="btn-mata"
//             >
//               <img src={mataIcon} alt="" />
//             </button>
//           </div>
//           <p className="judul-form">Konfirmasi sandi baru</p>
//           <div className="con-form-password">
//             <img src={passIcon} alt="" />
//             <input
//               type={confirmPasswordShown ? "text" : "password"}
//               id="confirmPassword"
//               placeholder="*********"
//               className="input-password"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordConfirm}
//               className="btn-mata"
//             >
//               <img src={mataIcon} alt="" />
//             </button>
//           </div>
  
//           <button type="submit" className="btn-simpan">
//             Simpan sandi baru
//           </button>
//         </form>
//       </div>
//     );
//   }


export default BerandaAdmin;