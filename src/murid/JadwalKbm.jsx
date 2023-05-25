import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import '../cssAll/murid/JadwalKbm.css';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarMurid from '../component/NavbarMurid';
import ImgProfil from '../assets/profil-murid.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import imgCardKbm from '../assets/guru-karman.svg';
import ImgBinggris from '../assets/img-binggris.svg';
import { useState } from "react";

function JadwalKBM(){
    const navText = "Jadwal KBM 11 PPLG 1";
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

    const closeDetailKbm = () => {
        const popupLogout = document.querySelector('.popup-kbm');
        setTimeout(() => popupLogout.style.display = "none", 250);
        popupLogout.style.animation = 'slide-up 0.3s ease-in-out';
    }
    
    const showDetailKbm = () => {
        const popupForget = document.querySelector('.popup-kbm');
        popupForget.style.display = 'flex';
        popupForget.style.animation = 'slide-down 0.3s ease-in-out';
    }


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
    ];

    const valueDataGuru = [
        {
            id: 1,
            kodeGuru: "BI1",
            namaGuru: "Budiono, S.Pd",
            mapel: "B. Inggris",
            profileImg: imgCardKbm,
        },
        {
            id: 2,
            kodeGuru: "OLA1",
            namaGuru: "Asep, S.Pd",
            mapel: "Olahraga",
            profileImg: imgCardKbm,
        },
        {
            id: 3,
            kodeGuru: "MTK1",
            namaGuru: "Rini, S.Pd",
            mapel: "Matematika",
            profileImg: imgCardKbm,
        },
        {   
            id: 4,
            kodeGuru: "PAI1",
            namaGuru: "Edi, S.Pd.I",
            mapel: "PAI",
            profileImg: imgCardKbm,
        },
    ]

    const valueCardKbm = [
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
    ]

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
                <li className="active" onClick={() => navigate('/murid/pagekbm')}>
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
                    <div className="content-jadwalKBM">
                        <div className="con-card-jadwalKBM">
                            {valueCardKbm.map((cardKbm) => (
                            <div className="cardJadwalKbm">
                                <div className="titleJadwalKbm">
                                    <p>Jadwal KBM</p>
                                    <h1>{cardKbm.hari}</h1>
                                </div>
                                <div className="bottomjadwalKbm">
                                    <div className="conImgGuru-Kbm">
                                        <div className="imgGuru-Kbm">
                                            <img src={imgCardKbm} alt="" className="imageGuru-Kbm" />
                                        </div>
                                        <div className="imgGuru-Kbm">
                                            <img src={imgCardKbm} alt="" className="imageGuru-Kbm" />
                                        </div>
                                        <div className="imgGuru-Kbm">
                                            <img src={imgCardKbm} alt="" className="imageGuru-Kbm" />
                                        </div>
                                        <div className="imgGuru-Kbm">
                                            <img src={imgCardKbm} alt="" className="imageGuru-Kbm" />
                                        </div>
                                    </div>
                                    <div className="btnDetail-Kbm">
                                        <Icon icon="ic:round-navigate-next" width="30" className='iconDetail-Kbm' onClick={showDetailKbm}/>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="popup-kbm">
                <div className="detail-popup-kbm">
                    <div className="nav-popup-kbm">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer", color: "#4b4b4b"}} className='btn-close' onClick={closeDetailKbm}/>
                        <h2 className="day-schedule">Senin</h2>
                    </div>
                    <div className="con-popup-kbm">
                        {valueDataGuru.map((dataGuru) => (
                        <div className="popup-card-kbm">
                            <div className="test1">
                                <img src={dataGuru.profileImg} alt="" className="image-card-kbm" />
                                <div className="mapel-card-kbm">
                                    <p>{dataGuru.mapel}</p>
                                    <p className="guruPengampu">{dataGuru.namaGuru}</p>
                                </div>
                            </div>
                            <div className="test2">
                                <div className="jamMengajar">
                                    <span>07.00</span> - <span>08.20</span> 
                                </div>
                            </div>         
                        </div>
                        ))}
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

export default JadwalKBM