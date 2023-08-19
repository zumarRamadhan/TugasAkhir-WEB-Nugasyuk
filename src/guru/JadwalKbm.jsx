import "../cssAll/guru/JadwalKbm.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarGuru from "../component/NavbarGuru";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useEffect, useState } from "react";
import ImgProfil from "../assets/profil-guru.svg";
import axios from "axios";
import apiurl from "../api/api";

function PageJadwalKbm() {
  const navText = "Jadwal KBM";
  const navigate = useNavigate();
  const saveToken = sessionStorage.getItem("token");

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

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

  const [selectedDay, setSelectedDay] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataJadwal, setDataJadwal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${apiurl}guru/jadwal?hari=${selectedDay}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${saveToken}`, // Anda harus memiliki variabel saveToken dengan nilai token yang sesuai
              "ngrok-skip-browser-warning": "any",
            },
          }
        );
        console.log("data API", response.data);
        setDataJadwal(response.data.data);
      } catch (error) {
        console.log("terjadi kesalahan: ", error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [selectedDay]);

  const dayData = [
    { id: 1, hari: "Senin" },
    { id: 2, hari: "Selasa" },
    { id: 3, hari: "Rabu" },
    { id: 4, hari: "Kamis" },
    { id: 5, hari: "Jumat" },
    { id: 6, hari: "Sabtu" },
  ];

  const handleSelectChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedDay(selectedValue);
  };

  return (
    <div>
      <aside>
        <h1
          className="title-form-login"
          onClick={() => navigate("/guru/berandaguru")}
        >
          <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
          nugasyuk
        </h1>
        <ul>
          <li onClick={() => navigate("/guru/berandaguru")}>
            <Icon icon="iconoir:home-simple" width="20" />
            Beranda
          </li>
          <li onClick={() => navigate("/guru/pagekbm")}>
            <Icon icon="ph:chalkboard-teacher" width="20" />
            KBM
          </li>
          <li onClick={() => navigate("/guru/pagepengumpulan")}>
            <Icon icon="uiw:date" width="18" />
            Pengumpulan
          </li>
          <li
            className="active"
            onClick={() => navigate("/guru/pagejadwalkbm")}
          >
            <Icon icon="fluent-mdl2:education" width="18" />
            Jadwal KBM
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <NavbarGuru text={navText} />
        <div className="main">
          <div className="header-jadwalKBM-Guru">
            <div className="header-jadwalKBM-left">
              <select
                id="jadwalKbm"
                name="jadwalKbm"
                value={selectedDay}
                onChange={handleSelectChange}
              >
                {dayData.map((data) => (
                  <option key={data.id} value={data.id}>
                    -- {data.hari} --
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="content-jadwalKBM-Guru">
            <p className="valueDay">
              {dayData.find((data) => data.id === selectedDay)?.hari ||
                "Pilih hari"}
            </p>

            {isLoading ? (
              <div className="con-card-jadwalKBM-Guru">
                <div className="card-jadwalKBM-Guru-skeleton"></div>
                <div className="card-jadwalKBM-Guru-skeleton"></div>
                <div className="card-jadwalKBM-Guru-skeleton"></div>
                <div className="card-jadwalKBM-Guru-skeleton"></div>
              </div>
            ) : dataJadwal.length === 0 ? (
              <div className="card-jadwal-noData">
                <p>Tidak ada jadwal di hari ini</p>
              </div>
            ) : (
              <div className="con-card-jadwalKBM-Guru">
                {dataJadwal.map((data, jadwal) => (
                  <div className="card-jadwalKBM-Guru" key={jadwal}>
                    <div className="card-jadwalKBM-Guru-left">
                      <p className="id-jadwalKBM-Guru">{jadwal + 1}</p>
                      <div className="icon-jadwalKBM-Guru">
                        <Icon icon="fluent:class-24-regular" width="30" />
                      </div>
                      <p className="dataKelas-jadwalKBM-Guru">
                        {data.tingkat_ke} {data.nama_jurusan} {data.nama_kelas}
                      </p>
                      <p className="dataMapel-jadwalKBM-Guru">
                        {data.nama_mapel}
                      </p>
                    </div>
                    <div className="hourValue-jadwalKBM-Guru">
                      <span className="startingHour">
                        {data.waktu_mulai.substring(0, 5)}
                      </span>{" "}
                      -{" "}
                      <span className="hourIsOver">
                        {data.waktu_selesai.substring(0, 5)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            <button type="button" className="btn-keluar" onClick={logout}>
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
          <p className="value-detail">budiono@smkrus.sch.id</p>
          <p className="judul-detail">Nama</p>
          <p className="value-detail">Budiono, S.Pd</p>
          <p className="judul-detail">Pengampu</p>
          <p className="value-detail">Bahasa Inggris</p>
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

export default PageJadwalKbm;
