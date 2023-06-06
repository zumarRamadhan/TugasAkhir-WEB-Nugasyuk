import "../cssAll/murid/BerandaMurid.css";
import { Icon } from "@iconify/react";
import { useNavigate, useHistory } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import AssetsHead from "../assets/assets-header.svg";
import GifHead from "../assets/119593-agenda.gif";
import React, { useEffect, useState } from "react";
import axios from "axios";

function BerandaMurid() {
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

  const saveToken = sessionStorage.getItem("token");

  const [dataBerandaMurid, setDataBerandaMurid] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.nugasyuk.my.id/api/murid/datamurid", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataBerandaMurid(responseAPI.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  else if (dataBerandaMurid && !isError)
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
            <li
              className="active"
              onClick={() => navigate("/murid/berandamurid")}
            >
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
            <li onClick={() => navigate("/murid/pagekbm")}>
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
          <NavbarMurid textNavigasi={"Beranda 11 PPLG 1"} />
          <main className="main">
            <div className="header-dashboard-home-student">
              <div className="head-left-home-student">
                <h1 className="intro-head-student">
                  Halo{" "}
                  <span className="student-name">{dataBerandaMurid.nama}</span>
                </h1>
                <p
                  className="desc-head-home-student"
                  style={{ width: "550px" }}
                >
                  Selamat datang di nugasyuk, anda bisa memonitoring tugas dan
                  materi yang diberikan oleh guru.
                </p>
              </div>
              <div className="head-right-home-student">
                <div className="reactangle-1">
                  <img src={AssetsHead} alt="" />
                  {/* <img className="gif-head" src={GifHead} alt="" /> */}
                </div>
              </div>
            </div>

            <div className="con-content">
              <div
                className="content-indiecator"
                style={{ background: "#2AB6D5", cursor: "pointer" }}
              >
                <div
                  className="icon-indie"
                  style={{ color: "#2AB6D5", background: "#fff" }}
                >
                  <Icon icon="mdi:account-group-outline" width="40" />
                </div>
                <div className="desc-indie">
                  <p className="title-indie">Jumlah Siswa</p>
                  <p className="value-indie">
                    <span>{dataBerandaMurid.jumlah_siswa}</span> Siswa
                  </p>
                </div>
              </div>

              <div
                className="content-indiecator"
                style={{ background: "#585CC4", cursor: "pointer" }}
              >
                <div
                  className="icon-indie"
                  style={{ color: "#585CC4", background: "#fff" }}
                >
                  <Icon icon="fluent-mdl2:education" width="40" />
                </div>
                <div className="desc-indie">
                  <p className="title-indie">Jumlah Mapel</p>
                  <p className="value-indie">
                    <span>{dataBerandaMurid.jumlah_mapel}</span> Mata Pelajaran
                  </p>
                </div>
              </div>

              <div
                className="content-indiecator"
                style={{ background: "#B462D0", cursor: "pointer" }}
              >
                <div
                  className="icon-indie"
                  style={{ color: "#B462D0", background: "#fff" }}
                >
                  <Icon
                    icon="material-symbols:person-outline-rounded"
                    width="40"
                  />
                </div>
                <div className="desc-indie">
                  <p className="title-indie">Wali Kelas</p>
                  <p className="value-indie">
                    <span>{dataBerandaMurid.wali_kelas}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* content information */}
            <div className="con-content-information">
              <div className="content-status-task">
                <p className="text-status-task">Belum Selesai Dalam Deadline</p>
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#797979" }}
                    >
                      <Icon icon="uiw:time-o" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>{dataBerandaMurid.belum_dalamdeadline}</span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div>
                </div>
              </div>

              <div className="content-status-task">
                <p className="text-status-task">Selesai Dalam Deadline</p>
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#84E063", background: "#D5FFC6" }}
                    >
                      <Icon icon="ph:check-bold" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaMurid.selesai_dalamdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div>
                </div>
              </div>

              <div className="content-status-task">
                <p className="text-status-task">
                  Belum Selesai Lebih Dari Deadline
                </p>
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#FF3F3F", background: "#FFC6C6" }}
                    >
                      <Icon icon="uiw:time-o" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>{dataBerandaMurid.belum_lebihdeadline}</span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div>
                </div>
              </div>

              <div className="content-status-task">
                <p className="text-status-task">Selesai Lebih Dari Deadline</p>
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#FF3F3F", background: "#FFC6C6" }}
                    >
                      <Icon icon="ph:check-bold" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaMurid.selesai_lebihdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div>
                </div>
              </div>
            </div>
            {/* end content information */}
          </main>
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

export default BerandaMurid;
