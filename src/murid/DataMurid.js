import '../cssAll/DataMurid.css'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Sidebar from "../component/Sidebar";
import Navigation from "../component/NavigationBar";
import Kalam from "../assets/murid-kalam.png";
import Wira from "../assets/murid-wira.svg";

function DataMurid(){
    const navText = "Data Murid";

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Sidebar/>
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
                                <option value="semua" selected>Semua Jurusan</option>
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
                                    <button id='popup-button' type='submit' onClick={handleShow}><Icon icon="mi:options-vertical" width="40" color="#2A93D5"/></button>
                                </div>
                                <div id='popup-menu' className='popup-menu' show={show} onHide={handleClose}>
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
        </div>
    );
}

export default DataMurid;