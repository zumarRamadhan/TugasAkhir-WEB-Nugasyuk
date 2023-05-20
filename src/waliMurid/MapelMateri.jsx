import '../cssAll/walimurid/DetailMateri.css';
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useState } from "react";
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import ImgProfil from '../assets/profil-walimurid.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import AssetsBinggris from '../assets/img-ilustration-binggris.svg';
import imgGuru from '../assets/profil-guru.svg';
import NavbarWaliMurid from '../component/NavbarWaliMurid';

function MatapelajaranMateri(){
    const navText = "B. Inggris";
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

    const [activeContent, setActiveContent] = useState("detailMateriKbm");

    const showMateri = () => {
        setActiveContent("detailMateriKbm");
    };

    const showTugas = () => {
        setActiveContent("detailTugasKbm");
    };

    return(
        <div>
            <aside>
                <h1 className="title-form-login" onClick={() => navigate('/walimurid/berandawalimurid')}>
                    <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                    nugasyuk
                </h1>
                <ul>
                    <li onClick={() => navigate('/walimurid/berandawalimurid')}>
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
                    <li className='active' onClick={() => navigate('/walimurid/pagemapel')}>
                        <Icon icon="fluent-mdl2:education" width="18"/>
                        Mata Pelajaran
                    </li>
                </ul>
            </aside>
            <div className="container-content">
                <NavbarWaliMurid text={navText}/>
                <div className="main">
                    <div className="con-content-subject">
                        <div className="content-subject" style={{background: "linear-gradient(to bottom right, #8287F8, #555AD3)"}}>
                            <div className="content-subject-left">
                                <p className="name-subject">
                                    B.Inggris
                                </p>
                                <p className="name-teacher">
                                    Budiono, S.Pd
                                </p>
                            </div>
                            <img src={AssetsBinggris} alt="" className="img-assets-subject" />
                        </div>
                        <div className="content-subject-2">
                            <img src={imgGuru} alt="" className="img-subject-2" />
                            <p className="name-teacher-2">Budiono, S.Pd</p>
                        </div>
                    </div>
                    <div className="switch-container-walimurid">
                        <button id='btn-materiKbm' className={activeContent === "detailMateriKbm" ? "activeDetailKbm" : ""} onClick={showMateri} >
                            Materi
                        </button>
                        <button id='btn-tugasKbm' className={activeContent === "detailTugasKbm" ? "activeDetailKbm" : ""} onClick={showTugas} >
                            Tugas
                        </button>
                    </div>
                    <div className='dropdown-task'>
                        <select id='tugas' name='tugas'>
                            <option value="semua" selected>-- Semua Tugas --</option>
                            <option value="tugas">Tugas selesai dalam deaadline</option>
                            <option value="tugas">Tugas selesai lewat deadline</option>
                            <option value="tugas">Tugas belum selesai dalam deadline</option>
                            <option value="tugas">Tugas belum selesai lewat deadline</option>
                        </select>

                        <form className='search-box'>
                            <input type='text' placeholder='Cari...'/>
                            <button type='submit'>
                                <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                            </button>
                        </form>
                    </div>

                    <div className="con-material">
                        <div className="card-material" style={{ cursor: "pointer"}} onClick={() => navigate('/walimurid/pagemapel/mapelmateri/detailmateri')}>
                            <div className="indiecator-left">
                                <div className="icon-indie" style={{ background: "#D8F0FF" }}>
                                    <Icon icon="ri:book-line" width="30" style={{color: "#2A93D5"}}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="material-name">Materi Application Letter</p>
                                    <p className="teacher-name">Budiono, S.Pd</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">8 Mar 2023</p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>

                        <div className="card-material" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie" style={{ background: "#D8F0FF" }}>
                                    <Icon icon="ri:book-line" width="30" style={{color: "#2A93D5"}}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="material-name">Materi Reading</p>
                                    <p className="teacher-name">Budiono, S.Pd</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">5 Mar 2023</p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>

                        <div className="card-material" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie" style={{ background: "#D8F0FF" }}>
                                    <Icon icon="ri:book-line" width="30" style={{color: "#2A93D5"}}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="material-name">Materi Laporan B. Inggris</p>
                                    <p className="teacher-name">Budiono, S.Pd</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">1 Mar 2023</p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>
                    </div>

                </div>
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

export default MatapelajaranMateri