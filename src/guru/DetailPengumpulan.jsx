import '../cssAll/guru/DetailPengumpulan.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarGuru from '../component/NavbarGuru';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState } from "react";
import ImgProfil from '../assets/profil-guru.svg';
import damiImgMurid from '../assets/damiImgMurid.png';


function DetailPengumpulan(){
    const navText = "Pengumpulan";
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

    const [activeContent, setActiveContent] = useState("detailMenungguPengumpulan");

    const showMenunggu = () => {
        setActiveContent("detailMenungguPengumpulan");
    };

    const showSelesai = () => {
        setActiveContent("detailSelesaiPengumpulan");
    };

    const valueDataKelas = [
        {
            id: 1,
            kelas: '10',
            jurusan: 'pplg',
            tingkatan: '1',
            // assets: cardMapel1,
        },
        {
            id: 2,
            kelas: "10",
            jurusan: "pplg",
            tingkatan: "2",
            // assets: cardMapel2,
        },
        {
            id: 3,
            kelas: "11",
            jurusan: "pplg",
            tingkatan: "1",
            // assets: cardMapel3,
        },
        {
            id: 4,
            kelas: "11",
            jurusan: "pplg",
            tingkatan: "2",
            // assets: cardMapel4,
        },
        {
            id: 5,
            kelas: "12",
            jurusan: "pplg",
            tingkatan: "1",
            // assets: cardMapel5,
        },
        {
            id: 6,
            kelas: "12",
            jurusan: "pplg",
            tingkatan: "2",
            // assets: cardMapel6,
        },
        {
            id: 7,
            kelas: "10",
            jurusan: "animasi",
            tingkatan: "1",
            // assets: cardMapel7,
        },
        {
            id: 8,
            kelas: "10",
            jurusan: "animasi",
            tingkatan: "2",
            // assets: cardMapel8,
        },
        {
            id: 9,
            kelas: "11",
            jurusan: "animasi",
            tingkatan: "1",
            // assets: cardMapel9,
        },
        {
            id: 10,
            kelas: "11",
            jurusan: "animasi",
            tingkatan: "2",
            // assets: cardMapel10,
        },
    ];

    const dayData = [
        {
            id: 1,
            hari: "Senin",
        },
        {
            id: 2,
            hari: "Selasa",
        },
        {
            id: 3,
            hari: "Rabu",
        },
        {
            id: 4,
            hari: "Kamis",
        },
        {
            id: 5,
            hari: "Jumat",
        },
        {
            id: 6,
            hari: "Sabtu",
        },
    ];

    const dataCardMurid = [
        {
            id: 1,
            imgProfile: damiImgMurid,
            name: "Ahmad Aziz Wira Widodo",
            email: "ahmadaziz@smkrus.sch.id",
            kelas: valueDataKelas[2].kelas+" "+valueDataKelas[2].jurusan.toUpperCase()+" "+valueDataKelas[2].tingkatan,
        },
        {
            id: 2,
            imgProfile: damiImgMurid,
            name: "Bayu Septian Kurniawan",
            email: "bayuseptian@smkrus.sch.id",
            kelas: valueDataKelas[2].kelas+" "+valueDataKelas[2].jurusan.toUpperCase()+" "+valueDataKelas[2].tingkatan,
        },
        {
            id: 3,
            imgProfile: damiImgMurid,
            name: "Javier Gavra Abhinaya",
            email: "javiergavra@smkrus.sch.id",
            kelas: valueDataKelas[4].kelas+" "+valueDataKelas[4].jurusan.toUpperCase()+" "+valueDataKelas[4].tingkatan,
        },
        {
            id: 4,
            imgProfile: damiImgMurid,
            name: "Khoiru Rizal Kalam Ismail",
            email: "khoirurizal@smkrus.sch.id",
            kelas: valueDataKelas[4].kelas+" "+valueDataKelas[4].jurusan.toUpperCase()+" "+valueDataKelas[4].tingkatan,
        },
        {
            id: 5,
            imgProfile: damiImgMurid,
            name: "Muhammad Nur Wahid Bimawan",
            email: "nurwahid@smkrus.sch.id",
            kelas: valueDataKelas[8].kelas+" "+valueDataKelas[8].jurusan.toUpperCase()+" "+valueDataKelas[8].tingkatan,
        },
        {
            id: 6,
            imgProfile: damiImgMurid,
            name: "Muh Wahyu Ageng Pambudi",
            email: "muhwahyu@smkrus.schid",
            kelas: valueDataKelas[8].kelas+" "+valueDataKelas[8].jurusan.toUpperCase()+" "+valueDataKelas[8].tingkatan,
        },
        {
            id: 7,
            imgProfile: damiImgMurid,
            name: "Muhammad Vitto Corlenone",
            email: "vittocorleone@smkrus.sch.id",
            kelas: valueDataKelas[9].kelas+" "+valueDataKelas[9].jurusan.toUpperCase()+" "+valueDataKelas[9].tingkatan,
        },
    ];

    // data materi kbm berisi nama materi, tanggal, guru

    const valueDataMenungguKbm = [
        {
            id: 1,
            namaMateri: 'Application Letter',
            tanggal: '8 Mar 2023',
            deadline: '8 Mar 2023',
            guru: 'Budiono, S.Pd',
        },
        {
            id: 2,
            namaMateri: 'Reading',
            tanggal: '5 Mar 2023',
            deadline: '5 Mar 2023',
            guru: 'Budiono, S.Pd',
        },
    ];

    // data tugas kbm berisi nama tugas, tanggal, deadline, guru

    const valueDataSelesaiKbm = [
        {
            id: 1,
            namaTugas: 'Application Letter',
            tanggal: '8 Mar 2023',
            deadline: '8 Mar 2023',
            guru: 'Budiono, S.Pd',
        },
        {
            id: 2,
            namaTugas: 'Reading',
            tanggal: '5 Mar 2023',
            deadline: '5 Mar 2023',
            guru: 'Budiono, S.Pd',
        },
        {
            id: 3,
            namaTugas: 'Laporan B. Inggris',
            tanggal: '1 Mar 2023',
            deadline: '1 Mar 2023',
            guru: 'Budiono, S.Pd',
        },
    ];     

    return(
        <div>
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/guru/berandaguru')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/guru/berandaguru')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/guru/pagekbm')} >
                    <Icon icon="ph:chalkboard-teacher" width="20" />
                    KBM
                </li>
                <li className='active' onClick={() => navigate('/guru/pagepengumpulan')}>
                    <Icon icon="uiw:date" width="18"/>
                    Pengumpulan
                </li>
                <li onClick={() => navigate('/guru/pageJadwalKbm')}>
                    <Icon icon="fluent-mdl2:education" width="18"/>
                    Jadwal KBM
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarGuru text={navText}/>
                <div className="main">
                    <div className="header-content-DetailPengumpulan">
                        <div className="card-DetailPengumpulan-Guru">
                            <div className="card-DetailPengumpulan-Guru-left">
                                <div className="img-DetailPengumpulan-Guru">
                                    <img src={damiImgMurid} alt="" className="image-DetailPengumpulan-Guru"/>
                                </div>
                                <div className="desc-card-DetailPengumpulan-Guru">
                                    <p className="name-card-DetailPengumpulan-Guru">Ahmad Aziz Wira Widodo</p>
                                    <p className="email-card-DetailPengumpulan-Guru">ahmadaziz@smkrus.sch.id</p>
                                </div>
                            </div>
                            <div className="detaiKelas-DetailPengumpulan-Guru">
                                <p>11 PPLG 1</p>
                            </div>
                        </div>
                    </div>

                    <div className="body-content-DetailPengumpulan">
                        <div className="switch-container">
                            <button
                            id='btn-MenungguPengumpulan'
                            className={activeContent === "detailMenungguPengumpulan" ? "activeDetailPengumpulan" : ""}
                            onClick={showMenunggu}
                            >
                            Menunggu
                            </button>
                            <button
                            id='btn-SelesaiPengumpulan'
                            className={activeContent === "detailSelesaiPengumpulan" ? "activeDetailPengumpulan" : ""}
                            onClick={showSelesai}
                            >
                            Selesai
                            </button>
                        </div>

                        <div className="con-DetailPengumpulan" style={{ display: activeContent === "detailMenungguPengumpulan" ? "block" : "none" }}>
                            <div className="con-DetailPengumpulan-Menunggu">
                                {valueDataMenungguKbm.map((data) => (
                                <div className="card-DetailPengumpulan-Menunggu" style={{cursor: "pointer"}} onClick={() => navigate('/guru/pagepengumpulan/detail/detailmenunggu')}>
                                    <div className="card-DetailPengumpulan-Menunggu-left">
                                        <div className="img-DetailPengumpulan-Menunggu">
                                            <Icon icon="uiw:time-o" width={40}/>
                                        </div>
                                        <div className="desc-DetailPengumpulan-Menunggu">
                                            <p className="judul-DetailPengumpulan-Menunggu">{data.namaMateri}</p>
                                            <p className="nama-DetailPengumpulan-Guru">{data.guru}</p>
                                        </div>
                                    </div>
                                    <div className="card-DetailPengumpulan-Menunggu-right">
                                        <div className="dateDetailDesc">{data.tanggal}</div>
                                        <div className="deadline-timePengumpulan">Deadline : {data.deadline}</div>
                                        <Icon icon="ic:round-navigate-next" width={30} color='#2A93D5'/>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        

                        <div className="con-DetailPengumpulan" style={{ display: activeContent === "detailSelesaiPengumpulan" ? "block" : "none" }}>
                            <div className="con-DetailPengumpulan-Selesai">
                                {valueDataSelesaiKbm.map((data) => (
                                <div className="card-DetailPengumpulan-Selesai" style={{cursor: "pointer"}} onClick={() => navigate('/guru/pagepengumpulan/detail/detailselesai')}>
                                    <div className="card-DetailPengumpulan-Selesai-left">
                                        <div className="img-DetailPengumpulan-Selesai">
                                            <Icon icon="material-symbols:check" width={40}/>
                                        </div>
                                        <div className="desc-DetailPengumpulan-Selesai">
                                            <p className="judul-DetailPengumpulan-Selesai">{data.namaTugas}</p>
                                            <p className="nama-DetailPengumpulan-Guru">{data.guru}</p>
                                        </div>
                                    </div>
                                    <div className="card-DetailPengumpulan-Selesai-right">
                                        <div className="dateDetailDesc">{data.tanggal}</div>
                                        <div className="deadline-timePengumpulan">Deadline : {data.deadline}</div>
                                        <Icon icon="ic:round-navigate-next" width={30} color='#2A93D5'/>
                                    </div>
                                </div>
                                ))}
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
                    <p className="value-detail">budiono@smkrus.sch.id</p>
                    <p className="judul-detail">Nama</p>
                    <p className="value-detail">Budiono, S.Pd</p>
                    <p className="judul-detail">Pengampu</p>
                    <p className="value-detail">Bahasa Inggris</p>
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

export default DetailPengumpulan