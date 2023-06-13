import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../cssAll/murid/JadwalKbm.css";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import imgCardKbm from "../assets/guru-karman.svg";
import { useState, useEffect } from "react";
import ProfileSiswa from '../component/ProfileSiswa';
import NotifSiswa from "../component/NotifSiswa";
import axios from "axios";

function JadwalKBM() {
  const navigate = useNavigate();
  const [detailJadwal, setDetailJadwal] = useState([]);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeNew, setPasswordTypeNew] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
  const [selectedKbmId, setSelectedKbmId] = useState(null);

  const closeDetailKbm = () => {
    const popupLogout = document.querySelector(".popup-kbm");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showDetailKbm = (id) => {
    setSelectedKbmId(id);
    console.log("ID:", id);
    const popupForget = document.querySelector(".popup-kbm");
    popupForget.style.display = "flex";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";

    axios
      .get("https://www.nugasyuk.my.id/api/murid/jadwal/" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        setDetailJadwal(result.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  };

  const saveToken = sessionStorage.getItem("token");

  // const [dataJadwal, setDataJadwal] = useState([]);
  const [dataAPIJadwal, setDataAPIJadwal] = useState([]);

  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/murid/jadwal", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        setDataAPIJadwal(result.data.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  } else if (dataAPIJadwal && !isError)
    return (
      <div>
        <aside>
          <h1
            className="title-form-login"
            onClick={() => navigate("/murid/berandamurid")}
          >
            <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
            nugasyuk
          </h1>
          <ul>
            <li onClick={() => navigate("/murid/berandamurid")}>
              <Icon icon="iconoir:home-simple" width="20" />
              Beranda
            </li>
            <li onClick={() => navigate("/murid/pagetugas")}>
              <Icon
                icon="fluent:clipboard-bullet-list-rtl-20-regular"
                width="25"
              />
              Tugas
            </li>
            <li className="active" onClick={() => navigate("/murid/pagekbm")}>
              <Icon icon="uiw:date" width="18" />
              Jadwal KBM
            </li>
            <li onClick={() => navigate("/murid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
            <li onClick={() => navigate("/murid/pagekonseling")}>
              <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
              Konseling
            </li>
          </ul>
        </aside>
        <div className="container-content">
          <NavbarMurid textNavigasi={"Jadwal KBM 11 PPLG 1"} />
          <div className="main">
            <div className="content-jadwalKBM">
              <div className="con-card-jadwalKBM">
                {dataAPIJadwal.map((listJadwal) => (
                  <div className="cardJadwalKbm" key={listJadwal.id}>
                    <div className="titleJadwalKbm">
                      <p>Jadwal KBM</p>
                      <h1>{listJadwal.hari}</h1>
                    </div>
                    <div className="bottomjadwalKbm">
                      <div className="conImgGuru-Kbm">
                        {detailJadwal.data?.map((items) => (
                        <div className="imgGuru-Kbm">
                          <img src={`https://www.nugasyuk.my.id/public/${items.foto_profile}`} alt="" className="imageGuru-Kbm" />
                        </div>
                        ))}
                      </div>
                      <div className="btnDetail-Kbm">
                        <Icon
                          icon="ic:round-navigate-next"
                          width="30"
                          className="iconDetail-Kbm"
                          onClick={() => showDetailKbm(listJadwal.id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="popup-kbm"
          style={{ display: selectedKbmId ? "flex" : "none" }}
        >
          <div className="detail-popup-kbm">
            <div className="nav-popup-kbm">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer", color: "#4b4b4b" }}
                className="btn-close"
                onClick={closeDetailKbm}
              />
              <h2 className="day-schedule">{detailJadwal.hari}</h2>
            </div>
            <div className="con-popup-kbm">
              {detailJadwal.data?.map((jadwalDetail) => (
                <div className="popup-card-kbm">
                  <div className="test1">
                    <img src={`https://www.nugasyuk.my.id/public/${jadwalDetail.foto_profile}`} alt="" className="image-card-kbm" />
                    <div className="mapel-card-kbm">
                      <p>{jadwalDetail.nama_mapel}</p>
                      <p className="guruPengampu">{jadwalDetail.nama_guru}</p>
                    </div>
                  </div>
                  <div className="test2">
                    <div className="jamMengajar">
                      <span>{jadwalDetail.waktu_mulai}</span> -{" "}
                      <span>{jadwalDetail.waktu_selesai}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ProfileSiswa/>

        <NotifSiswa/>
      </div>
    );
}

export default JadwalKBM;
