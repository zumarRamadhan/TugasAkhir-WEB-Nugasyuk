import '../cssAll/guru/PageKbmGuru.css';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import NavbarGuru from '../component/NavbarGuru';


function PageKbm(){
    const navText = "KBM";
    const navigate = useNavigate();

    return(
        <div>
            <aside>
            <h1 className="title-form-login" onClick={() => navigate('/guru/berandaguru')}>
                <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
                nugasyuk
            </h1>
            <ul>
                <li onClick={() => navigate('/guru/berandaguru')}>
                    <Icon icon="iconoir:home-simple" width="20" />
                    Beranda
                </li>
                <li className='active' onClick={() => navigate('/guru/pagekbm')} >
                    <Icon icon="ph:chalkboard-teacher" width="20" />
                    KBM
                </li>
                <li onClick={() => navigate('/guru/pagepengumpulan')}>
                    <Icon icon="uiw:date" width="18"/>
                    Pengumpulan
                </li>
                <li onClick={() => navigate('/guru/pagejadwalkbm')}>
                    <Icon icon="fluent-mdl2:education" width="18"/>
                    Jadwal KBM
                </li>
            </ul>
            </aside>
            <div className="container-content">
                <NavbarGuru text={navText}/>
                    <div className="main">
                        <div className='header-guru'>
                            <div className='header-guru-left'>
                                <select id='kelas' name='kelas'>
                                    <option value="semua" selected>-- Semua Kelas --</option>
                                    <option value="jurusan">11 PPLG 1</option>
                                    <option value="jurusan">11 PPLG 2</option>
                                    <option value="jurusan">11 ANIM 1</option>
                                    <option value="jurusan">11 ANIM 2</option>
                                    <option value="jurusan">11 DKV 1</option>
                                    <option value="jurusan">11 DKV 2</option>
                                </select>

                                <form className='search-box'>
                                    <input type='text' placeholder='Cari...'/>
                                    <button type='submit'>
                                        <Icon icon="material-symbols:search-rounded" width="20"></Icon>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default PageKbm