import '../cssAll/admin/DataGuru.css';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from "../component/Sidebar";
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import Navigation from "../component/NavigationBar";
import Karman from '../assets/guru-karman.svg';
import Sapari from '../assets/guru-sapari.svg';
import ImgProfil from '../assets/img-profil.svg';
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import foto from '../assets/Foto1.png';
import foto2 from '../assets/foto2.png';
import foto3 from '../assets/foto3.png';
import foto4 from '../assets/foto4.png';
import foto5 from '../assets/foto5.png';
import foto6 from '../assets/foto6.png';
import foto7 from '../assets/foto7.png';
import iconaksi from '../assets/iconaksi.svg';
import ImgDelete from '../assets/imgDelete.svg';
import ImgDetail from '../assets/damiDetailGuru.png';

function BerandaGuru() {
    const navText = "Data Guru";
    const navigate = useNavigate();
    const [inputKodeGuru, setInputKodeGuru] = useState('crotx')

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

    const showDeletePopup = () => {
        const popupDelete = document.querySelector('#popup-Delete');
        popupDelete.style.display = 'flex';
        popupDelete.style.animation = 'slide-down 0.3s ease-in-out';
    }
    
    const closeDeletePopup = () => {
        const popupDelete = document.querySelector('#popup-Delete');
        setTimeout(() => popupDelete.style.display = "none", 250);
        popupDelete.style.animation = 'slide-up 0.3s ease-in-out';
    }

    const showDetailPopup = () => {
        const popupDelete = document.querySelector('.popup-detailGuru');
        popupDelete.style.display = 'flex';
        popupDelete.style.animation = 'slide-down 0.3s ease-in-out';
    }
    
    const closeDetailPopup = () => {
        const popupDelete = document.querySelector('.popup-detailGuru');
        setTimeout(() => popupDelete.style.display = "none", 250);
        popupDelete.style.animation = 'slide-up 0.3s ease-in-out';
    }

    const showKodePopup = () => {
        const popupKode = document.querySelector('#popup-Kode');
        popupKode.style.display = 'flex';
        popupKode.style.animation = 'slide-down 0.3s ease-in-out';
    }
    
    const closeKodePopup = () => {
        const popupKode = document.querySelector('#popup-Kode');
        setTimeout(() => popupKode.style.display = "none", 250);
        popupKode.style.animation = 'slide-up 0.3s ease-in-out';
        // jika di close maka #inpurKode dan #inputMapel akan di clear
        const clearKode = document.querySelector('#inputKode');
        clearKode.value = "";
        const clearMapel = document.querySelector('#inputMapel');
        clearMapel.value = "";
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
        const clearpassword = document.querySelector('#password');
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

    const dataTabelGuru = [
        {
            id: 1,
            imgProfile: foto,
            name: "Karma Gia, S.Kom",
            email: "karmangia@smkrus.sch.id",
            telp: "081234567890",
            niy: "02221",
            materi: "produktif",
            alamat: "Prambatan Kidul, RT.05 RW.01, Kaliwungu, Kudus",
            mengampu: "Pemrograman Dasar",
            kode: "KG1",
            // mengambil kelas jurusan angkatan dari valueDataKelas dengan id 1, 3, 5 menggunakan huruf besar
            kelas: valueDataKelas.filter((item) => item.id === 1 || item.id === 3 || item.id === 5 || item.id === 6).map((item) => item.kelas.toUpperCase() + " " + item.jurusan.toUpperCase() + " " + item.tingkatan),
        },
        {
            id: 2,
            imgProfile: foto2,
            name: "Kris Sutarno, S.Sn",
            email: "krissutarno@smkrus.sch.id",
            telp: "081234567890",
            niy: '02222',
            materi: "produktif",
            alamat: "Prambatan Kidul, RT.05 RW.01, Kaliwungu, Kudus",
        },
        {
            id: 3,
            imgProfile: foto3,
            name: "Paimin, S.Kom",
            email: "paimin@smkrus.sch.id",
            telp: "081234567890",
            niy: '02223',
            materi: "produktif",
            alamat: "Prambatan Kidul, RT.05 RW.01, Kaliwungu, Kudus",
        },
        {
            id: 4,
            imgProfile: foto4,
            name: "Melani Sumini, S.Sn",
            email: "melanisumini@smkrus.sch.id",
            telp: "081234567890",
            niy: '02224',
            materi: "BK",
            alamat: "Prambatan Kidul, RT.05 RW.01, Kaliwungu, Kudus",
        },
        {
            id: 5,
            imgProfile: foto5,
            name: "Edi, S.Pd.I",
            email: "edi@smkrus.sch.id",
            telp: "081234567890",
            niy: '02225',
            materi: "normadaf",
            alamat: "Prambatan Kidul, RT.05 RW.01, Kaliwungu, Kudus",
        },
        {
            id: 6,
            imgProfile: foto6,
            name: "Jumanji, S.Pd.I",
            email: "jumanji@smkrus.sch.id",
            telp: "081234567890",
            niy: '02226',
            materi: "normadaf",
            alamat: "Prambatan Kidul, RT.05 RW.01, Kaliwungu, Kudus",
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
    const [filteredData, setFilteredData] = useState({dataTabelGuru});
    
    const renderData = filteredData.length > 0 ? filteredData : dataTabelGuru;
    const dataNotFound = filteredData.length === 0;

    useEffect(() => {
        handleSearch();
    }, [searchQuery]);
    

    const handleSearch = (e) => {
        // e.preventDefault();
        const filteredData = dataTabelGuru.filter((value) => {
            return (
                value.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                value.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                value.niy.toLowerCase().includes(searchQuery.toLowerCase()) ||
                value.materi.toLowerCase().includes(searchQuery.toLowerCase())
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
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/admin/berandaadmin')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li className='active' onClick={() => navigate('/admin/pageguru')} >
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
                <li onClick={() => navigate('/admin/pageassets')}>
                    <Icon icon="ic:outline-file-copy" width="20" />
                    Assets
                </li>
            </ul>
            </aside>
            <div className='container-content'>
                <Navigation text={navText}/>
                <main className='main'>
                <div className='header-guru'>
                        <div className='header-guru-left'>
                            <button className='btn-add-guru'  onClick={() => navigate('/admin/pageguru/formaddguru')}>
                                <Icon icon="ic:round-plus" width="20"></Icon>
                                <p>Tambah Data</p>  
                            </button>

                            <select id='guru' name='guru'>
                                <option value="semua" selected>-- Semua Guru --</option>
                                <option value="produktif">Guru Produktif</option>
                                <option value="nonproduktif">Guru Nonproduktif</option>
                                <option value="bk">Guru BK</option>f
                            </select>

                            <form className='search-box' onSubmit={handleSearch}>
                                <input type='text' placeholder='Cari...' value={searchQuery} onChange={handleChange} />
                                <button type='submit'>
                                <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                </button>
                            </form>
                        </div>
                        <div className='header-guru-right'>
                            <p className='detail-jumlah-guru'><span>{dataTabelGuru.length}</span> Guru</p>
                        </div>
                    </div>
                    
                    {dataNotFound ? (
                        <div className='dataNotFound'>
                            <h2>Data Tidak Ditemukan</h2>
                        </div>
                    ) : (
                    <div className='container-table'>
                        <table className="content-table-guru">
                            <thead>
                                <tr>
                                    <th>Foto</th>
                                    <th>Nama</th>
                                    <th>Email</th>
                                    <th>NIY</th>
                                    <th>Pengampu</th>
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
                                    <td>{data.niy}</td>
                                    <td>
                                        <div className='pengampu'>{data.materi}</div>
                                    </td>
                                    <td>
                                        <img src={iconaksi} alt='' onClick={() => handleToggle(index)} />
                                        <div
                                        id='popup-menu-guruAdmin'
                                        className={`popup-menu-guruAdmin ${selected === index && active ? 'active' : ''}`}
                                        >
                                        <ul>
                                            <li>
                                                <a onClick={showDetailPopup}>Detail</a>
                                            </li>
                                            <li>
                                                <a href='#'>Edit</a>
                                            </li>
                                            <li>
                                                <a onClick={showDeletePopup}>Hapus</a>
                                            </li>
                                            <li> <a onClick={showKodePopup}>Tambah Kode</a>
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
            
            <div className="popup-detailGuru">
                <div className="detail-popup-detailGuru">
                    <div className="navbar-detail-detailGuru">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeDetailPopup}/>
                        <h2>"nama"</h2>
                        <div className='divKosong'></div>
                    </div>
                    <div className="con-popup-detailGuru">
                        {dataTabelGuru.slice(0, 1).map((data) => (
                        <div className="content-detail-detailGuru">
                            <div className="img-detailGuru">
                                <img src={ImgDetail} alt="" className="image-detailGuru"/>
                            </div>
                            <h3>Nama :</h3>
                            <p className="nama-detailGuru">{data.name}</p>
                            <h3>Email :</h3>
                            <p className="email-detailGuru">{data.email}</p>
                            <h3>Nomor Telp :</h3>
                            <p className="nomor-detailGuru">{data.telp}</p>
                            <h3>NIY :</h3>
                            <p className="niy-detailGuru">{data.niy}</p>
                            <h3>Alamat :</h3>
                            <p className="alamat-detailGuru">{data.alamat}</p>
                            <h3>Mengajar :</h3>
                            <div className="con-mengajar-detailGuru">
                                <p className="mengajar-detailGuru">{data.mengampu}</p>
                            </div>
                            {/* <p className="mengajar-detailGuru">{data.mengampu}</p> */}
                            <h3>Kode :</h3>
                            <div className="con-kode-detailGuru">
                                <p className="kode-detailGuru">{data.kode}</p>
                            </div>
                            {/* <p className="kode-detailGuru">{data.kode}</p> */}
                            <h3>Mengajar Kelas :</h3>
                            <div className='con-mengajarkelas-detailGuru'>
                                {/* mengambil data kelas berupa loop */}
                                {data.kelas.map((data) => (
                                    <p className="mengajarKelas-detailGuru">{data}</p>
                                ))}
                            </div>
                            {/* <p className="mengajarKelas-detailGuru">{data.kelas}</p> */}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="popup-detailGuru" id="popup-detailGuru">
                <div className="detail-detailGuru">
                    <div className="navbar-detail-detailGuru">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeDetailPopup}/>
                        <h2>"nama"</h2>
                        <div className='divKosong'></div>
                    </div>
                    {dataTabelGuru.slice(0, 1).map((data) => (
                    <div className="content-detail-detailGuru">
                        <div className="img-detailGuru">
                            <img src={ImgDetail} alt="" className="image-detailGuru"/>
                        </div>
                        <h3>Nama :</h3>
                        <p className="nama-detailGuru">{data.name}</p>
                        <h3>Email :</h3>
                        <p className="email-detailGuru">{data.email}</p>
                        <h3>Nomor Telp :</h3>
                        <p className="nomor-detailGuru">{data.telp}</p>
                        <h3>NIY :</h3>
                        <p className="niy-detailGuru">{data.niy}</p>
                        <h3>Alamat :</h3>
                        <p className="alamat-detailGuru">{data.alamat}</p>
                        <h3>Mengajar :</h3>
                        <p className="mengajar-detailGuru">{data.mengampu}</p>
                        <h3>Kode :</h3>
                        <p className="kode-detailGuru">{data.kode}</p>
                        <h3>Mengajar Kelas :</h3>
                        <p className="mengajarKelas-detailGuru">{data.kelas}</p>
                    </div>
                    ))}
                </div>
            </div> */}

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

            <div className="popup-Delete" id="popup-Delete">
                <div className="detail-Delete">
                    <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeDeletePopup}/>
                    <div className="image-Delete">
                        <img src={ImgDelete} alt="" className="img-Delete" />
                    </div>
                    <p className="desc-Delete">Anda yakin ingin menghapus?</p>
                    <div className="con-btn-Delete">
                        <button type="button" className="btn-batal">Batal</button>
                        <button type="button" className="btn-delete">Hapus</button>
                    </div>
                </div>
            </div>

            <div className="popup-Kode" id="popup-Kode">
                <form action='' className="detail-Kode">
                    <div className="navbar-detail-Kode">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeKodePopup}/>
                        <h2>Tambah Kode Guru</h2>
                        <div className='divKosong'></div>
                    </div>
                    <p className="judul-form">Nama Guru</p>
                    <input type="text" id="" value="" disabled readonly className="inputGuru"/>
                    <p className="judul-form">Kode Guru</p>
                    <input type="text" value={inputKodeGuru} onChange={(e) => setInputKodeGuru(e.target.value)} id="inputKode" className="inputGuru"/>
                    <p className="judul-form">Mata Pelajaran</p>
                    <input type="text" id="inputMapel" className="inputGuru"/>

                    <button type="submit" className="btn-sumbitKode">Tambah</button>
                </form>
            </div>

            <div className="popup-forget" id="popup-forget">
                <form action="" className="detail-forget-password">
                    <div className="navbar-detail-forget">
                        <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} onClick={closeForgetPopupAndClearInput}/>
                        <h2>Ganti Password</h2>
                        <div className='divKosong'></div>
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

                    <button type='submit' className="btn-simpan">Simpan sandi baru</button>
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

export default BerandaGuru;