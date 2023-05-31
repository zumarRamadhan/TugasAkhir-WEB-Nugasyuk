import './PageLoading.css';
import React, { useState, useEffect, props } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import greenLoginIcon from '../assets/73782-education.gif';
import userIcon from '../assets/user-icon.svg';
import IconNugasyuk from '../assets/IconNugasyuk.svg';
import passIcon from '../assets/pass-icon.svg';
import mataIcon from '../assets/icon-mata.svg';
import axios from 'axios';

function LoadingPage (){
  return ( 
    <div>
      <div className="loading">
        <p>Tunggu Sebentar Ges...</p>
      </div>
    </div>
  );
}

export default LoadingPage;