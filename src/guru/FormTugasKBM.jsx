import '../cssAll/guru/FormTugasKBM.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarGuru from '../component/NavbarGuru';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import { useState, useRef, useEffect } from "react";
import ImgProfil from '../assets/profil-guru.svg';
import damiImgMurid from '../assets/damiImgMurid.png';


function FormTugasKBM(){
    const navText = "Tambah Tugas";
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

    const fileInputRef = useRef(null);
    const fileInputLabelRef = useRef(null);

    const handleFileInputChange = () => {
        const fileInput = fileInputRef.current;
        const fileInputLabel = fileInputLabelRef.current;

        if (fileInput.files && fileInput.files.length > 0) {
        fileInputLabel.textContent = fileInput.files[0].name;
        } else {
        fileInputLabel.textContent = 'Pilih File';
        }
    };

    useEffect(() => {
        const fileInputLabel = fileInputLabelRef.current;
        fileInputLabel.textContent = 'Pilih File';
    }, []);

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

    // data materi kbm berisi nama materi, tanggal, guru

    const valueDataMateriKbm = [
        {
            id: 1,
            namaMateri: 'Materi Application Letter',
            tanggal: '8 Mar 2023',
            guru: 'Budiono, S.Pd',
        },
        {
            id: 2,
            namaMateri: 'Materi Reading',
            tanggal: '5 Mar 2023',
            guru: 'Budiono, S.Pd',
        },
        {
            id: 3,
            namaMateri: 'Materi Laporan B. Inggris',
            tanggal: '12/12/2021',
            guru: '1 Mar 2023',
        },
    ];

    // data tugas kbm berisi nama tugas, tanggal, deadline, guru

    const valueDataTugasKbm = [
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

    const tahunAjaran = [
        {
            id: 1,
            tahun: '2021/2022',
            semester : '1',
        },
        {
            id: 2,
            tahun: '2021/2022',
            semester : '2',
        },
        {
            id: 3,
            tahun: '2022/2023',
            semester : '1',
        },
        {
            id: 4,
            tahun: '2022/2023',
            semester : '2',
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
                <li className='active' onClick={() => navigate('/guru/pagekbm')} >
                    <Icon icon="ph:chalkboard-teacher" width="20" />
                    KBM
                </li>
                <li onClick={() => navigate('/guru/pagepengumpulan')}>
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
                    {/* <div className="content-formMateriKBM">
                        <form action="" className="container-formMateriKBM">

                        </form>
                    </div> */}
                    <div className="content-formKbm">
                        <form action="" className="container-formKbm">
                            <div className="con-formKbm">
                                <div className="title-formKbm">Judul Tugas</div>
                                <input type="text" className="input-formKbm" placeholder='judul tugas'/>
                            </div>
                            
                            <div className="con-formKbm">
                                <div className="title-formKbm">Deskrips Tugas</div>
                                <textarea name="" id="" rows="7" className="input-formKbm" placeholder='deskripsi tugas'></textarea>
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Deadline</div>
                                <input type="date" className="input-formKbm" placeholder='link materi' style={{cursor: 'pointer'}}/>
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">Link Tugas</div>
                                <input type="text" className="input-formKbm" placeholder='link tugas'/>
                            </div>

                            <div className="con-formKbm">
                                <div className="title-formKbm">File Tugas</div>
                                <div className="input-formKbm">
                                    <input type="file" id="fileInput"  style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileInputChange} accept=".pdf,.jpg,.jpeg,.png,.docx"/>
                                    <label htmlFor="fileInput" className='fileInput' id="fileInputLabel" ref={fileInputLabelRef}>
                                        File Materi
                                    </label>
                                </div>
                            </div>
                            <div className="con-formKbm">
                                <div className="title-formKbm">Tahun ajaran</div>
                                <select id="" name="" className='selectForm'>
                                    <option hidden>-- Tahun ajaran --</option>
                                    {tahunAjaran.map((data) => (
                                        <option>{data.tahun} / semester {data.semester}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="switch-inputTugas">
                                <h2 className="title-formKbm">Apakah murid dapat menginput jawaban?</h2>
                                <div className="con-radio">
                                    <label>
                                        <input type="radio" name="jawaban" value="yes"/>Ya
                                    </label>
                                    <label>
                                        <input type="radio" name="jawaban" value="no"/>Tidak
                                    </label>
                                </div>
                                
                            </div>

                            {/* <div className="con-formKbm">
                                <div className="title-formKbm">Jam ke</div>
                                <select id="" name="" className='selectForm'>
                                    {dataJamPelajaran.map((data) => (
                                        <option>{data.jamKe}</option>
                                    ))}
                                </select>
                            </div> */}
                            
                            {/* <div className="con-formKbm">
                                <div className="title-formKbm">Jumlah jam</div>
                                <input type="text" className="input-formKbm" placeholder='Jumlah jam'/>
                            </div> */}

                            <div className="con-btn-form">
                                <button type="submit" className="btn-form" style={{cursor: "pointer"}}>Simpan perubahan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>{/* end body */}

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

export default FormTugasKBM