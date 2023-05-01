// import { Icon } from 'react-icons';
import { Icon } from '@iconify/react';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import '../component/Component.css';
import BerandaGuru from '../admin/DataGuru';
import BerandaAdmin from '../admin/BerandaAdmin';
import React, { useState } from "react";
// import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Sidebar() {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  function handleClick(index) {
    setActiveItem(index);
  }

  return (
    <aside>
      <h1 className="title-form-login" onClick={() => navigate('/berandaadmin')}>
        <img src={IconNugasyuk} alt="" className="icon-nugasyuk"/>
        nugasyuk
      </h1>
      <ul>
        <li className={activeItem === 0 ? "active" : ""} onClick={() => handleClick(0)}>
          <Icon icon="iconoir:home-simple" width="20" />
          Beranda
        </li>
        <li className={activeItem === 1 ? "active" : ""} onClick={() => handleClick(1)} >
          <Icon icon="la:chalkboard-teacher" width="20" />
          Guru
        </li>
        <li className={activeItem === 2 ? "active" : ""} onClick={() => handleClick(2)}>
          <Icon icon="ph:student" width="20" />
          Murid
        </li>
        <li className={activeItem === 3 ? "active" : ""} onClick={() => handleClick(3)}>
          <Icon icon="fluent:class-24-regular" width="20" />
          Kelas
        </li>
        <li className={activeItem === 4 ? "active" : ""} onClick={() => handleClick(4)}>
          <Icon icon="fluent-mdl2:education" width="20" />
          Mata Pelajaran
        </li>
        <li className={activeItem === 5 ? "active" : ""} onClick={() => handleClick(5)}>
          <Icon icon="uiw:date" width="20" />
          Jadwal KBM
        </li>
        <li className={activeItem === 6 ? "active" : ""} onClick={() => handleClick(6)}>
          <Icon icon="ic:outline-file-copy" width="20" />
          Assets
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;