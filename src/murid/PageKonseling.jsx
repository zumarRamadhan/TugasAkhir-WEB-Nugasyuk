import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import '../cssAll/murid/BerandaMurid.css';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarMurid from '../component/NavbarMurid';
import ImgProfil from '../assets/profil-murid.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState } from "react";
import CardChat from '../assets/card-chat-bk.svg';
import CardCounseling from '../assets/card-counseling.svg';
import ProfilBk from '../assets/profil-bk.svg';
import ImgHubBk from '../assets/img-chatbk.svg';
import ImgJanji from '../assets/img-janjikonseling.svg';

function PageKonseling(){
    const navText = "Bimbingan Konseling";
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
            <h1 className="title-form-login" onClick={() => navigate('/murid/berandamurid')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/murid/berandamurid')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/murid/pagetugas')} >
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
                <li className='active' onClick={() => navigate('/murid/pagekonseling')}>
                    <Icon icon="ph:apple-podcasts-logo-duotone" width="18"/>
                    Konseling
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarMurid text={navText}/>
                <div className="main">
                    <div className="con-content-counseling">
                        <div className="content-counseling-left">
                            <div className="header-counseling">
                                <div className="head-left">
                                    <h1 className="intro-head-counseling">
                                        Halo <span className="name-student">Wira</span>
                                    </h1>
                                    <p className="desc-head-counseling">
                                        Selamat datang di nugasyuk, anda bisa memonitoring tugas tugas anak anda.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="header-counseling-right">
                            <img src={CardChat} alt="" className="card-chat-counseling" />
                            <div className="content-card-chat-bk">
                                <div className="card-chat-bk-left">
                                    <p className="title-chat-bk">Jika ada yang ingin ditanyakan kepada guru BK melalui chat</p>
                                    <button className="btn-chat-bk">
                                    <Icon icon="ph:chat-circle-dots" width="20"/>
                                        Hubungi BK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="con-content-counseling-bottom">
                        <div className="content-counseling-left">
                            <div className="history-counseling">
                                <div className="head-history-counseling">
                                    <p className="title-history-counseling">
                                        Janji Konseling
                                    </p>
                                    <Icon icon="ic:round-navigate-next"  className="navigate-next-icon" width={30} style={{ cursor: "pointer" }} onClick={() => navigate('/murid/pagekonseling/riwayatkonseling')}/>
                                </div>
                                <div className="card-counseling">
                                    <div className="teacher-bk">
                                        <img src={ProfilBk} alt="" className="img-bk" />
                                        <div className="name-teacher-bk">
                                            <p>Sumijah, S.Pd</p>
                                        </div>
                                    </div>
                                    <div className="information-counseling">
                                        <div className="date-counseling">
                                            <Icon icon="uiw:date" width="15" style={{color: "#2A93D5"}}/>
                                            <p>Kam, 2 April 2023</p>
                                        </div>
                                        <div className="information-counseling-bottom">
                                            <div className="time-counseling">
                                                <Icon icon="material-symbols:nest-clock-farsight-analog-outline-rounded" width="15" style={{color: "#2A93D5"}}/>
                                                <p>Jam 4</p>
                                            </div>
                                            <div className="location-counseling">
                                                <p>Ruang BK</p>
                                                <Icon icon="material-symbols:location-on-outline-rounded"  width="15" style={{color: "#797979"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-counseling-right">
                            <img src={CardCounseling} alt="" className="card-chat-counseling" />
                            <div className="content-card-chat-bk">
                                <div className="card-chat-bk-left">
                                    <p className="title-promise-bk">Buat janji bertemu dengan guru BK jika anda ingin bimbingan konseling secara langsung.</p>
                                    <button className="btn-promise-bk" onClick={() => navigate('/murid/pagekonseling/buatjanji')}>
                                    <Icon icon="uiw:date" width="20"/>
                                        Buat Janji
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="content-konseling">
                        <div className="header-konseling">
                            <div className="head-left">
                                <h1 className="intro-head-konseling">Halo <span className="name-murid">Wira</span></h1>
                                <p className="desc-head-konseling" style={{width:"550px"}}>
                                    Apakah anda ingin bimbingan konseling atau ada hal yang ingin ditanyakan kepada guru BK?
                                </p>
                            </div>
                        </div>
                        <div className="card-hubungi-bk">
                            <div className="head-left">
                                <p className="desc-head-hubungi-bk" style={{width:"350px"}}>
                                    Jika ada yang ingin ditanyakan kepada guru BK melalui chat
                                </p>
                                <div className="img-hubungi-bk">
                                    <img src={ImgHubBk} alt="" />
                                </div>
                                <button className='btn-hub-bk'>
                                    <Icon icon="ph:chat-circle-dots" width="20"/>
                                <p>Hubungi BK</p>
                            </button>
                            </div>
                        </div>
                        <div className="history-janji-bk">
                            <div className="head-left">
                               
                            </div>
                        </div>
                        <div className="card-janji-bk">
                            <div className="head-left">
                                <p className="desc-head-hubungi-bk" style={{width:"350px"}}>
                                    Jika ada yang ingin ditanyakan kepada guru BK melalui chat
                                </p>
                                <div className="img-janji-bk">
                                    <img src={ImgJanji} alt="" />
                                </div>
                                <button className='btn-janji-bk'>
                                    <Icon icon="uiw:date" width="20"/>
                                <p>Buat Janji</p>
                            </button>
                            </div>
                        </div>
                    </div> */}
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

export default PageKonseling