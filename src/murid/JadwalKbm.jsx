import { useNavigate, useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../cssAll/murid/JadwalKbm.css";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import imgCardKbm from "../assets/guru-karman.svg";
import ImgBinggris from "../assets/img-binggris.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function JadwalKBM() {
  const navigate = useNavigate();

  const closeDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(350px)";
  };

  const closeDetailNotif = () => {
    const detailProfile = document.querySelector(".detail-notif");
    detailProfile.style.transform = "translateX(350px)";
  };

  const showLogoutPopup = () => {
    const popupLogout = document.querySelector("#popup-logout");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeLogoutPopup = () => {
    const popupLogout = document.querySelector("#popup-logout");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showForgetPopup = () => {
    const popupForget = document.querySelector("#popup-forget");
    popupForget.style.display = "flex";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeForgetPopupAndClearInput = () => {
    const popupForget = document.querySelector("#popup-forget");
    setTimeout(() => (popupForget.style.display = "none"), 250);
    popupForget.style.animation = "slide-up 0.3s ease-in-out";
    const clearpassword = document.querySelector(
      "#password",
      "#newPassword",
      "#confirmPassword"
    );
    clearpassword.value = "";
    const clearpasswordNew = document.querySelector("#newPassword");
    clearpasswordNew.value = "";
    const clearpasswordConfirm = document.querySelector("#confirmPassword");
    clearpasswordConfirm.value = "";
  };

  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeNew, setPasswordTypeNew] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
  const [selectedKbmId, setSelectedKbmId] = useState(null);

  function togglePasswordVisibility() {
    setPasswordType(passwordType === "password" ? "text" : "password");
  }

  function togglePasswordVisibilityNew() {
    setPasswordTypeNew(passwordTypeNew === "password" ? "text" : "password");
  }

  function togglePasswordVisibilityConfirm() {
    setPasswordTypeConfirm(
      passwordTypeConfirm === "password" ? "text" : "password"
    );
  }

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
                      <div className="imgGuru-Kbm">
                        <img src="" alt="" className="imageGuru-Kbm" />
                      </div>
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

        {/* <div className="popup-kbm">
          <div className="detail-popup-kbm">
            <div className="nav-popup-kbm">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer", color: "#4b4b4b" }}
                className="btn-close"
                onClick={closeDetailKbm}
              />
              <h2 className="day-schedule">Senin</h2>
            </div>
            <div className="con-popup-kbm">
              <div className="popup-card-kbm">
                <div className="test1">
                  <img src={ImgProfil} alt="" className="image-card-kbm" />
                  <div className="mapel-card-kbm">
                    <p>okeh</p>
                    <p className="guruPengampu">Joko Arianto</p>
                  </div>
                </div>
                <div className="test2">
                  <div className="jamMengajar">
                    <span>07.00</span>
                    <span>11.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="popup-kbm" style={{ display: selectedKbmId ? 'flex' : 'none' }}>
          <div className="detail-popup-kbm">
            <div className="nav-popup-kbm">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer", color: "#4b4b4b" }}
                className="btn-close"
                onClick={closeDetailKbm}
              />
              <h2 className="day-schedule">Senin</h2>
            </div>
            <div className="con-popup-kbm">
              <div className="popup-card-kbm">
                <div className="test1">
                  <img src={ImgProfil} alt="" className="image-card-kbm" />
                  <div className="mapel-card-kbm">
                    <p>okeh</p>
                    <p className="guruPengampu">Joko Arianto</p>
                  </div>
                </div>
                <div className="test2">
                  <div className="jamMengajar">
                    <span>07.00</span> - <span>11.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="popup-logout" id="popup-logout">
          <div className="detail-logout">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeLogoutPopup}
            />
            <div className="image-logout">
              <img src={ImgLogout} alt="" className="img-logout" />
            </div>
            <p className="desc-logout">Anda yakin ingin keluar?</p>
            <div className="con-btn-logout">
              <button type="button" className="btn-batal">
                Batal
              </button>
              <button type="button" className="btn-keluar">
                Keluar
              </button>
            </div>
          </div>
        </div>

        <div className="popup-forget" id="popup-forget">
          <form action="" className="detail-forget-password">
            <div className="navbar-detail-forget">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer" }}
                onClick={closeForgetPopupAndClearInput}
              />
              <h2>Ganti Password</h2>
            </div>
            <p className="judul-form">Sandi lama</p>
            <div className="con-form-password">
              <img src={passIcon} alt="" />
              <input
                type={passwordType}
                id="password"
                placeholder="*********"
                className="input-password"
              />
              <button
                type="button"
                className="btn-mata"
                onClick={togglePasswordVisibility}
              >
                <img src={mataIcon} alt="" />
              </button>
            </div>
            <p className="judul-form">Sandi baru</p>
            <div className="con-form-password">
              <img src={passIcon} alt="" />
              <input
                type={passwordTypeNew}
                id="newPassword"
                placeholder="*********"
                className="input-password"
              />
              <button
                type="button"
                className="btn-mata"
                onClick={togglePasswordVisibilityNew}
              >
                <img src={mataIcon} alt="" />
              </button>
            </div>
            <p className="judul-form">Konfirmasi sandi baru</p>
            <div className="con-form-password">
              <img src={passIcon} alt="" />
              <input
                type={passwordTypeConfirm}
                id="confirmPassword"
                placeholder="*********"
                className="input-password"
              />
              <button
                type="button"
                className="btn-mata"
                onClick={togglePasswordVisibilityConfirm}
              >
                <img src={mataIcon} alt="" />
              </button>
            </div>

            <button type="submit" className="btn-simpan">
              Simpan sandi baru
            </button>
          </form>
        </div>

        <div className="detail-profile">
          <div className="content-detail">
            <div className="navbar-detail">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer" }}
                onClick={closeDetail}
              />
              <h2>Profil</h2>
            </div>
            <div className="detail-image-profile">
              <img src={ImgProfil} alt="" className="detail-img-profile" />
            </div>
            <p className="judul-detail">Email</p>
            <p className="value-detail">zumarramadhan@smkrus.sch.id</p>
            <p className="judul-detail">Nama Pengguna</p>
            <p className="value-detail">Zumar</p>
            <p className="judul-detail">Nama</p>
            <p className="value-detail">Muhammad Zumar Ramadhan</p>
            <p className="judul-detail">Jurusan</p>
            <p className="value-detail">PPLG</p>
            <p className="judul-detail">Kelas</p>
            <p className="value-detail">11 PPLG 1</p>
            <p className="judul-detail">NIS</p>
            <p className="value-detail">04449</p>
          </div>
          <div className="con-btn-detail-profile">
            <button
              className="forget-password"
              id="btn-forget-pass"
              onClick={showForgetPopup}
            >
              <Icon icon="material-symbols:key-outline-rounded" width="30" />
              <p>Ganti Password</p>
            </button>
            <button
              className="logout"
              id="btn-logout"
              onClick={showLogoutPopup}
            >
              <Icon icon="material-symbols:logout-rounded" width="30" />
              <p>Logout</p>
            </button>
          </div>
        </div>

        <div className="detail-notif">
          <div className="content-detail-notif">
            <div className="navbar-detail-notif">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer", color: "#4b4b4b" }}
                onClick={closeDetailNotif}
              />
              <h2>Notifikasi</h2>
            </div>
            <p className="day">Hari Ini</p>
            <div className="notif">
              <div className="icon-notif">
                <Icon icon="tabler:clipboard-text" width="30" />
              </div>
              <div className="content-notif">
                <div className="name-notif">
                  <p>Application Letter</p>
                </div>
                <div className="teacher">
                  <p>Budiono, S.Pd</p>
                </div>
              </div>
            </div>
            <div className="notif">
              <div className="icon-notif">
                <Icon icon="tabler:clipboard-text" width="30" />
              </div>
              <div className="content-notif">
                <div className="name-notif">
                  <p>Sejarah Gojek</p>
                </div>
                <div className="teacher">
                  <p>Rini, S.Pd</p>
                </div>
              </div>
            </div>
            <div className="notif">
              <div className="icon-notif">
                <Icon icon="ri:book-line" width="30" />
              </div>
              <div className="content-notif">
                <div className="name-notif">
                  <p>Sejarah Gojek</p>
                </div>
                <div className="teacher">
                  <p>Rini, S.Pd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default JadwalKBM;
