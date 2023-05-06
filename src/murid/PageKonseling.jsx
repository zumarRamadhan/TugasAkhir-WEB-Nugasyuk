import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarMurid from '../component/NavbarMurid';
import ImgHubBk from '../assets/img-chatbk.svg';

function PageKonseling(){
    const navText = "Bimbingan Konseling";
    const navigate = useNavigate();

    return(
        <div>
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/murid/berandamurid')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/murid/berandamurid')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/murid/pagetugas')} >
                    <Icon icon="fluent:clipboard-bullet-list-rtl-20-regular" width="25" />
                    Tugas
                </li>
                <li onClick={() => navigate('/murid/pagekbm')}>
                    <Icon icon="uiw:date" width="18"/>
                    Jadwal KBM
                </li>
                <li onClick={() => navigate('/murid/pagemapel')}>
                    <Icon icon="fluent-mdl2:education" width="18"/>
                    Mata Pelajaran
                </li>
                <li className='active' onClick={() => navigate('/murid/pagekonseling')}>
                    <Icon icon="ph:apple-podcasts-logo-duotone" width="18"/>
                    Konseling
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarMurid text={navText}/>
                <div className="main">
                    <div className="content-konseling">
                        <div className="header-konseling">
                            <div className="head-left">
                                <h1 className="intro-head-konseling">Halo <span className="name-murid">Wira</span></h1>
                                <p className="desc-head-konseling" style={{width:"550px"}}>
                                    Apakah anda ingin bimbingan konseling atau ada hal yang ingin ditanyakan kepada guru BK?
                                </p>
                            </div>
                        </div>
                        <div className="card-hubungi-bk">
                            <div className="head-left">
                                <p className="desc-head-hubungi-bk" style={{width:"350px"}}>
                                    Jika ada yang ingin ditanyakan kepada guru BK melalui chat
                                </p>
                                <div className="img-hubungi-bk">
                                    <img src={ImgHubBk} alt="" />
                                </div>
                                <button className='btn-hub-bk'>
                                    <Icon icon="ph:chat-circle-dots" width="20"/>
                                <p>Hubungi BK</p>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageKonseling