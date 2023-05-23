import '../cssAll/admin/DataGuru.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
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

function BerandaGuru() {
    const navText = "Data Guru";
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

                            <form className='search-box'>
                                <input type='text' placeholder='Cari...'/>
                                <button type='submit'>
                                    <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                </button>
                            </form>
                        </div>
                        <div className='header-guru-right'>
                            <p className='detail-jumlah-guru'><span>30</span> Guru</p>
                        </div>
                    </div>
                    
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
                        <tr>
                            <td><img src={foto} alt="" /></td>
                            <td>Karma Gia, S.Kom</td>
                            <td>karmangia@smkrus.sch.id</td>
                            <td>02221</td>
                            <td>
                                <div className='pangampu'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto2} alt="" /></td>
                            <td>Kris Sutarno, S.Sn</td>
                            <td>krissutarno@smkrus.sch.id</td>
                            <td>02222</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto3} alt="" /></td>
                            <td>Paimin, S.Kom</td>
                            <td>paimin@smkrus.sch.id</td>
                            <td>02223</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto4} alt="" /></td>
                            <td>Melani Sumini, S.Sn</td>
                            <td>melanisumini@smkrus.sch.id</td>
                            <td>02224</td>
                            <td>
                                <div className='pangampu1'>BK</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto5} alt="" /></td>
                            <td>Edi, S.Pd.I</td>
                            <td>edi@smkrus.sch.id</td>
                            <td>02225</td>
                            <td>
                                <div className='pangampu1'>Normadaf</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto6} alt="" /></td>
                            <td>Jumanji, S.Pd.I</td>
                            <td>jumanji@smkrus.sch.id</td>
                            <td>02226</td>
                            <td>
                                <div className='pangampu1'>Normadaf</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto7} alt="" /></td>
                            <td>Kris Sutarno, S.Sn</td>
                            <td>krissutarno@smkrus.sch.id</td>
                            <td>02222</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto} alt="" /></td>
                            <td>Kris Sutarno, S.Sn</td>
                            <td>krissutarno@smkrus.sch.id</td>
                            <td>02222</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto} alt="" /></td>
                            <td>Kris Sutarno, S.Sn</td>
                            <td>krissutarno@smkrus.sch.id</td>
                            <td>02222</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto} alt="" /></td>
                            <td>Kris Sutarno, S.Sn</td>
                            <td>krissutarno@smkrus.sch.id</td>
                            <td>02222</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto} alt="" /></td>
                            <td>Kris Sutarno, S.Sn</td>
                            <td>krissutarno@smkrus.sch.id</td>
                            <td>02222</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                        <tr>
                            <td><img src={foto} alt="" /></td>
                            <td>Kris Sutarno, S.Sn</td>
                            <td>krissutarno@smkrus.sch.id</td>
                            <td>02222</td>
                            <td>
                                <div className='pangampu1'>Produktif</div>
                            </td>
                            <td><img src={iconaksi} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
                </div>
              

                    {/* <div className='header-guru'>
                        <div className='header-guru-left'>
                            <button className='btn-add-guru'>
                                <Icon icon="ic:round-plus" width="20"></Icon>
                                <p>Tambah Data</p>
                            </button>

                            <select id='guru' name='guru'>
                                <option value="semua" selected>-- Semua Guru --</option>
                                <option value="produktif">Guru Produktif</option>
                                <option value="nonproduktif">Guru Nonproduktif</option>
                                <option value="bk">Guru BK</option>f
                            </select>

                            <form className='search-box'>
                                <input type='text' placeholder='Cari...'/>
                                <button type='submit'>
                                    <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                </button>
                            </form>
                        </div>
                        <div className='header-guru-right'>
                            <p className='detail-jumlah-guru'><span>30</span> Guru</p>
                        </div>
                    </div>

                    <div className='container-guru'>
                        <div className='card-content-guru'>
                            <div className='card-content-guru-left'>
                                <div className='img-profile-guru'>
                                    <img src={Karman} alt='' className='image-profile-guru'/>
                                </div>
                                <div className='detail-card-guru'>
                                    <p className='nama-guru'>Karman Gia, S.Kom</p>
                                    <p className='email-guru'>karmangia@smkrus.sch.id</p>
                                    <div className='jurusan-guru'>Produktif</div>
                                </div>
                            </div>
                            <div className='tests'>
                                <div className='card-content-guru-right'>
                                    <button id='popup-button' type='submit'><Icon icon="mi:options-vertical" width="40" color="#2A93D5"/></button>
                                </div>
                                <div id='popup-menu' className='popup-menu'>
                                    <ul>
                                        <li><a href="#" id="detail-guru">Detail</a></li>
                                        <li><a href="#" id="edit-guru">Edit</a></li>
                                        <li><a href="#" id="hapus-guru">Hapus</a></li>
                                        <li><a href="#" id="tambah-guru">Tambah Code</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-guru'>
                        <div className='card-content-guru'>
                            <div className='card-content-guru-left'>
                                <div className='img-profile-guru'>
                                    <img src={Sapari} alt='' className='image-profile-guru'/>
                                </div>
                                <div className='detail-card-guru'>
                                    <p className='nama-guru'>Sapari Kurnia, S.Kom</p>
                                    <p className='email-guru'>saparikunia@smkrus.sch.id</p>
                                    <div className='jurusan-guru'>Produktif</div>
                                </div>
                            </div>
                            <div className='tests'>
                                <div className='card-content-guru-right'>
                                    <button id='popup-button' type='submit'><Icon icon="mi:options-vertical" width="35" color="#2A93D5"/></button>
                                </div>
                                <div id='popup-menu' className='popup-menu'>
                                    <ul>
                                        <li><a href="#" id="detail-guru">Detail</a></li>
                                        <li><a href="#" id="edit-guru">Edit</a></li>
                                        <li><a href="#" id="hapus-guru">Hapus</a></li>
                                        <li><a href="#" id="tambah-guru">Tambah Code</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
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

export default BerandaGuru;