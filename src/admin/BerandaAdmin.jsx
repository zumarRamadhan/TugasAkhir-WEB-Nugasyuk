import '../cssAll/admin/BerandaAdmin.css';
// import '../App.css';
import { Icon } from '@iconify/react';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState, useEffect } from "react";
import ImgProfil from '../assets/img-profil.svg';
import IconNugasyuk from '../assets/IconNugasyuk.svg';

import { useNavigate, Link } from 'react-router-dom';


function BerandaAdmin (){
    const navText = "Beranda Admin";
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
    
    const savedItem = sessionStorage.getItem("token");
    
    const token = JSON.parse(savedItem)

    const [admin, setUsers] = useState([])

    // const headers = new Headers();
    // headers.set("Content-type", "application/json");
    // headers.set("Access-Control-Allow-Origin", "*");
    // headers.set()

    const fetchAdminData = () => {
        fetch("https://amanah-furniture.site/api/dataadmin",{
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            'Origin': 'https://amanah-furniture.site/api/dataadmin',
            Authorization: `Bearer ${token}`,
            },
        })
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsers(data)
          })
      }

      useEffect(() => {
        fetchAdminData()
      }, [])

    const logoutClick = () =>{
        fetch('https://amanah-furniture.site/api/dataadmin',{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
            },
        })

        sessionStorage.removeItem('token');
        window.location.replace('/login')
    }

  return(
      <div className='body'>
          {/* <Sidebar /> */}
        <aside>
            <h1 className="title-form-login" onClick={() => navigate('/admin/berandaadmin')} style={{cursor: "pointer"}}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li className='active' onClick={() => navigate('/admin/berandaadmin')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/admin/pageguru')} >
                    <Icon icon="la:chalkboard-teacher" width="20" />
                    Guru
                </li>
                <li onClick={() => navigate('/admin/pagemurid')}>
                    <Icon icon="ph:student" width="20" />
                    Murid
                </li>
                <li onClick={() => navigate('/admin/pagekelas')}>
                    <Icon icon="fluent:class-24-regular" width="20" />
                    Kelas
                </li>
                <li onClick={() => navigate('/admin/matapelajaran')}>
                    <Icon icon="fluent-mdl2:education" width="20" />
                    Mata Pelajaran
                </li>
                <li onClick={() => navigate('/admin/jadwalkbm')}>
                    <Icon icon="uiw:date" width="20" />
                    Jadwal KBM
                </li>
                <li onClick={() => navigate('/admin/pageassets')}>
                    <Icon icon="ic:outline-file-copy" width="20" />
                    Assets
                </li>
            </ul>
        </aside>

        <div className="container-content">
            <Navigation text={navText}/>
            <main className='main'>
                <div className="header-dashboard">
                    <div className="head-left">
                        <h1 className="intro-head">Halo <span className="name-admin">{admin.nama}</span></h1>
                        <p className="desc-head">Selamat datang di admin nugasyuk, anda bisa memonitoring data guru, siswa dan lain lain.</p>
                    </div>
                    <div className="head-right">
                        <div className="kotak1"></div>
                    </div>
                </div>

                <div className="con-content-admin">   
                    <div className="content-indiecator" style={{ background: "#EB55A3", cursor:"pointer" }} onClick={() => navigate('/admin/pagemurid')}>
                        <div className="icon-indie" style={{ color: "#EB55A3" }}>
                            <Icon icon="mdi:account-group-outline" width="40" />
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Jumlah Siswa Keseluruhan</p>
                            <p className="value-indie"><span>{admin.jumlah_siswa}</span> Siswa</p>
                        </div>
                    </div>

                    <div className="content-indiecator" style={{ background: "#2A93D5", cursor:"pointer" }} onClick={() => navigate('/admin/pagekelas')}>
                        <div className="icon-indie" style={{ color: "#2A93D5" }}>
                            <Icon icon="fluent:class-24-regular" width="40" />
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Jumlah Kelas Keseluruhan</p>
                            <p className="value-indie">
                            <span>{admin.jumlah_kelas}</span> Kelas</p>
                        </div>
                    </div>

                    <div className="content-indiecator" style={{ background: "#B462D0", cursor:"pointer" }} onClick={() => navigate('/admin/pageguru')}>
                        <div className="icon-indie" style={{ color: "#B462D0" }}>
                            <Icon icon="la:chalkboard-teacher" width="40" />
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Jumlah Guru Keseluruhan</p>
                            <p className="value-indie"><span>{admin.jumlah_guru}</span> Guru</p>
                        </div>
                    </div>

                    <div className="content-indiecator" style={{ background: "#585CC4", cursor:"pointer" }} onClick={() => navigate('/admin/pagekelas')}>
                        <div className="icon-indie" style={{ color: "#585CC4" }}>
                            <Icon icon="fluent-mdl2:education" width="40" />
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Jumlah Jurusan</p>
                            <p className="value-indie">
                            <span>{admin.jumlah_jurusan}</span> Jurusan</p>
                        </div>
                    </div>
                </div>
            </main>
        </div> {/*  end container */}

        <div className="popup-logout" id="popup-logout">
            <div className="detail-logout">
                <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeLogoutPopup}/>
                <div className="image-logout">
                    <img src={ImgLogout} alt="" className="img-logout" />
                </div>
                <p className="desc-logout">Anda yakin ingin keluar?</p>
                <div className="con-btn-logout">
                    <button type="button" className="btn-batal">Batal</button>
                    <button type="button" onClick={logoutClick} className="btn-keluar">Keluar</button>
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
        
    </div> /*body*/
  );
}

export default BerandaAdmin;