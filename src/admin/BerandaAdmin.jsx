import '../cssAll/BerandaAdmin.css';
// import '../App.css';
import { Icon } from '@iconify/react';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import ImgProfil from '../assets/img-profil.svg';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';


function BerandaAdmin (){
    const navText = "Beranda Admin";
    const navigate = useNavigate();

    const closeDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(350px)';
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
                        <h1 className="intro-head">Halo <span className="name-admin">Erika Yanti, S.pd</span></h1>
                        <p className="desc-head">Selamat datang di admin nugasyuk, anda bisa memonitoring data guru, siswa dan lain lain.</p>
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
                            <p className="value-indie"><span>1000</span> Siswa</p>
                        </div>
                    </div>

                    <div className="content-indiecator" style={{ background: "#2A93D5" }}>
                        <div className="icon-indie" style={{ color: "#2A93D5" }}>
                            <Icon icon="fluent:class-24-regular" width="40" />
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Jumlah Kelas Keseluruhan</p>
                            <p className="value-indie">
                            <span>25</span> Kelas</p>
                        </div>
                    </div>

                    <div className="content-indiecator" style={{ background: "#B462D0" }}>
                        <div className="icon-indie" style={{ color: "#B462D0" }}>
                            <Icon icon="la:chalkboard-teacher" width="40" />
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Jumlah Guru Keseluruhan</p>
                            <p className="value-indie"><span>30</span> Guru</p>
                        </div>
                    </div>

                    <div className="content-indiecator" style={{ background: "#585CC4" }}>
                        <div className="icon-indie" style={{ color: "#585CC4" }}>
                            <Icon icon="fluent-mdl2:education" width="40" />
                        </div>
                        <div className="desc-indie">
                            <p className="title-indie">Jumlah Jurusan</p>
                            <p className="value-indie">
                            <span>5</span> Jurusan</p>
                        </div>
                    </div>
                </div>
            </main>
        </div> {/*  end container */}

        <div className="detail-profile">
            <div>
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
                <button className="forget-password" id="btn-forget-pass">
                <Icon icon="material-symbols:key-outline-rounded" width="30" />
                <p>Ganti Password</p>
                </button>
                <button className="logout" id="btn-logout">
                <Icon icon="material-symbols:logout-rounded" width="30" />
                <p>Logout</p>
                </button>
            </div>
        </div>
    </div> /*body*/
  );
}

export default BerandaAdmin;