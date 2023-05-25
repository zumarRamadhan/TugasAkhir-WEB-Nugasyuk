import '../cssAll/murid/PageTugas.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarMurid from '../component/NavbarMurid';
import ImgProfil from '../assets/profil-murid.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState } from "react";

function PageTugas(){
    const navText = "Tugas";
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

    const valueDataTugas = [
        {
            id: 1,
            nameTask: "Sejarah Gojek",
            nameTeacher: "Rini, S.Pd",
            dateUpload: '6 Mar 2023',
            deadline: '7 Mar 2023',
            icon: 'icon="uiw:time-o" width="30" style={{ color: "#797979" }}',
            background: 'style={{ background: "#DDDDDD" }}',
        },
        {
            id: 2,
            nameTask: "Application Letter",
            nameTeacher: "Budiono, S.Pd",
            dateUpload: '6 Mar 2023',
            deadline: '7 Mar 2023',
            icon: 'icon="uiw:time-o" width="30" style={{ color: "#CBC41A" }}',
            background: 'style={{ background: "#FFFA87" }}',
        },
        {
            id: 3,
            nameTask: "Jump",
            nameTeacher: "Suep, S.Kom",
            dateUpload: '5 Mar 2023',
            deadline: '5 Mar 2023',
            icon: 'icon="uiw:time-o" width="30" style={{ color: "#FF3F3F" }}',
            background: 'style={{ background: "#FFC6C6" }}',
        },
        {
            id: 4,
            nameTask: "Project Monitoring Suhu",
            nameTeacher: "Bagoes, S.Kom",
            dateUpload: '5 Mar 2023',
            deadline: '5 Mar 2023',
            icon: 'icon="uiw:time-o" width="30" style={{ color: "#797979" }}',
            background: 'style={{ background: "#DDDDDD" }}',
        },
        {
            id: 5,
            nameTask: "Aksara Jawa",
            nameTeacher: "Sumiyatii, S.Pd",
            dateUpload: '6 Mar 2023',
            deadline: '7 Mar 2023',
            icon: 'icon="uiw:time-o" width="30" style={{ color: "#797979" }}',
            background: 'style={{ background: "#DDDDDD" }}',
        }
    ];
  

    return(
        <div>
            <aside>
                <h1 className="title-form-login" onClick={() => navigate('/murid/berandamurid')}>
                    <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                    nugasyuk
                </h1>
                <ul>
                    <li onClick={() => navigate('/murid/berandamurid')}>
                        <Icon icon="iconoir:home-simple" width="20" />
                        Beranda
                    </li>
                    <li className='active' onClick={() => navigate('/murid/pagetugas')} >
                        <Icon icon="fluent:clipboard-bullet-list-rtl-20-regular" width="25" />
                        Tugas
                    </li>
                    <li onClick={() => navigate('/murid/pagekbm')}>
                        <Icon icon="uiw:date" width="18"/>
                        Jadwal KBM
                    </li>
                    <li onClick={() => navigate('/murid/pagemapel')}>
                        <Icon icon="fluent-mdl2:education" width="18"/>
                        Mata Pelajaran
                    </li>
                    <li onClick={() => navigate('/murid/pagekonseling')}>
                        <Icon icon="ph:apple-podcasts-logo-duotone" width="18"/>
                        Konseling
                    </li>
                </ul>
            </aside>
            <div className="container-content">
                <NavbarMurid text={navText}/>
                <div className="main">
                    <div className='header-task-student'>
                        <div className='header-task-student-left'>
                            <select id='guru' name='guru'>
                                <option value="semua" selected>-- Semua Tugas --</option>
                                <option value="task">Tugas selesai dalam deadline</option>
                                <option value="nonproduktif">Tugas selesai lewat deadline</option>
                                <option value="bk">Tugas belum selesai dalam deadline</option>
                                <option value="bk">Tugas belum selesai lewat deadline</option>
                                <option value="bk">Menunggu konfirmasi guru</option>
                            </select>

                            <select id='guru' name='guru'>
                                <option value="semua" selected>-- Semua Mapel --</option>
                                <option value="produktif">Produktif</option>
                                <option value="nonproduktif">Normadaf</option>
                            </select>

                            <form className='search-box'>
                                <input type='text' placeholder='Cari...'/>
                                <button type='submit'>
                                    <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="content-task">
                        {/* {valueDataTugas.map((data) => (
                        <div className="card-task" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie-information" style={{ background: "#DDDDDD" }}>
                                    <Icon icon="uiw:time-o" width="30" style={{ color: "#FF3F3F" }}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="title-indie-information">{data.nameTask}</p>
                                    <p className="value-indie-information">{data.nameTeacher}</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">{data.dateUpload}</p>
                                <p className="deadline-time" style={{color: "#2A93D5"}}>Deadline : <span>{data.deadline}</span></p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>
                        ))} */}

                        <div className="card-task" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie-information" style={{ background: "#FFFA87" }}>
                                    <Icon icon="uiw:time-o" width="30" style={{ color: "#CBC41A" }}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="title-indie-information">Application Letter</p>
                                    <p className="value-indie-information">Budiono, S.Pd</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">6 Mar 2023</p>
                                <p className="deadline-time" style={{color: "#2A93D5"}}>Deadline : <span>7 Mar 2023</span></p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>

                        <div className="card-task" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie-information" style={{ background: "#FFC6C6" }}>
                                    <Icon icon="uiw:time-o" width="30" style={{ color: "#FF3F3F" }}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="title-indie-information">Jump</p>
                                    <p className="value-indie-information">Suep, S.Kom</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">5 Mar 2023</p>
                                <p className="deadline-time" style={{color: "#FF3F3F"}}>Deadline : <span>5 Mar 2023</span></p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>

                        <div className="card-task" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie-information" style={{ background: "#FFC6C6" }}>
                                    <Icon icon="material-symbols:check-small-rounded" width="50" style={{ color: "#FF3F3F" }}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="title-indie-information">Project Monitoring Suhu</p>
                                    <p className="value-indie-information">Bagoes, S.Kom</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">5 Mar 2023</p>
                                <p className="deadline-time" style={{color: "#FF3F3F"}}>Deadline : <span>5 Mar 2023</span></p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>

                        <div className="card-task" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie-information" style={{ background: "#D5FFC6" }}>
                                    <Icon icon="material-symbols:check-small-rounded" width="50" style={{ color: "#84E063" }}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="title-indie-information">Aksara Jawa</p>
                                    <p className="value-indie-information">Sumiyati, S.Pd</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">5 Mar 2023</p>
                                <p className="deadline-time" style={{color: "#2A93D5"}}>Deadline : <span>5 Mar 2023</span></p>
                                <Icon icon="ic:round-navigate-next" width="30" className="icon-navigate"/>
                            </div>
                        </div>
                        
                        <div className="card-task" style={{ cursor: "pointer"}}>
                            <div className="indiecator-left">
                                <div className="icon-indie-information" style={{ background: "#D5FFC6" }}>
                                    <Icon icon="material-symbols:check-small-rounded" width="50" style={{ color: "#84E063" }}/>
                                </div>
                                <div className="desc-indie">
                                    <p className="title-indie-information">Aksara Jawa</p>
                                    <p className="value-indie-information">Sumiyati, S.Pd</p>
                                </div>
                            </div>
                            <div className="indiecator-right">
                                <p className="time-upload">5 Mar 2023</p>
                                <p className="deadline-time" style={{color: "#2A93D5"}}>Deadline : <span>5 Mar 2023</span></p>
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
                    <p className="value-detail">zumarramadhan@smkrus.sch.id</p>
                    <p className="judul-detail">Nama Pengguna</p>
                    <p className="value-detail">Zumar</p>
                    <p className="judul-detail">Nama</p>
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

export default PageTugas;