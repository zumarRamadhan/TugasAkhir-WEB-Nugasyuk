import '../cssAll/admin/JadwalKBM.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import Navigation from "../component/NavigationBar";
import ImgProfil from '../assets/img-profil.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import imgCardKbm from '../assets/guru-karman.svg';
import { useState } from "react";

function JadwalKBM(){

    const navText = "Jadwal KBM";
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
            {/* <Sidebar/> */}
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/admin/berandaadmin')} style={{cursor: "pointer"}}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/admin/berandaadmin')}>
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
                <li className='active' onClick={() => navigate('/admin/jadwalkbm')}>
                    <Icon icon="uiw:date" width="20" />
                    Jadwal KBM
                </li>
                <li onClick={() => navigate('/admin/pageassets')}>
                    <Icon icon="ic:outline-file-copy" width="20" />
                    Assets
                </li>
            </ul>
            </aside>
            <div className='container-content'>
                <Navigation text={navText}/>
                <main className='main'>
                    <div className="header-jadwalKBM">
                        <div className="header-jadwalKBM-left">
                            <button className="btn-add-jadwalKBM" onClick={() => navigate('/admin/jadwalkbm/tambah')}>
                                <Icon icon="ic:round-plus" width="20"></Icon>
                                <p>Tambah Data</p>
                            </button>

                            <select id="jadwalKbm" name="jadwalKbm">
                                {valueDataKelas.map((data) => (
                                    <option value={data.jurusan + data.tingkatan + data.kelas}>{data.kelas} {data.jurusan.toUpperCase()} {data.tingkatan}</option>
                                ))}
                            </select>
                        </div>
                    </div>

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
                </main>
            </div>

            <div className="popup-kbm">
                    <div className="detail-popup-kbm">
                        <div className="nav-popup-kbm">
                            <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} className='btn-close' onClick={closeDetailKbm}/>
                            <h2>Senin</h2>
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
                                    <div className="con-btn-card-kbm">
                                        <div className="btn-edit-card-kbm" onClick={() => navigate('/admin/jadwalkbm/tambah')}>
                                            <Icon icon="material-symbols:edit-outline-rounded" width="15"/>
                                        </div>
                                        <div className="btn-delete-card-kbm">
                                            <Icon icon="ic:round-delete-outline" />
                                        </div>
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

export default JadwalKBM;