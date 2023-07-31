import "../cssAll/guru/PagePengumpulan.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarGuru from "../component/NavbarGuru";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState, useEffect } from "react";
import ImgProfil from "../assets/profil-guru.svg";
import damiImgMurid from "../assets/damiImgMurid.png";
import axios from "axios";
import apiurl from "../api/api";

function PagePengumpulan() {
  const navText = "Pengumpulan";
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
    const clearpassword = document.querySelector("#password");
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
  const [dataTabelMurid, setDataTabelMurid] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  const handleDetail = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman detail
    navigate(`/guru/pagepengumpulan/detail/${id}`);
  };

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(navigate.search);
  //   const id = searchParams.get("id");

  //   if (id) {
  //     setSelected(id);
  //   }
  // }, [navigate.search]);

  useEffect(() => {
    axios
      .get(`${apiurl}/guru/pengumpulan`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;
        setDataTabelMurid(responseAPI.pengumpulan);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });

    axios
      .get(`${apiurl}/guru/pengumpulan/kelas`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataKelas(responseAPI.kelas);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, filterValue]);

  const handleSearch = () => {
    const filteredData = dataTabelMurid.filter((value) => {
      const lowerCaseStatusMapel = value.nama_jurusan
        ? value.nama_jurusan.toLowerCase()
        : "";

      return (
        (filterValue === "all" || filterValue === lowerCaseStatusMapel) &&
        ((value &&
          value.nama_siswa &&
          value.nama_siswa.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (value &&
            value.email &&
            value.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (value &&
            value.nama_jurusan &&
            value.nama_jurusan
              .toLowerCase()
              .includes(searchQuery.toLowerCase())))
      );
    });

    setFilteredData(filteredData);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const renderData = filteredData.length > 0 ? filteredData : dataTabelMurid;
  const dataNotFound =
    searchQuery !== "" && filteredData.length === 0 && !isLoading;

  console.log(filterValue);

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
          <li
            className="active"
            onClick={() => navigate("/guru/pagepengumpulan")}
          >
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
          <div className="header-Pengumpulan-Guru">
            <div className="header-Pengumpulan-left">
              <div className="header-pageKbm-left">
                <select
                  name="pageKbm"
                  id="filter"
                  value={filterValue}
                  onChange={handleFilterChange}
                >
                  <option value="all">-- Semua Kelas --</option>
                  {dataKelas.map((data) => (
                    <option value={data.id} key={data.id}>
                      -- {data.tingkat_ke} {data.nama_jurusan} {data.nama_kelas}{" "}
                      --
                    </option>
                  ))}
                </select>
              </div>
              <form className="search-box">
                <input
                  type="text"
                  placeholder="Cari..."
                  value={searchQuery}
                  onChange={handleChange}
                />
                <button disabled>
                  <Icon icon="material-symbols:search-rounded" width="20" />
                </button>
              </form>
            </div>
            <div className="header-Pengumpulan-right">
              {isLoading ? <p>Loading...</p> : <p>{renderData.length} MURID</p>}
            </div>
          </div>
          {isLoading ? (
            <div className="content-Pengumpulan-Guru">
              <div className="skeleton-card-DetailPengumpulan"></div>
              <div className="skeleton-card-DetailPengumpulan"></div>
              <div className="skeleton-card-DetailPengumpulan"></div>
              <div className="skeleton-card-DetailPengumpulan"></div>
              <div className="skeleton-card-DetailPengumpulan"></div>
              <div className="skeleton-card-DetailPengumpulan"></div>
            </div>
          ) : renderData.length === 0 ? (
            <div className="card-DetailPengumpulan-Menunggu-noData">
              <p>Tidak ada tugas menunggu.</p>
            </div>
          ) : (
            <div className="content-Pengumpulan-Guru">
              {renderData.map((data) => (
                <div
                  className="card-Pengumpulan-Guru"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDetail(data.id)}
                  key={data.id} // Tambahkan key prop untuk mencegah pesan warning
                >
                  <div className="card-Pengumpulan-Guru-left">
                    <div className="img-Pengumpulan-Guru">
                      <img
                        src={damiImgMurid} // Anda bisa gunakan data.foto_profile jika data tersebut tersedia
                        alt={data.foto_profile}
                        className="image-Pengumpulan-Guru"
                      />
                    </div>
                    <div className="desc-card-Pengumpulan-Guru">
                      <p className="name-card-Pengumpulan-Guru">
                        {data.nama_siswa}
                      </p>
                      <p className="email-card-Pengumpulan-Guru">
                        {data.email}
                      </p>
                    </div>
                  </div>
                  <div className="detaiKelas-Pengumpulan-Guru">
                    <p>
                      {data.tingkat_ke +
                        " " +
                        data.nama_jurusan +
                        " " +
                        data.nama_kelas}
                    </p>
                  </div>
                </div>
              ))}
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

export default PagePengumpulan;
