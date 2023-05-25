import '../cssAll/admin/AddAssets.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import Navigation from "../component/NavigationBar";
import ImgProfil from '../assets/img-profil.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import cardMapel1 from '../assets/cardAssets/cardMapel1.svg';
import cardMapel2 from '../assets/cardAssets/cardMapel2.svg';
import cardMapel3 from '../assets/cardAssets/cardMapel3.svg';
import cardMapel4 from '../assets/cardAssets/cardMapel4.svg';
import cardMapel5 from '../assets/cardAssets/cardMapel5.svg';
import cardMapel6 from '../assets/cardAssets/cardMapel6.svg';
import cardMapel7 from '../assets/cardAssets/cardMapel7.svg';
import cardMapel8 from '../assets/cardAssets/cardMapel8.svg';
import cardMapel9 from '../assets/cardAssets/cardMapel9.svg';
import cardMapel10 from '../assets/cardAssets/cardMapel10.svg';
import cardMapel11 from '../assets/cardAssets/cardMapel11.svg';
import cardMapel12 from '../assets/cardAssets/cardMapel12.svg';
import cardMapel13 from '../assets/cardAssets/cardMapel13.svg';
import cardMapel14 from '../assets/cardAssets/cardMapel14.svg';
import cardMapel15 from '../assets/cardAssets/cardMapel15.svg';
import icondelete from  '../assets/icon-delete.svg'


import { useState, useRef } from "react";

function AddAssets(){

    const navText = "Assets";
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
    
    const valueDataAddAssets = [
        {
            id: 1,
            assets: cardMapel1,
        },
        {
            id: 2,
            assets: cardMapel2,
        },
        {
            id: 3,
            assets: cardMapel3,
        },
        {
            id: 4,
            assets: cardMapel4,
        },
        {
            id: 5,
            assets: cardMapel5,
        },
        {
            id: 6,
            assets: cardMapel6,
        },
        {
            id: 7,
            assets: cardMapel7,
        },
        {
            id: 8,
            assets: cardMapel8,
        },
        {
            id: 9,
            assets: cardMapel9,
        },
        {
            id: 10,
            assets: cardMapel10,
        },

        {
            id: 11,
            assets: cardMapel11,
        },

        {
            id: 12,
            assets: cardMapel12,
        },

        {
            id: 13,
            assets: cardMapel13,
        },
        {
            id: 14,
            assets: cardMapel14,
        },
        {
            id: 15,
            assets: cardMapel15,
        },
    ];
    const [idHover, setIdHover] = useState(null)
    function handleHover(id){
        setIdHover(id)
    }
    
    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          // Periksa jenis file yang diunggah
          const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
          if (allowedTypes.includes(file.type)) {
            // Lakukan sesuatu dengan file yang diunggah, seperti mengirimnya ke server
            console.log('File selected:', file.name);
          } else {
            console.log('Only JPG, PNG, AND SVG files are allowed.');
          }
        }
    };
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
                    <li onClick={() => navigate('/admin/jadwalkbm')}>
                        <Icon icon="uiw:date" width="20" />
                        Jadwal KBM
                    </li>
                    <li className='active' onClick={() => navigate('/admin/pageassets')}>
                        <Icon icon="ic:outline-file-copy" width="20" />
                        Assets
                    </li>
                </ul>
            </aside>

            <div className='container-content'>
                <Navigation text={navText}/>
                <main className='main'>
                    <div className="header-mapel">
                        <div className="header-mapel-left">
                        <button className="btn-add-mapel" onClick={handleFileUpload}>
                            <Icon icon="material-symbols:upload" width="20" />
                            <p>Upload File</p>
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            accept=".jpg, .png, .svg"
                        />
                        </div>
                    </div>

                    <div className="content-AddAssets">
                        <div className="con-card-AddAssets">
                            {valueDataAddAssets.map((data) => (
                            <div className="card-AddAssets" key={data.id} onMouseEnter={() => handleHover(data.id)} onMouseOut={() => setIdHover(null)}>
                                <img src={data.assets} alt="" className="image-card-AddAssets" />
                               
                              {idHover === data.id ? <div className='container-delete' id={data.id}>
                                <img src={icondelete} alt="" />
                                </div>
                                : null
                                }
                            </div>
                            ))}
                        </div>
                    </div>
                </main>
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

export default AddAssets;