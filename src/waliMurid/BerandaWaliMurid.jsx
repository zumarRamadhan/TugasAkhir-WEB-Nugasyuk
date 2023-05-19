import '../cssAll/murid/BerandaMurid.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarWaliMurid from '../component/NavbarWaliMurid';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState } from "react";
import ImgProfil from '../assets/profil-walimurid.svg';
function BerandaWaliMurid(){
    const navText = "Beranda 11 PPLG 1";
    const navigate = useNavigate();

    const closeDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(350px)';
    }

    const closeDetailNotif = () => {
        const detailProfile = document.querySelector('.detail-notif');
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
            <h1 className="title-form-login" onClick={() => navigate('/walimurid/berandawalimurid')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li className='active' onClick={() => navigate('/walimurid/berandawalimurid')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/walimurid/pagetugas')} >
                    <Icon icon="fluent:clipboard-bullet-list-rtl-20-regular" width="25" />
                    Tugas
                </li>
                <li onClick={() => navigate('/walimurid/pagekbm')}>
                    <Icon icon="uiw:date" width="18"/>
                    Jadwal KBM
                </li>
                <li onClick={() => navigate('/walimurid/pagemapel')}>
                    <Icon icon="fluent-mdl2:education" width="18"/>
                    Mata Pelajaran
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarWaliMurid text={navText}/>
              <main className='main'>
                <div className="header-dashboard">
                    <div className="head-left">
                    <h1 className="intro-head">
                        Halo <span className="name-admin">Sulis Laila</span>
                    </h1>
                    <p className="desc-head">
                    Selamat datang di nugasyuk, anda bisa memonitoring tugas tugas anak anda.
                    </p>
                    </div>
                    <div className="head-right">
                    <div className="kotak1"></div>
                    </div>
                </div>

                <div className="con-content">
                    <div className="content-indiecator" style={{ background: "#2AB6D5" }}>
                    <div className="icon-indie" style={{ color: "#2AB6D5", background: "#fff" }}>
                        <Icon icon="mdi:account-group-outline" width="40" />
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Siswa</p>
                        <p className="value-indie">
                        <span>35</span> Siswa
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#585CC4" }}>
                    <div className="icon-indie" style={{ color: "#585CC4", background: "#fff" }}>
                        <Icon icon="fluent-mdl2:education" width="40"/>
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Jumlah Mapel</p>
                        <p className="value-indie">
                        <span>14</span> Mata Pelajaran
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#B462D0" }}>
                    <div className="icon-indie" style={{ color: "#B462D0", background: "#fff" }}>
                        <Icon icon="material-symbols:person-outline-rounded" width="40"/>
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Wali Kelas</p>
                        <p className="value-indie">
                        <span>Slamet Jos, S.Kom</span>
                        </p>
                    </div>
                    </div>
                </div>
                
                {/* content information */}
                <div className="con-content-information">
                    <div className="content-indiecator-information" style={{ background: "#fff", cursor: "pointer"}}>
                        <div className="indiecator-left">
                            <div className="icon-indie-information" style={{ color: "#797979" }}>
                                <Icon icon="uiw:time-o" width="30"/>
                            </div>
                            <div className="desc-indie">
                                <p className="title-indie-information"> <span>3</span> Tugas</p>
                                <p className="value-indie-information">Dari <span>10</span> Tugas</p>
                            </div>
                        </div>
                        <div className="icon-navigate">
                            <Icon icon="ic:round-navigate-next" width="30"/>
                        </div>
                    </div>

                    <div className="content-indiecator-information" style={{ background: "#fff", cursor: "pointer"}}>
                        <div className="indiecator-left">
                            <div className="icon-indie-information" style={{ color: "#84E063", background:"#D5FFC6" }}>
                                <Icon icon="ph:check-bold" width="30" />
                            </div>
                            <div className="desc-indie">
                                <p className="title-indie-information"> <span>4</span> Tugas</p>
                                <p className="value-indie-information">Dari <span>10</span> Tugas</p>
                            </div>
                        </div>
                        <div className="icon-navigate">
                            <Icon icon="ic:round-navigate-next" width="30"/>
                        </div>
                    </div>

                    <div className="content-indiecator-information" style={{ background: "#fff", cursor: "pointer"}}>
                        <div className="indiecator-left">
                            <div className="icon-indie-information" style={{ color: "#FF3F3F", background:"#FFC6C6" }}>
                                <Icon icon="uiw:time-o" width="30"/>
                            </div>
                            <div className="desc-indie">
                                <p className="title-indie-information"> <span>3</span> Tugas</p>
                                <p className="value-indie-information">Dari <span>10</span> Tugas</p>
                            </div>
                        </div>
                        <div className="icon-navigate">
                            <Icon icon="ic:round-navigate-next" width="30"/>
                        </div>
                    </div>

                    <div className="content-indiecator-information" style={{ background: "#fff", cursor: "pointer"}}>
                        <div className="indiecator-left">
                            <div className="icon-indie-information" style={{ color: "#FF3F3F", background:"#FFC6C6" }}>
                                <Icon icon="ph:check-bold" width="30" />
                            </div>
                            <div className="desc-indie">
                                <p className="title-indie-information"> <span>4</span> Tugas</p>
                                <p className="value-indie-information">Dari <span>10</span> Tugas</p>
                            </div>
                        </div>
                        <div className="icon-navigate">
                            <Icon icon="ic:round-navigate-next" width="30"/>
                        </div>
                    </div>
                </div>
                {/* end content information */}
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
                    <p className="value-detail">sulislaila@smkrus.sch.id</p>
                    <p className="judul-detail">Nama</p>
                    <p className="value-detail">Sulis Laila</p>
                    <p className="judul-detail">Orang Tua Dari</p>
                    <p className="value-detail">Muhammad Zumar Ramadhan</p>
                    <p className="judul-detail">Jurusan</p>
                    <p className="value-detail">PPLG</p>
                    <p className="judul-detail">Kelas</p>
                    <p className="value-detail">11 PPLG 1</p>
                    <p className="judul-detail">NIS</p>
                    <p className="value-detail">04449</p>
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

            <div className="detail-notif">
                <div className='content-detail-notif'>
                    <div className="navbar-detail-notif">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer", color: "#4b4b4b"}} onClick={closeDetailNotif}/>
                        <h2>Notifikasi</h2>
                    </div>
                    <p className="day">
                        Hari Ini
                    </p>
                    <div className="notif">
                        <div className="icon-notif">
                            <Icon icon="tabler:clipboard-text" width="30" />
                        </div>
                        <div className="content-notif">
                            <div className="name-notif">
                                <p>Application Letter</p>
                            </div>
                            <div className="teacher">
                                <p>Budiono, S.Pd</p>
                            </div>
                        </div>
                    </div>
                    <div className="notif">
                        <div className="icon-notif">
                            <Icon icon="tabler:clipboard-text" width="30" />
                        </div>
                        <div className="content-notif">
                            <div className="name-notif">
                                <p>Sejarah Gojek</p>
                            </div>
                            <div className="teacher">
                                <p>Rini, S.Pd</p>
                            </div>
                        </div>
                    </div>
                    <div className="notif">
                        <div className="icon-notif">
                            <Icon icon="ri:book-line" width="30"/>
                        </div>
                        <div className="content-notif">
                            <div className="name-notif">
                                <p>Sejarah Gojek</p>
                            </div>
                            <div className="teacher">
                                <p>Rini, S.Pd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BerandaWaliMurid;