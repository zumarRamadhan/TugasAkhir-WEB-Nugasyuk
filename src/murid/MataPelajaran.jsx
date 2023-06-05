import '../cssAll/murid/Mapel.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import Navigation from "../component/NavbarMurid";
import ImgProfil from '../assets/profil-murid.svg';
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
import { useState, useEffect } from "react";
import axios from 'axios';

function PageMapel(){

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
    
    const valueDataMapel = [
        {
            id: 1,
            namaMapel: "B. Inggris",
            guruPengajar: "Budiono, S.Pd",
            kelas: '10',
            jurusan: 'pplg',
            tingkatan: '1',
            assets: cardMapel1,
        },
        {
            id: 2,
            namaMapel: "Olaharaga",
            guruPengajar: "Asep, S.Pd",
            kelas: "10",
            jurusan: "pplg",
            tingkatan: "2",
            assets: cardMapel2,
        },
        {
            id: 3,
            namaMapel: "Matematika",
            guruPengajar: "Rini, S.Pd",
            kelas: "11",
            jurusan: "pplg",
            tingkatan: "1",
            assets: cardMapel3,
        },
        {
            id: 4,
            namaMapel: "PAI",
            guruPengajar: "Edi, S.Pd.I",
            kelas: "11",
            jurusan: "pplg",
            tingkatan: "2",
            assets: cardMapel4,
        },
        {
            id: 5,
            namaMapel: "BK",
            guruPengajar: "Sumijah, S.Pd",
            kelas: "12",
            jurusan: "pplg",
            tingkatan: "1",
            assets: cardMapel5,
        },
        {
            id: 6,
            namaMapel: "Sejarah",
            guruPengajar: "Rini, S.Pd",
            kelas: "12",
            jurusan: "pplg",
            tingkatan: "2",
            assets: cardMapel6,
        },
        {
            id: 7,
            namaMapel: "Game Dev",
            guruPengajar: "Suep, S.Kom",
            kelas: "10",
            jurusan: "animasi",
            tingkatan: "1",
            assets: cardMapel7,
        },
        {
            id: 8,
            namaMapel: "Web Dev",
            guruPengajar: "Sugeng, S.Kom",
            kelas: "10",
            jurusan: "animasi",
            tingkatan: "2",
            assets: cardMapel8,
        },
        {
            id: 9,
            namaMapel: "Desktop Dev",
            guruPengajar: "Paimin, S.Kom",
            kelas: "11",
            jurusan: "animasi",
            tingkatan: "1",
            assets: cardMapel9,
        },
    ];

    // for (let i = 0; i < valueDataMapel.length; i++) {
    //     const kelas = valueDataMapel[i].kelas;
    //     const jurusan = valueDataMapel[i].jurusan;
    //     const tingkatan = valueDataMapel[i].tingkatan;
    //     valueDataMapel[i].kelasAll = kelas + " " + jurusan + " " + tingkatan;
    // }

    const [jurusan, setJurusan] = useState("semua");

    const handleChange = (event) => {
        setJurusan(event.target.value);
    };

    const filterDataMapel = valueDataMapel.filter((data) =>
        jurusan === "semua" ? true : data.jurusan === jurusan
    );

    const saveToken = sessionStorage.getItem('token');

    const [dataMapel, setDataMapel] = useState([]);

    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        setisLoading(true);
        axios
        .get('https://www.nugasyuk.my.id/api/murid/matapelajaran', { 
            headers : {
                "Content-Type": "application/json",
                Authorization: `Bearer ${saveToken}`
            }
         } )
        .then(result => {
            console.log('data API', result.data);
            // const responseAPI = result.data;
            setDataMapel(result.data.data);
            setisLoading(false);
        })
        .catch(err => {
            console.log('terjadi kesalahan: ', err)
            setisError(true);
            setisLoading(false);
        })
    }, [])

    // if (!dataTugas) return <h3>Loading...</h3>;

    if (isLoading)
     return <div id="load">
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
            </div>;
    else if (dataMapel && !isError)

    return(
        <div>
            {/* <Sidebar/> */}
            <aside>
                <h1 className="title-form-login" onClick={() => navigate('/murid/berandamurid')}>
                    <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
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
                    <li onClick={() => navigate('/admin/pagemurid')}>
                        <Icon icon="ph:student" width="20" />
                        Murid
                    </li>
                    <li onClick={() => navigate('/admin/pagekelas')}>
                        <Icon icon="fluent:class-24-regular" width="20" />
                        Kelas
                    </li>
                    <li className='active' onClick={() => navigate('/admin/matapelajaran')}>
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

            <div className='container-content'>
                <Navigation textNavigasi={'Mata Pelajaran'}/>
                <main className='main'>
                    <div className="content-mapel">
                        <div className="con-card-mapel">
                            {dataMapel && dataMapel.map((listMapel =>  (
                                <Link 
                                    className='link-navigate' 
                                    to={"/murid/pagemapel/mapelmateri/" + listMapel.id}
                                >
                                    <div className="card-mapel" key={listMapel.id} style={{ cursor: "pointer" }}  onClick={() => navigate('/murid/pagemapel/mapelmateri/${id}')} id='123'>
                                        <img 
                                            src={cardMapel8} 
                                            alt=""
                                            className="image-card-mapel"
                                        />
                                        <div className="content-card-mapel">
                                        <div className="card-mapel-left">
                                            <p className="mata-pelajaran">{listMapel.nama_mapel}</p>
                                            <p className="nama-guru-mapel">{listMapel.nama_guru}</p>
                                        </div>
                                        {/* <div className="kelas-mapel">{`${data.kelas} ${data.jurusan.toUpperCase()} ${data.tingkatan}`}</div> */}
                                        </div>
                                    </div>
                                </Link>
                            )))}
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

export default PageMapel;