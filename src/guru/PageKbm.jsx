import "../cssAll/guru/PageKbmGuru.css";
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

function PageKbm() {
  const navText = "KBM";
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

  const [dataCardKelas, setDataCardKelas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  
  const handleDetail = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman detail
    navigate(`/guru/pagekbm/detail/${id}`);
  };

  useEffect(() => {
    axios
      .get(`${apiurl}guru/kbm`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataCardKelas(responseAPI.kelas);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredData(dataCardKelas);
  }, [dataCardKelas]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, filterValue]);

  const handleSearch = () => {
    const searchKeywords = searchQuery.toLowerCase().split(" ");
    const filteredData = dataCardKelas.filter((value) => {
      const lowerCaseStatusMapel = value.nama_jurusan
        ? value.nama_jurusan.toLowerCase()
        : "";

      const propValues = Object.values(value);

      return (
        (filterValue === "all" || filterValue === lowerCaseStatusMapel) &&
        searchKeywords.every((keyword) =>
          propValues.some((propValue) => {
            if (typeof propValue === "string" && propValue !== "") {
              return propValue.toLowerCase().includes(keyword);
            }
            return false;
          })
        )
      );
    });

    setFilteredData(filteredData);
    console.log("filteredData", filteredData);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const renderData = filteredData.length > 0 ? filteredData : dataCardKelas;
  const dataNotFound =
    searchQuery !== "" &&
    filteredData.length === 0 &&
    !isLoading &&
    (filterValue !== "all" || searchQuery !== "");

  if(dataCardKelas && !isError)
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
          <li className="active" onClick={() => navigate("/guru/pagekbm")}>
            <Icon icon="ph:chalkboard-teacher" width="20" />
            KBM
          </li>
          <li onClick={() => navigate("/guru/pagepengumpulan")}>
            <Icon icon="uiw:date" width="18" />
            Pengumpulan
          </li>
          <li onClick={() => navigate("/guru/pageJadwalKbm")}>
            <Icon icon="fluent-mdl2:education" width="18" />
            Jadwal KBM
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <NavbarGuru text={navText} />
        <div className="main">
          <div className="header-pageKbm-Guru">
            <div className="header-pageKbm-left">
              <select
                id="filter"
                value={filterValue}
                onChange={handleFilterChange}
              >
                <option value="all">-- Semua Jurusan --</option>
                <option value="dkv">DKV</option>
                <option value="animasi">Animasi</option>
                <option value="pplg">PPLG</option>
                <option value="dg">DG</option>
                <option value="tg">Teknik Grafika</option>
              </select>
            </div>
            <form className="search-box" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Cari..."
                value={searchQuery}
                onChange={handleChange}
              />
              <button type="submit">
                <Icon icon="material-symbols:search-rounded" width="20"></Icon>
              </button>
            </form>
          </div>

          {isLoading ? (
            <div className="content-pageKbm-Guru">
              <div className="card-pageKbm-Guru-skeleton"></div>
              <div className="card-pageKbm-Guru-skeleton"></div>
              <div className="card-pageKbm-Guru-skeleton"></div>
              <div className="card-pageKbm-Guru-skeleton"></div>
              <div className="card-pageKbm-Guru-skeleton"></div>
              <div className="card-pageKbm-Guru-skeleton"></div>
            </div>
          ) : (
            <div>
              {filteredData.length > 0 ? (
                <div className="content-pageKbm-Guru">
                  {renderData.map((data) => (
                    <div
                      className="card-pageKbm-Guru"
                      style={{ cursor: "pointer" }}
                      key={data.id}
                      onClick={() => handleDetail(data.id)}
                    >
                      <div className="card-pageKbm-Guru-left">
                        <div className="img-pageKbm-Guru">
                          <Icon icon="fluent:class-24-regular" width={40} />
                        </div>
                        <div className="desc-pageKbm-Guru">
                          <p className="title-pageKbm-Guru">Kelas</p>
                          <p className="kelas-pageKbm-Guru">
                            {data.tingkat_ke +
                              " " +
                              data.nama_jurusan.toUpperCase() +
                              " " +
                              data.nama_kelas}
                          </p>
                        </div>
                      </div>
                      <Icon
                        icon="ic:round-navigate-next"
                        width={30}
                        color="#2A93D5"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="dataNotFound">
                  <h2>Data Tidak Ditemukan</h2>
                </div>
              )}
            </div>
          )}
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

export default PageKbm;
