import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import '../cssAll/murid/RiwayatKonseling.css';
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


function RiwayatKonseling(){
    const navText = "Riwayat Janji Konseling";
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
                    <div className="con-content-history-counseling">
                        <div className="content-history-promise-counseling">
                            <p className="text-promise-counseling">Janji konseling dengan guru BK :</p>
                            <div className="card-promise-counseling">
                                <div className="header-profile-teacher-bk">
                                    <div className="profile-teacher-bk">
                                        <img src={ProfilBk} alt="" className="img-teacher-bk" />
                                        <p className="name-teacher-bk">Sumijah, S.Pd</p>
                                    </div>
                                    <div className="icon-option-promise-counseling">
                                        <Icon icon="mi:options-vertical" width="30"/>
                                    </div>
                                </div>
                                <p className="topics-counseling">Topik : <span>Kuliah setelah SMK</span></p>
                                <div className="information-promise-counseling">
                                    <div className="counseling-date">
                                        <Icon icon="uiw:date" width="15"/>
                                        <p>Kam, 2 April 2023</p>
                                    </div>
                                    <div className="counseling-time">
                                        <Icon icon="material-symbols:nest-clock-farsight-analog-outline-rounded" width="15"/>
                                        <p>Jam 4</p>
                                    </div>
                                    <div className="counseling-location">
                                        <Icon icon="material-symbols:location-on-outline-rounded"  width="15"/>
                                        <p>Ruang BK</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-history-promise-counseling">
                            <p className="text-promise-counseling">Riwayat janji konseling dengan guru BK :</p>
                            <div className="card-promise-counseling">
                                <div className="profile-teacher-bk">
                                    <img src={ProfilBk} alt="" className="img-teacher-bk" />
                                    <p className="name-teacher-bk">Sumijah, S.Pd</p>
                                </div>
                                <p className="topics-history-counseling">Topik : <span>Kuliah setelah SMK</span></p>
                                <div className="information-promise-history-counseling">
                                    <div className="counseling-date">
                                        <Icon icon="uiw:date" width="15"/>
                                        <p>Kam, 2 April 2023</p>
                                    </div>
                                    <div className="counseling-time">
                                        <Icon icon="material-symbols:nest-clock-farsight-analog-outline-rounded" width="15"/>
                                        <p>Jam 4</p>
                                    </div>
                                    <div className="counseling-location">
                                        <Icon icon="material-symbols:location-on-outline-rounded"  width="15"/>
                                        <p>Ruang BK</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-promise-counseling">
                                <div className="profile-teacher-bk">
                                    <img src={ProfilBk} alt="" className="img-teacher-bk" />
                                    <p className="name-teacher-bk">Sumijah, S.Pd</p>
                                </div>
                                <p className="topics-history-counseling">Topik : <span>Kuliah setelah SMK</span></p>
                                <div className="information-promise-history-counseling">
                                    <div className="counseling-date">
                                        <Icon icon="uiw:date" width="15"/>
                                        <p>Kam, 2 April 2023</p>
                                    </div>
                                    <div className="counseling-time">
                                        <Icon icon="material-symbols:nest-clock-farsight-analog-outline-rounded" width="15"/>
                                        <p>Jam 4</p>
                                    </div>
                                    <div className="counseling-location">
                                        <Icon icon="material-symbols:location-on-outline-rounded"  width="15"/>
                                        <p>Ruang BK</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RiwayatKonseling 