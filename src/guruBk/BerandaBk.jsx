import '../cssAll/bk/BerandaBk.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarBK from '../component/NavbarBK';
import ImgProfil from '../assets/profil-bk.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState } from "react";

function BerandaBk(){
    const navText = "Beranda";
    const navigate = useNavigate();

    const closeDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(350px)';
    }
    
    const showLogoutPopup = () => {
        const popupLogout = document.querySelector('#popup-logout');
        popupLogout.style.display = 'flex';
        popupLogout.style.animation = 'slide-down 0.3s ease-in-out';
    }
    
    const closeLogoutPopup = () => {
        const popupLogout = document.querySelector('#popup-logout');
        setTimeout(() => popupLogout.style.display = "none", 250);
        popupLogout.style.animation = 'slide-up 0.3s ease-in-out';
    }
    
    const showForgetPopup = () => {
        const popupForget = document.querySelector('#popup-forget');
        popupForget.style.display = 'flex';
        popupForget.style.animation = 'slide-down 0.3s ease-in-out';
    }

    const closeForgetPopupAndClearInput = () => {
        const popupForget = document.querySelector('#popup-forget');
        setTimeout(() => popupForget.style.display = "none", 250);
        popupForget.style.animation = 'slide-up 0.3s ease-in-out';
        const clearpassword = document.querySelector('#password', '#newPassword', '#confirmPassword');
        clearpassword.value = "";
        const clearpasswordNew = document.querySelector('#newPassword');
        clearpasswordNew.value = "";
        const clearpasswordConfirm = document.querySelector('#confirmPassword');
        clearpasswordConfirm.value = "";
    }

    const [passwordType, setPasswordType] = useState("password");
    const [passwordTypeNew, setPasswordTypeNew] = useState("password");
    const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");

    function togglePasswordVisibility() {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    function togglePasswordVisibilityNew() {
        setPasswordTypeNew(passwordTypeNew === "password" ? "text" : "password");
    }

    function togglePasswordVisibilityConfirm() {
        setPasswordTypeConfirm(passwordTypeConfirm === "password" ? "text" : "password");
    }

    return(
        <div>
            <aside>
                <h1 className="title-form-login" onClick={() => navigate('/bk/berandabk')}>
                    <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                    nugasyuk
                </h1>
                <ul>
                    <li className='active' onClick={() => navigate('/bk/berandabk')}>
                        <Icon icon="iconoir:home-simple" width="20" />
                        Beranda
                    </li>
                    <li onClick={() => navigate('/bk/janjikonseling')} >
                        <Icon icon="uiw:date" width="18"/>
                        Janji Konseling
                    </li>
                    <li onClick={() => navigate('/bk/chat')}>
                        <Icon icon="ph:chat-circle-dots" width="18"/>
                        Chat
                    </li>
                </ul>
            </aside>
            <div className="container-content">
                <NavbarBK text={navText}/>
                <main className='main'>
                    <div className="header-dashboard">
                        <div className="head-left">
                        <h1 className="intro-head">
                            Halo <span className="name-admin">Sumijah, S.Pd</span>
                        </h1>
                        <p className="desc-head" style={{width:"550px"}}>
                            Selamat datang di nugasyuk, anda bisa memonitoring siswa, memberikan materi dan tugas.
                        </p>
                        </div>
                        <div className="head-right">
                        <div className="kotak1"></div>
                        </div>
                    </div>

                    <div className="con-content-bk">
                        <div className="content-indiecator" style={{ background: "#FA79A2" }}>
                        <div className="icon-indie" style={{ color: "#FA79A2" }}>
                            <Icon icon="uiw:date" width="40"/>
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Janji Konseling Dengan Murid</p>
                            <p className="value-indie">
                            <span>3</span> Janji Konseling
                            </p>
                        </div>
                        </div>
                        <div className="content-indiecator" style={{ background: "#C762F7" }}>
                        <div className="icon-indie" style={{ color: "#C762F7" }}>
                            <Icon icon="ph:chat-circle-dots" width="40"/>
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Chat Murid Belum Terbalas</p>
                            <p className="value-indie">
                            <span>3</span> Chat
                            </p>
                        </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="popup-logout" id="popup-logout">
                <div className="detail-logout">
                    <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeLogoutPopup}/>
                    <div className="image-logout">
                        <img src={ImgLogout} alt="" className="img-logout" />
                    </div>
                    <p className="desc-logout">Anda yakin ingin keluar?</p>
                    <div className="con-btn-logout">
                        <button type="button" className="btn-batal">Batal</button>
                        <button type="button" className="btn-keluar">Keluar</button>
                    </div>
                </div>
            </div>

            <div className="popup-forget" id="popup-forget">
                <form action="" className="detail-forget-password">
                    <div className="navbar-detail-forget">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeForgetPopupAndClearInput}/>
                        <h2>Ganti Password</h2>
                    </div>
                    <p className="judul-form">Sandi lama</p>
                    <div className="con-form-password">
                        <img src={passIcon} alt=""/>
                        <input type={passwordType} id="password" placeholder="*********" className="input-password"/>
                        <button type="button" className="btn-mata" onClick={togglePasswordVisibility}><img src={mataIcon} alt=""/></button>
                    </div>
                    <p className="judul-form">Sandi baru</p>
                    <div className="con-form-password">
                        <img src={passIcon} alt=""/>
                        <input type={passwordTypeNew} id="newPassword" placeholder="*********" className="input-password"/>
                        <button type="button" className="btn-mata" onClick={togglePasswordVisibilityNew}><img src={mataIcon} alt=""/></button>
                    </div>
                    <p className="judul-form">Konfirmasi sandi baru</p>
                    <div className="con-form-password">
                        <img src={passIcon} alt=""/>
                        <input type={passwordTypeConfirm} id="confirmPassword" placeholder="*********" className="input-password"/>
                        <button type="button" className="btn-mata" onClick={togglePasswordVisibilityConfirm}><img src={mataIcon} alt=""/></button>
                    </div>

                    <button type="submit" className="btn-simpan">Simpan sandi baru</button>
                </form>
            </div>

            <div className="detail-profile">
                <div className='content-detail'>
                    <div className="navbar-detail">
                    <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeDetail}/>
                    <h2>Profil</h2>
                    </div>
                    <div className="detail-image-profile">
                        <img src={ImgProfil} alt="" className="detail-img-profile" />
                    </div>
                    <p className="judul-detail">Email</p>
                    <p className="value-detail">erikayanti@smkrus.sch.id</p>
                    <p className="judul-detail">Nama</p>
                    <p className="value-detail">Erika Yanti, S.Pd</p>
                    <p className="judul-detail">Devisi</p>
                    <p className="value-detail">Admin</p>
                </div>
                <div className="con-btn-detail-profile">
                    <button className="forget-password" id="btn-forget-pass" onClick={showForgetPopup}>
                        <Icon icon="material-symbols:key-outline-rounded" width="30" />
                        <p>Ganti Password</p>
                    </button>
                    <button className="logout" id="btn-logout" onClick={showLogoutPopup}>
                        <Icon icon="material-symbols:logout-rounded" width="30" />
                        <p>Logout</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BerandaBk