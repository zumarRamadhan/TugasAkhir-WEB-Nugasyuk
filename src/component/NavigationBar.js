// import '../component/Component.css';
import ImgProfil from '../assets/img-profil.svg';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
// import '../admin/main.js';

function Navigation(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showDetail = () => {
    // alert("Halloooo, kali ini saya sedang ngetess");
    // document.querySelector('');
    // detailProfile.style.transform = 'translateX(0px)';
  }

  function closeDetail() {
    // document.querySelector('.detail-profile');
    // detailProfile.style.transform = 'translateX(100%)';
  }


  return (
    <div>
      <nav>
        <div className="navbar">
          <h1>{props.text}</h1>
          <div className="img-profile" style={{ cursor: "pointer" }}>
            <img src={ImgProfil} alt="img-profile" onClick={handleShow} />
          </div>
        </div>
      </nav>
      <div className="detail-profile" show={show} onHide={handleClose}>
        <div>
            <div className="navbar-detail">
            <Icon icon="radix-icons:cross-circled" width="30" style={{cursor: "pointer"}} />
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

// function DetailProfile(){

//   return(
    
//   );
// }

export default Navigation;