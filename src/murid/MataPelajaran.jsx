import '../cssAll/murid/Mapel.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarMurid from '../component/NavbarMurid';
import ImgProfil from '../assets/profil-murid.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import ImgJanji from '../assets/img-janjikonseling.svg';
import ImgBinggris from '../assets/img-binggris.svg';
import ImgOlahraga from '../assets/img-olahraga.svg';
import ImgMtk from '../assets/img-mtk.svg';
import ImgPai from '../assets/img-pai.svg';
import ImgBk from '../assets/img-bk.svg';
import ImgSejarah from '../assets/img-sejarah.svg';
import { useState } from "react";

function Mapel(){
    const navText = "Mata Pelajaran";
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
                <li className='active' onClick={() => navigate('/murid/pagemapel')}>
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
                    <div className="content-mapel">
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #8287F8, #555AD3)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    B. Inggris
                                </p>
                                <div className="nama-guru">
                                    <p>Budiono, S.Pd</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgBinggris} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #CD76EA, #8930A7)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    Olahraga
                                </p>
                                <div className="nama-guru">
                                    <p>Asep, S.Pd</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgOlahraga} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #86A6C3, #5B8AB6)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    Matematika
                                </p>
                                <div className="nama-guru">
                                    <p>Rini, S.Pd</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgMtk} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #30B7AF, #30BCB4)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    PAI
                                </p>
                                <div className="nama-guru">
                                    <p>Edi, S.Pd.I</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgPai} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #DB63B2, #B93B8F)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    BK
                                </p>
                                <div className="nama-guru">
                                    <p>Sumijah, S.Pd</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgBk} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #8B8ECF, #6A6EC7)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    Sejarah
                                </p>
                                <div className="nama-guru">
                                    <p>Rini, S.Pd</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgSejarah} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #F67575, #C04646)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    Game
                                </p>
                                <div className="nama-guru">
                                    <p>Suep, S.kom</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgPai} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #FFAF64, #EB9546)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    Web
                                </p>
                                <div className="nama-guru">
                                    <p>Sugeng, S.Kom</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgBk} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #FFEC3D, #F0C93A)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    Desktop
                                </p>
                                <div className="nama-guru">
                                    <p>Paimin, S.Kom</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgSejarah} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #40E45E, #28C044)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    DBMS
                                </p>
                                <div className="nama-guru">
                                    <p>Psijan, S.kom</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgPai} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #3DA2B9, #2A8AA0)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    Mobile
                                </p>
                                <div className="nama-guru">
                                    <p>Kurniawan, S.Kom</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgBk} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-mapel" style={{background: "linear-gradient(to bottom right, #ED7BA4, #D7487B)"}}>
                            <div className="head-left">
                                <p className="nama-mapel" style={{width:"350px"}}>
                                    IoT
                                </p>
                                <div className="nama-guru">
                                    <p>Paimin, S.Kom</p>
                                </div>
                                <div className="img-mapel">
                                    <img src={ImgSejarah} alt="" />
                                </div>
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
        </div>
    );
}

export default Mapel