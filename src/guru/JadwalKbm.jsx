import '../cssAll/guru/JadwalKbm.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarGuru from '../component/NavbarGuru';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState } from "react";
import ImgProfil from '../assets/profil-guru.svg';

function PageJadwalKbm(){
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
            jurusan: "anim",
            tingkatan: "1",
            // assets: cardMapel7,
        },
        {
            id: 8,
            kelas: "10",
            jurusan: "anim",
            tingkatan: "2",
            // assets: cardMapel8,
        },
        {
            id: 9,
            kelas: "11",
            jurusan: "anim",
            tingkatan: "1",
            // assets: cardMapel9,
        },
        {
            id: 10,
            kelas: "11",
            jurusan: "anim",
            tingkatan: "2",
            // assets: cardMapel10,
        },
        {
            id: 11,
            kelas: "11",
            jurusan: "dkv",
            tingkatan: "1",
            // assets: cardMapel11,
        },
        {
            id: 12,
            kelas: "11",
            jurusan: "dkv",
            tingkatan: "2",
            // assets: cardMapel12,
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

    const valueDataGuru = [
        {
            id: 1,
            kodeGuru: "BI1",
            namaGuru: "Budiono, S.Pd",
            mapel: "B. Inggris",
            // profileImg: imgCardKbm,
        },
        {
            id: 2,
            kodeGuru: "OLA1",
            namaGuru: "Asep, S.Pd",
            mapel: "Olahraga",
            // profileImg: imgCardKbm,
        },
        {
            id: 3,
            kodeGuru: "MTK1",
            namaGuru: "Rini, S.Pd",
            mapel: "Matematika",
            // profileImg: imgCardKbm,
        },
        {   
            id: 4,
            kodeGuru: "PAI1",
            namaGuru: "Edi, S.Pd.I",
            mapel: "PAI",
            // profileImg: imgCardKbm,
        },
    ]

    const jamPelajaran = [
        {
            id: 1,
            startingHour: "07:00",
            hourIsOver: "07:40",
        },
        {
            id: 2,
            startingHour: "07:40",
            hourIsOver: "08:20",
        },
        {
            id: 3,
            startingHour: "08:20",
            hourIsOver: "09:00",
        },
        {
            id: 4,
            startingHour: "09:00",
            hourIsOver: "09:40",
        },
        {
            id: 5,
            startingHour: "10.00",
            hourIsOver: "10:40",
        },
        {
            id: 6,
            startingHour: "10:40",
            hourIsOver: "11:20",
        },
        {
            id: 7,
            startingHour: "11:20",
            hourIsOver: "12:00",
        },
        {
            id: 8,
            startingHour: "12:30",
            hourIsOver: "13:10",
        },
        {
            id: 9,
            startingHour: "13:10",
            hourIsOver: "13:50",
        },
        {
            id: 10,
            startingHour: "13:50",
            hourIsOver: "14:30",
        },
    ];
    
    const jadwalKBM = [
        {
            id: 1,
            kelas: valueDataKelas[2].kelas+" "+valueDataKelas[2].jurusan.toUpperCase()+" "+valueDataKelas[2].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[0].startingHour,
            hourIsOver: jamPelajaran[0].hourIsOver,
        },
        {
            id: 2,
            kelas: valueDataKelas[2].kelas+" "+valueDataKelas[2].jurusan.toUpperCase()+" "+valueDataKelas[2].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[1].startingHour,
            hourIsOver: jamPelajaran[1].hourIsOver,
        },
        {
            id: 3,
            kelas: valueDataKelas[4].kelas+" "+valueDataKelas[4].jurusan.toUpperCase()+" "+valueDataKelas[4].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[2].startingHour,
            hourIsOver: jamPelajaran[2].hourIsOver, 
        },
        {
            id: 4,
            kelas: valueDataKelas[4].kelas+" "+valueDataKelas[4].jurusan.toUpperCase()+" "+valueDataKelas[4].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[3].startingHour,
            hourIsOver: jamPelajaran[3].hourIsOver,
        },
        {
            id: 5,
            kelas: valueDataKelas[8].kelas+" "+valueDataKelas[8].jurusan.toUpperCase()+" "+valueDataKelas[8].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[4].startingHour,
            hourIsOver: jamPelajaran[4].hourIsOver,
        },
        {
            id: 6,
            kelas: valueDataKelas[8].kelas+" "+valueDataKelas[8].jurusan.toUpperCase()+" "+valueDataKelas[8].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[5].startingHour,
            hourIsOver: jamPelajaran[5].hourIsOver,
        },
        {
            id: 7,
            kelas: valueDataKelas[9].kelas+" "+valueDataKelas[9].jurusan.toUpperCase()+" "+valueDataKelas[9].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[6].startingHour,
            hourIsOver: jamPelajaran[6].hourIsOver,
        },
        {
            id: 8,
            kelas: valueDataKelas[9].kelas+" "+valueDataKelas[9].jurusan.toUpperCase()+" "+valueDataKelas[9].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[7].startingHour,
            hourIsOver: jamPelajaran[7].hourIsOver,
        },
        {
            id: 9,
            kelas: valueDataKelas[10].kelas+" "+valueDataKelas[10].jurusan.toUpperCase()+" "+valueDataKelas[10].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[8].startingHour,
            hourIsOver: jamPelajaran[8].hourIsOver,
        },
        {
            id: 10,
            kelas: valueDataKelas[10].kelas+" "+valueDataKelas[10].jurusan.toUpperCase()+" "+valueDataKelas[10].tingkatan,
            mapel: valueDataGuru[0].mapel,
            startingHour: jamPelajaran[9].startingHour,
            hourIsOver: jamPelajaran[9].hourIsOver,
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
                <li onClick={() => navigate('/guru/pagepengumpulan')}>
                    <Icon icon="uiw:date" width="18"/>
                    Pengumpulan
                </li>
                <li className='active' onClick={() => navigate('/guru/pagejadwalkbm')}>
                    <Icon icon="fluent-mdl2:education" width="18"/>
                    Jadwal KBM
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarGuru text={navText}/>
                <div className="main">
                    <div className="header-jadwalKBM-Guru">
                        <div className="header-jadwalKBM-left">
                            <select id="jadwalKbm" name="jadwalKbm">
                                {dayData.map((data) => (
                                    <option>-- {data.hari} --</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="content-jadwalKBM-Guru">
                        <p className="valueDay">Senin</p>
                        <div className="con-card-jadwalKBM-Guru">
                            {jadwalKBM.map((data) => (
                            <div className="card-jadwalKBM-Guru">
                                <div className="card-jadwalKBM-Guru-left">
                                    <p className="id-jadwalKBM-Guru">{data.id}</p>
                                    <div className="icon-jadwalKBM-Guru">
                                        <Icon icon="fluent:class-24-regular" width="30" />
                                    </div>
                                    <p className="dataKelas-jadwalKBM-Guru">{data.kelas}</p>
                                    <p className="dataMapel-jadwalKBM-Guru">{data.mapel}</p>
                                </div>
                                <div className="hourValue-jadwalKBM-Guru"><span className='startingHour'>{data.startingHour}</span> - <span className='hourIsOver'>{data.hourIsOver}</span></div>
                            </div>
                            ))}
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

export default PageJadwalKbm