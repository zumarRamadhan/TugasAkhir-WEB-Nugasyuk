import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarBK from '../component/NavbarBK';

function PageChat(){
    const navText = "Chat";
    const navigate = useNavigate();

    return(
        <div>
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/guru/berandaguru')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/bk/berandabk')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li onClick={() => navigate('/bk/janjikonseling')} >
                    <Icon icon="uiw:date" width="18"/>
                    Janji Konseling
                </li>
                <li className='active' onClick={() => navigate('/bk/chat')}>
                    <Icon icon="ph:chat-circle-dots" width="18"/>
                    Chat
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarBK text={navText}/>
          </div>
        </div>
    );
}

export default PageChat