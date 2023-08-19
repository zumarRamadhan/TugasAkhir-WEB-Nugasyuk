import axios from "axios";
import "../App.css";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import apiurl from "../api/api";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function NavbarWaliMurid(props) {
  const showDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(0px)";
  };

  const showNotif = () => {
    const detailNotification = document.querySelector(".detail-notif");
    detailNotification.style.transform = "translateX(0px)";
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const { navigasiOrtu } = props;

  const saveToken = sessionStorage.getItem("token");

  const [dataProfileOrtu, setDataProfileOrtu] = useState([]);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    axios
      .get(`${apiurl}ortu/profile`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataProfileOrtu(responseAPI.data);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
      });
  }, []);

  return (
    <div>
      <nav>
        <div className="navbar">
          <h1>{navigasiOrtu}</h1>
          <div className="nav-right">
            {dataProfileOrtu.map((ortuProfile) => (
              <div className="img-profile" style={{ cursor: "pointer" }}>
                <img
                  src={`https://wondrous-squirrel-blatantly.ngrok-free.app/${ortuProfile.foto_profile || <Skeleton circle/>}`}
                  alt={ortuProfile.foto_profile}
                  onClick={showDetail}
                  style={{objectFit: "cover", objectPosition: "25% 25%"}}
                />
              </div>
            ))}
            <div
              className="btn-notification"
              style={{ cursor: "pointer" }}
              onClick={showNotif}
            >
              <Icon icon="mdi:bell-notification-outline" width="24" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarWaliMurid;
