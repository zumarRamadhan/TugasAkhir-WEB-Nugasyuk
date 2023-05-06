import '../cssAll/bk/BerandaBk.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarBK from '../component/NavbarBK';

function BerandaBk(){
    const navText = "Beranda";
    const navigate = useNavigate();

    return(
        <div>
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/bk/berandabk')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li className='active' onClick={() => navigate('/bk/berandabk')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/bk/janjikonseling')} >
                    <Icon icon="uiw:date" width="18"/>
                    Janji Konseling
                </li>
                <li onClick={() => navigate('/bk/chat')}>
                    <Icon icon="ph:chat-circle-dots" width="18"/>
                    Chat
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarBK text={navText}/>
              <main className='main'>
                <div className="header-dashboard">
                    <div className="head-left">
                    <h1 className="intro-head">
                        Halo <span className="name-admin">Sumijah, S.Pd</span>
                    </h1>
                    <p className="desc-head" style={{width:"550px"}}>
                        Selamat datang di nugasyuk, anda bisa memonitoring siswa, memberikan materi dan tugas.
                    </p>
                    </div>
                    <div className="head-right">
                    <div className="kotak1"></div>
                    </div>
                </div>

                <div className="con-content-bk">
                    <div className="content-indiecator" style={{ background: "#FA79A2" }}>
                    <div className="icon-indie" style={{ color: "#FA79A2" }}>
                        <Icon icon="uiw:date" width="40"/>
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Janji Konseling Dengan Murid</p>
                        <p className="value-indie">
                        <span>3</span> Janji Konseling
                        </p>
                    </div>
                    </div>
                    <div className="content-indiecator" style={{ background: "#C762F7" }}>
                    <div className="icon-indie" style={{ color: "#C762F7" }}>
                        <Icon icon="ph:chat-circle-dots" width="40"/>
                    </div>
                    <div className="desc-indie">
                        <p className="title-indie">Chat Murid Belum Terbalas</p>
                        <p className="value-indie">
                        <span>3</span> Chat
                        </p>
                    </div>
                    </div>
                </div>
            </main>
          </div>
        </div>
    );
}

export default BerandaBk