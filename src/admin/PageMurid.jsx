import '../cssAll/DataMurid.css'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import Kalam from "../assets/murid-kalam.png";
import Wira from "../assets/murid-wira.svg";
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import { useNavigate, Link } from 'react-router-dom';
import ImgProfil from '../assets/img-profil.svg';

function DataMurid(){
    const navText = "Data Murid";
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
                            <button className='btn-add-murid'>
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

                            <form className='search-box'>
                                <input type='text' placeholder='Cari...'/>
                                <button type='submit'>
                                    <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                </button>
                            </form>
                        </div>
                        <div className='header-murid-right'>
                            <p className='detail-jumlah-murid'><span>1000</span> Murid</p>
                        </div>
                    </div>

                    <div className='container-murid'>
                        <div className='card-content-murid'>
                            <div className='card-content-murid-left'>
                                <div className='img-profile-murid'>
                                    <img src={Wira} alt='' className='image-profile-murid'/>
                                </div>
                                <div className='detail-card-murid'>
                                    <p className='nama-murid'>Ahmad Aziz Wira Widodo</p>
                                    <p className='email-murid'>ahmadaziz@smkrus.sch.id</p>
                                    <div className='jurusan-murid'>PPLG</div>
                                </div>
                            </div>
                            <div className='btn-action'>
                                <div className='card-content-guru-right'>
                                    <button id='popup-button' type='submit'><Icon icon="mi:options-vertical" width="40" color="#2A93D5"/></button>
                                </div>
                                <div id='popup-menu' className='popup-menu'>
                                    <ul>
                                        <li><a href="#" id="detail-murid">Detail</a></li>
                                        <li><a href="#" id="edit-murid">Edit</a></li>
                                        <li><a href="#" id="hapus-murid">Hapus</a></li>
                                        <li><a href="#" id="tambah-murid">Tambah Code</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-murid'>
                        <div className='card-content-murid'>
                            <div className='card-content-murid-left'>
                                <div className='img-profile-murid'>
                                    <img src={Kalam} alt='' className='image-profile-murid'/>
                                </div>
                                <div className='detail-card-murid'>
                                    <p className='nama-murid'>Khoiru Rizal Kalam ISmail</p>
                                    <p className='email-murid'>khoirurizal@smkrus.sch.id</p>
                                    <div className='jurusan-murid'>PPLG</div>
                                </div>
                            </div>
                            <div className='tests'>
                                <div className='card-content-murid-right'>
                                    <button id='popup-button' type='submit'><Icon icon="mi:options-vertical" width="35" color="#2A93D5"/></button>
                                </div>
                                <div id='popup-menu' className='popup-menu'>
                                    <ul>
                                        <li><a href="#" id="detail-murid">Detail</a></li>
                                        <li><a href="#" id="edit-murid">Edit</a></li>
                                        <li><a href="#" id="hapus-murid">Hapus</a></li>
                                        <li><a href="#" id="tambah-murid">Tambah Code</a></li>
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

export default DataMurid;