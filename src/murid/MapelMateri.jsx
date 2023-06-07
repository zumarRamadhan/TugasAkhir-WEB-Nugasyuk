import "../cssAll/murid/MapelMateri.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import AssetsBinggris from "../assets/img-ilustration-binggris.svg";
import NavbarMurid from "../component/NavbarMurid";
import imgGuru from "../assets/profil-guru.svg";
import axios from "axios";

function MapelMateri() {
  // const navText = 'oke';
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

  const [activeContent, setActiveContent] = useState("material-kbm");

  const showMaterial = () => {
    setActiveContent("material-kbm");
  };

  const showTask = () => {
    setActiveContent("task-kbm");
  };

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailMapel, setDataDetailMapel] = useState([]);
  const [dataMaterial, setDataMaterial] = useState([]);
  const [dataTask, setDataTask] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetailMapel();
    dataMateri();
    dataTugas();
  }, [id]);

  function getDetailMapel() {
    axios
      .get("https://www.nugasyuk.my.id/api/murid/matapelajaran/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataDetailMapel(response.data.data);
        setisLoading(false);
      })
      .catch((error) => console.error(error));
  }

  function dataMateri() {
    axios
      .get("https://www.nugasyuk.my.id/api/murid/matapelajaran/materi/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataMaterial(response.data.data);
        setisLoading(false);
      })
      .catch((error) => console.error(error));
  }

  function dataTugas() {
    axios
      .get("https://www.nugasyuk.my.id/api/murid/matapelajaran/tugas/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataTask(response.data.data);
        setisLoading(false);
      })
      .catch((error) => console.error(error));
  }

  if (isLoading)
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  else if (dataDetailMapel && !isError)
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
            <li onClick={() => navigate("/murid/pagekbm")}>
              <Icon icon="uiw:date" width="18" />
              Jadwal KBM
            </li>
            <li className="active" onClick={() => navigate("/murid/pagemapel")}>
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
          {dataDetailMapel.map((detailMapel) => (
            <NavbarMurid textNavigasi={detailMapel.nama_mapel} />
          ))}
          <div className="main">
            {dataDetailMapel &&
              dataDetailMapel.map((detailMapel) => (
                <div className="con-content-subject">
                  <div
                    className="content-subject"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #8287F8, #555AD3)",
                    }}
                  >
                    <div className="content-subject-left">
                      <p className="name-subject">{detailMapel.nama_mapel}</p>
                      <p className="name-teacher">{detailMapel.nama_guru}</p>
                    </div>
                    <img
                      src={AssetsBinggris}
                      alt=""
                      className="img-assets-subject"
                    />
                  </div>
                  <div className="content-subject-2">
                    <img src={imgGuru} alt="" className="img-subject-2" />
                    <p className="name-teacher-2">{detailMapel.nama_guru}</p>
                  </div>
                </div>
              ))}

            <div className="dropdown-task-murid">
              <div className="switch-container">
                <button
                  id="btn-materiKbm"
                  className={
                    activeContent === "material-kbm" ? "activeDetailKbm" : ""
                  }
                  onClick={showMaterial}>
                  Materi
                </button>
                <button
                  id="btn-tugasKbm"
                  className={
                    activeContent === "task-kbm" ? "activeDetailKbm" : ""
                  }
                  onClick={showTask}>
                  Tugas
                </button>
              </div>

              <form className="search-box">
                <input type="text" placeholder="Cari..." />
                <button type="submit">
                  <Icon
                    icon="material-symbols:search-rounded"
                    width="20"
                  ></Icon>
                </button>
              </form>
            </div>

            <div
              className="con-material material-kbm"
              style={{
                display: activeContent === "material-kbm" ? "block" : "none",
              }}
            >
              {dataMaterial &&
                dataMaterial.map((apiMateri) => (
                  <div className="card-material" style={{ cursor: "pointer" }}>
                    <div className="indiecator-left">
                      <div
                        className="icon-indie"
                        style={{ background: "#D8F0FF" }}
                      >
                        <Icon
                          icon="ri:book-line"
                          width="30"
                          style={{ color: "#2A93D5" }}
                        />
                      </div>
                      <div className="desc-indie">
                        <p className="material-name">{apiMateri.nama_materi}</p>
                        <p className="teacher-name">{apiMateri.nama_guru}</p>
                      </div>
                    </div>
                    <div className="indiecator-right">
                      <p className="time-upload">{apiMateri.tanggal_dibuat}</p>
                      <Icon
                        icon="ic:round-navigate-next"
                        width="30"
                        className="icon-navigate"
                      />
                    </div>
                  </div>
                ))}
            </div>

            {/* tugas */}
            <div
              className="con-material taskKbm"
              style={{
                display: activeContent === "task-kbm" ? "block" : "none",
              }}
            >
              {dataTask &&
                dataTask.map((apiTugas) => (
                  <div className="card-material" style={{ cursor: "pointer" }}>
                    <div className="indiecator-left">
                      <div
                        className="icon-indie"
                        style={{ background: "#FFFA87" }}
                      >
                        <Icon
                          icon="uiw:time-o"
                          width="30"
                          style={{ color: "#CBC41A" }}
                        />
                      </div>
                      <div className="desc-indie">
                        <p className="material-name">{apiTugas.nama_tugas}</p>
                        <p className="teacher-name">Joko Arianto</p>
                      </div>
                    </div>
                    <div className="indiecator-right">
                      <p className="time-upload">{apiTugas.date}</p>
                      <p className="deadline-time" style={{ color: "#2A93D5" }}>
                        Deadline : <span>25-6-2023</span>
                      </p>
                      <Icon
                        icon="ic:round-navigate-next"
                        width="30"
                        className="icon-navigate"
                      />
                    </div>
                  </div>
                ))}
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
                style={{ cursor: "pointer", color: "#4b4b4b" }}
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

export default MapelMateri;
