import '../cssAll/DataGuru.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import Karman from '../assets/guru-karman.svg';
import Sapari from '../assets/guru-sapari.svg';


function BerandaGuru() {
    const navText = "Data Guru";

    // const PopupMenu =() => {
    //     const [isMenuOpen, setIsMenuOpen] = useState(false);

    //     const toggleMenu = () => {
    //         setIsMenuOpen(!isMenuOpen);
    //     }
    // }

    return(
        <div>
            <Sidebar/>
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
                                <option value="semua" selected>Semua guru</option>
                                <option value="produktif">Guru produktif</option>
                                <option value="nonproduktif">Guru nonproduktif</option>
                                <option value="bk">Guru BK</option>
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
        </div>
    );
}

export default BerandaGuru;