import "../cssAll/admin/PageKelas.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import Navigation from "../component/NavigationBar";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useEffect, useState } from "react";

function Pagekelas() {
  const navText = "Kelas";
  const navigate = useNavigate();

  const closeDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
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
  const [active, setActive] = useState();
  const [selected, setSelected] = useState();

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

  // buatkan fungsi dengan nama clickDetail maka akan membuat class popup-menu-kelas muncul, dan jika diklik lagi maka akan menghilang dan bisa di gunakan lebih dari 1 kali
  const clickDetail = () => {
    const popupMenuKelas = document.querySelector(".popup-menu-kelas");
    popupMenuKelas.style.display = "flex";
    // popupMenuKelas.style.animation = 'slide-down 0.3s ease-in-out';
  };

  // create array for data kelas and for card-kelas
  const valueDataKelas = [
    {
      id: 1,
      namaKelas: "XII RPL 1",
    },
    {
      id: 2,
      namaKelas: "XII RPL 2",
    },
    {
      id: 3,
      namaKelas: "XII RPL 3",
    },
  ];

  function handleToggle(e) {
    console.log(e);
    setActive(!active);
    setSelected(e);
  }

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div>
      {/* <Sidebar/> */}
      <aside>
        <h1
          className="title-form-login"
          onClick={() => navigate("/admin/berandaadmin")}
          style={{ cursor: "pointer" }}
        >
          <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
          nugasyuk
        </h1>
        <ul>
          <li onClick={() => navigate("/admin/berandaadmin")}>
            <Icon icon="iconoir:home-simple" width="20" />
            Beranda
          </li>
          <li onClick={() => navigate("/admin/pageguru")}>
            <Icon icon="la:chalkboard-teacher" width="20" />
            Guru
          </li>
          <li onClick={() => navigate("/admin/pagemurid")}>
            <Icon icon="ph:student" width="20" />
            Murid
          </li>
          <li className="active" onClick={() => navigate("/admin/pagekelas")}>
            <Icon icon="fluent:class-24-regular" width="20" />
            Kelas
          </li>
          <li onClick={() => navigate("/admin/matapelajaran")}>
            <Icon icon="fluent-mdl2:education" width="20" />
            Mata Pelajaran
          </li>
          <li onClick={() => navigate("/admin/jadwalkbm")}>
            <Icon icon="uiw:date" width="20" />
            Jadwal KBM
          </li>
          <li onClick={() => navigate("/admin/pageassets")}>
            <Icon icon="ic:outline-file-copy" width="20" />
            Assets
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <Navigation text={navText} />
        <main className="main">
          <div className="header-kelas">
            <div className="header-kelas-left">
              <button className="btn-add-kelas">
                <Icon icon="ic:round-plus" width="20"></Icon>
                <p>Tambah Data</p>
              </button>

              <select id="kelas" name="kelas">
                <option value="semua" selected>
                  -- Semua Jurusan --
                </option>
                <option value="jurusan">DKV</option>
                <option value="jurusan">Animasi</option>
                <option value="jurusan">PPLG</option>
                <option value="jurusan">DG</option>
                <option value="jurusan">Teknik Grafika</option>
              </select>

              <form className="search-box">
                <input type="text" placeholder="Cari..." />
                <button>
                  <Icon
                    icon="material-symbols:search-rounded"
                    width="20"
                  ></Icon>
                </button>
              </form>
            </div>
            <div className="header-kelas-right">
              <p className="detail-jumlah-kelas">
                <span>25</span> Kelas
              </p>
            </div>
          </div>

          <div className="content-kelas">
            {valueDataKelas.map((kelas, index) => (
              <div className="card-kelas" id="dkv">
                <div className="icon-card-kelas">
                  <Icon icon="fluent:class-24-regular" width="40" />
                </div>

                <div className="con-card-right-kelas">
                  <div className="con-card-left-kelas">
                    <p className="title-card-kelas">Kelas</p>
                    <p className="value-card-kelas">{kelas.namaKelas}</p>
                  </div>
                  <div className="detail-kelas">
                    <div className="card-content-kelas-right">
                      <button id="popup-button-kelas">
                        <Icon
                          icon="mi:options-vertical"
                          width="40"
                          color="#2A93D5"
                          onClick={() => handleToggle(index)}
                        />
                      </button>
                    </div>
                    <div
                      id="popup-menu-kelas"
                      className={`popup-menu-kelas ${
                        selected === index && active ? "active" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <a href="#" id="detail-guru">Detail</a>
                        </li>
                        <li>
                          <a href="#" id="edit-guru">Edit</a>
                        </li>
                        <li>
                          <a href="#" id="hapus-guru">Hapus</a>
                        </li>
                        <li>
                          <a href="#" id="tambah-guru">Tambah Code</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <p className="value-detail">erikayanti@smkrus.sch.id</p>
          <p className="judul-detail">Nama</p>
          <p className="value-detail">Erika Yanti, S.Pd</p>
          <p className="judul-detail">Devisi</p>
          <p className="value-detail">Admin</p>
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
          <button className="logout" id="btn-logout" onClick={showLogoutPopup}>
            <Icon icon="material-symbols:logout-rounded" width="30" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagekelas;