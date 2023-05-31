import '../cssAll/admin/DataMurid.css'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
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
function DataMurid(){
    const navText = "Data Murid";
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
    const [active, setActive] = useState();
    const [selected, setSelected] = useState();
    
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
        },
        {
            id: 2,
            kelas: "10",
            jurusan: "pplg",
            tingkatan: "2",
        },
        {
            id: 3,
            kelas: "11",
            jurusan: "pplg",
            tingkatan: "1",
        },
        {
            id: 4,
            kelas: "11",
            jurusan: "pplg",
            tingkatan: "2",
        },
        {
            id: 5,
            kelas: "12",
            jurusan: "pplg",
            tingkatan: "1",
        },
        {
            id: 6,
            kelas: "12",
            jurusan: "pplg",
            tingkatan: "2",
        },
        {
            id: 7,
            kelas: "10",
            jurusan: "animasi",
            tingkatan: "1",
        },
        {
            id: 8,
            kelas: "10",
            jurusan: "animasi",
            tingkatan: "2",
        },
        {
            id: 9,
            kelas: "11",
            jurusan: "animasi",
            tingkatan: "1",
        },
        {
            id: 10,
            kelas: "11",
            jurusan: "animasi",
            tingkatan: "2",
        },
    ];

    const dataTabelMurid = [
        {
            id: 1,
            imgProfile: foto8,
            name: "Ahmad Aziz Wira Widodo",
            email: "ahmadaziz@smkrus.sch.id",
            kelas: valueDataKelas[2].jurusan.toUpperCase()
        },
        {
            id: 2,
            imgProfile: foto9,
            name: "Bayu Septian Kurniawan",
            email: "bayuseptian@smkrus.sch.id",
            kelas: valueDataKelas[2].jurusan.toUpperCase()
        },
        {
            id: 3,
            imgProfile: foto10,
            name: "Javier Gavra Abhinaya",
            email: "javiergavra@smkrus.sch.id",
            kelas: valueDataKelas[4].jurusan.toUpperCase()
        },
        {
            id: 4,
            imgProfile: foto11,
            name: "Khoiru Rizal Kalam Ismail",
            email: "khoirurizal@smkrus.sch.id",
            kelas: valueDataKelas[4].jurusan.toUpperCase()
        },
        {
            id: 5,
            imgProfile: foto12,
            name: "Muhammad Nur Wahid Bimawan",
            email: "nurwahid@smkrus.sch.id",
            kelas: valueDataKelas[8].jurusan.toUpperCase()
        },
        {
            id: 6,
            imgProfile: foto13,
            name: "Muh Wahyu Ageng Pambudi",
            email: "muhwahyu@smkrus.schid",
            kelas: valueDataKelas[8].jurusan.toUpperCase()
        },
        {
            id: 7,
            imgProfile: foto14,
            name: "Muhammad Vitto Corlenone",
            email: "vittocorleone@smkrus.sch.id",
            kelas: valueDataKelas[9].jurusan.toUpperCase(),
        },
    ];

    function handleToggle(e) {
        console.log(e);
        setActive(!active);
        setSelected(e);
    }
    
    useEffect(() => {
        console.log(active);
    }, [active]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState({dataTabelMurid});
    
    console.log(filteredData);
    const renderData = filteredData.length > 0 ? filteredData : dataTabelMurid;
    const dataNotFound = filteredData.length === 0;

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = dataTabelMurid.filter((value) => {
            return (
                value.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                value.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                value.kelas.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setFilteredData(filteredData);
    };
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return(
        <div>
            {/* <Sidebar/> */}
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/admin/berandaadmin')} style={{cursor: "pointer"}}>
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
            <div className='container-content'>
                <Navigation text={navText}/>
                <main className='main'>
                    <div className='header-murid'>
                        <div className='header-murid-left'>
                            <button className='btn-add-murid' onClick={() => navigate('/admin/pagemurid/formaddmurid')}>
                                <Icon icon="ic:round-plus" width="20"></Icon>
                                <p>Tambah Data</p>
                            </button>

                            <select id='murid' name='murid'>
                                <option value="semua" selected>-- Semua Jurusan --</option>
                                <option value="jurusan">DKV</option>
                                <option value="jurusan">Animasi</option>
                                <option value="jurusan">PPLG</option>
                                <option value="jurusan">DG</option>
                                <option value="jurusan">Teknik Grafika</option>
                            </select>

                            <form className='search-box' onSubmit={handleSearch}>
                                <input type='text' placeholder='Cari...' value={searchQuery} onChange={handleChange} />
                                <button type='submit'>
                                <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                </button>
                            </form>
                        </div>
                        <div className='header-murid-right'>
                            <p className='detail-jumlah-murid'><span>{dataTabelMurid.length}</span> Murid</p>
                        </div>
                    </div>
                    {/* jika data pada renderData kosong maka tampilkan dataNotFound */}
                    {dataNotFound ? (
                        <div className='dataNotFound'>
                            <h2>Data Tidak Ditemukan</h2>
                        </div>
                    ) : (
                    <div className='container-table'>
                        <table className="content-table-murid">
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>NIS</th>
                                    <th>Jurusan</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderData.map((data, index) => (
                                    <tr key={index} style={{ cursor: 'pointer' }}>
                                    <td className='tdImg'>
                                        <img src={data.imgProfile} alt='' />
                                    </td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>04423</td>
                                    <td>
                                        <div className='jurusan'>{data.kelas}</div>
                                    </td>
                                    <td>
                                        <img src={iconaksi} alt='' onClick={() => handleToggle(index)} />
                                        <div
                                        id='popup-menu-muridAdmin'
                                        className={`popup-menu-muridAdmin ${selected === index && active ? 'active' : ''}`}
                                        >
                                        <ul>
                                            <li>
                                            <a href='#'>Detail</a>
                                            </li>
                                            <li>
                                            <a href='#'>Edit</a>
                                            </li>
                                            <li>
                                            <a href='#'>Hapus</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    )}
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

export default DataMurid;