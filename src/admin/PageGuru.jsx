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

function BerandaGuru() {
    const navText = "Data Guru";
    const navigate = useNavigate();

    const closeDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(350px)';
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
                    </div>
                </main>
            </div>

            <div className="detail-profile">
                <div>
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
                    <button className="forget-password" id="btn-forget-pass">
                    <Icon icon="material-symbols:key-outline-rounded" width="30" />
                    <p>Ganti Password</p>
                    </button>
                    <button className="logout" id="btn-logout">
                    <Icon icon="material-symbols:logout-rounded" width="30" />
                    <p>Logout</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BerandaGuru;