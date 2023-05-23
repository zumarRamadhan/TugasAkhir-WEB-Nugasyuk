import { Icon } from '@iconify/react';
import { useState } from 'react';
import '../cssAll/admin/FormAddMurid.css';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import Kalam from "../assets/murid-kalam.png";
import Wira from "../assets/murid-wira.svg";
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import { useNavigate, Link } from 'react-router-dom';
import ImgProfil from '../assets/img-profil.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import foto8 from '../assets/foto8.png';
import foto9 from '../assets/foto9.png';
import foto10 from '../assets/foto10.png';
import foto11 from '../assets/foto11.png';
import foto12 from '../assets/foto12.png';
import foto13 from '../assets/foto13.png';
import foto14 from '../assets/foto14.png';
import iconaksi from '../assets/iconaksi.svg';

function FormAddMurid() {
    const navText = "Tambah Data";
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

    const dataHari = [
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

    const dataJamPelajaran = [ 
        {
            id: 1,
            jamKe: 1,
            lamajam: 40,
        },
        {
            id: 2,
            jamKe: 2,
            lamajam: 40,
        },
        {
            id: 3,
            jamKe: 3,
            lamajam: 40,
        },
        {
            id: 4,
            jamKe: 4,
            lamajam: 40,
        },
        {
            id: 5,
            jamKe: 5,
            lamajam: 40,
        },
        {
            id: 6,
            jamKe: 6,
            lamajam: 40,
        },
        {
            id: 7,
            jamKe: 7,
            lamajam: 40,
        },
        {
            id: 8,
            jamKe: 8,
            lamajam: 40,
        },
        {
            id: 9,
            jamKe: 9,
            lamajam: 40,
        },
        {
            id: 10,
            jamKe: 10,
            lamajam: 40,
        },
        {
            id: 11,
            jamKe: 11,
            lamajam: 40,
        },
        {
            id: 12,
            jamKe: 12,
            lamajam: 40,
        },
        {
            id: 13,
            jamKe: 13,
            lamajam: 40,
        },
        {
            id: 14,
            jamKe: 14,
            lamajam: 40,
        },
    ]

    return (
        <div>
            <aside>
                <h1 className="title-form-login" onClick={() => navigate('/admin/berandaadmin')} style={{ cursor: "pointer" }}>
                    <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
                    nugasyuk
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
                    <li className='active' onClick={() => navigate('/admin/pagemurid')}>
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
                <Navigation text={navText} />
                <div className="main">
                    <div className="content-formKbm">
                        <form action="" className="container-formKbm">
                            <div className="con-formKbm">
                                <div className="title-formKbm">Profil</div>
                                <input type="file" className="input-formKbm" placeholder='' />
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Nama</div>
                                <input type="text" className="input-formKbm" placeholder='nama' />
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Kelas</div>
                                <input type="text" className="input-formKbm" placeholder='kelas' />
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">NIS</div>
                                <input type="text" className="input-formKbm" placeholder='nomor induk siswa' />
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Email Murid</div>
                                <input type="text" className="input-formKbm" placeholder='example@smkrus.sch.id' />
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Email Wali Murid</div>
                                <input type="text" className="input-formKbm" placeholder='example@smkrus.sch.id ' />
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Password Murid </div>
                                <input type="password" className="input-formKbm" placeholder='*******'/>
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Konfirmasi Password Murid </div>
                                <input type="password" className="input-formKbm" placeholder='*******'/>
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Password wali Murid </div>
                                <input type="password" className="input-formKbm" placeholder='*******'/>
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Konfirmasi Password wali Murid </div>
                                <input type="password" className="input-formKbm" placeholder='*******'/>
                            </div>

                            

                            <div className="con-btn-form">
                                <button type="submin" className="btn-form" style={{ cursor: "pointer" }}>Simpan perubahan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAddMurid