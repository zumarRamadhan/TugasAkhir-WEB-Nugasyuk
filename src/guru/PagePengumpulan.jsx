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
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import axios from "axios";
import apiurl from "../api/api";

function PagePengumpulan() {
  const navText = "Pengumpulan";
  const navigate = useNavigate();
  const saveToken = sessionStorage.getItem("token");

  if (!saveToken) {
    navigate("/login");
  }

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

  // popup card loading
  const showPopupLoading = () => {
    const background = document.querySelector(".popup-loading");
    background.style.display = "flex";
    const PopupLoading = document.querySelector(".body-loading");
    PopupLoading.style.display = "grid";
    PopupLoading.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closePopupLoading = () => {
    const background = document.querySelector(".popup-loading");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const PopupLoading = document.querySelector(".body-loading");
    setTimeout(() => (PopupLoading.style.display = "none"), 250);
    PopupLoading.style.animation = "slide-up 0.3s ease-in-out";
  };
  // end popup card loading

  const showSuccessChangesPass = () => {
    const popupLogout = document.querySelector("#popup-success-ChangesPass");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showFailedChangesPass = () => {
    const popupLogout = document.querySelector("#popup-Failed-ChangesPass");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccessChangesPass = () => {
    const messageCode = document.querySelector("#popup-success-ChangesPass");
    setTimeout(() => (messageCode.style.display = "none"), 250);
    messageCode.style.animation = "slide-up 0.3s ease-in-out";
    // window.location.reload();
  };

  const closeFailedChangesPass = () => {
    const messageCode = document.querySelector("#popup-Failed-ChangesPass");
    setTimeout(() => (messageCode.style.display = "none"), 250);
    messageCode.style.animation = "slide-up 0.3s ease-in-out";
  };

  // 

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

  const [dataTabelMurid, setDataTabelMurid] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
      .get(`${apiurl}guru/pengumpulan`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
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
      .get(`${apiurl}guru/kelas`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
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
    const searchKeywords = searchQuery.toLowerCase().split(" ");
    const filteredData = dataTabelMurid.filter((value) => {
      const lowerCaseStatusMapel = value.kelas_id
        ? value.kelas_id.toString() // Ensure kelas_id is a string
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

  // function changes password
  const [formPass, setformPass] = useState({
    password_lama: "",
    password_baru: "",
    konfirmasi_password_baru: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformPass((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitChangesPass = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formPass);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      showPopupLoading();
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.password_lama) {
      errors.password_lama = "Silahkan password lama anda";
    }

    if (data.password_baru.trim().length < 8) {
      errors.password_baru = "Password harus lebih dari 8 karakter";
    }

    if (!data.password_baru) {
      errors.password_baru = "Silahkan masukkan password baru anda";
    }

    if (data.password_baru !== data.konfirmasi_password_baru) {
      errors.konfirmasi_password_baru = "Pastikan password sama";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmitting) {
      const formData = new FormData();
      formData.append("password_lama", formPass.password_lama);
      formData.append("password_baru", formPass.password_baru);

      axios
        .post(`${apiurl}guru/ubahpassword`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning": "any",
          },
        })
        .then((result) => {
          console.log("Password berhasil diperbarui");

          showSuccessChangesPass();
          closeForgetPopupAndClearInput();
          closePopupLoading();

          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setformPass({
            password_lama: "",
            password_baru: "",
            konfirmasi_password_baru: "",
          });

          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat memperbarui password:", error);
          setErrors({ submit: "Terjadi kesalahan saat memperbarui password" });
          setIsSubmitting(false);
          showFailedChangesPass();
          closePopupLoading();
        });
    }
  }, [isSubmitting, formPass]);

  // end function changes password
  if (dataKelas && dataTabelMurid && !isError)
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
          ) : dataNotFound ? (
            <div className="card-DetailPengumpulan-Menunggu-noData">
              <p>Murid tidak di temukan</p>
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
                        src={`https://wondrous-squirrel-blatantly.ngrok-free.app/${data.foto_profile}`} // Anda bisa gunakan data.foto_profile jika data tersebut tersedia
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
                      {/* <p className="email-card-Pengumpulan-Guru">
                            {data.kelas_id}
                          </p> */}
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
            <button type="button" className="btn-keluar" onClick={logout}>
              Keluar
            </button>
          </div>
        </div>
      </div>

      <div className="popup-forget" id="popup-forget">
        <form
          onSubmit={handleSubmitChangesPass}
          className="detail-forget-password"
        >
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
              name="password_lama"
              value={formPass.password_lama}
              onChange={handleChanges}
            />
            <button
              type="button"
              className="btn-mata"
              onClick={togglePasswordVisibility}
            >
              <img src={mataIcon} alt="" />
            </button>
          </div>
          {errors.password_lama && (
            <span className="error">{errors.password_lama}</span>
          )}

          <p className="judul-form">Sandi baru</p>
          <div className="con-form-password">
            <img src={passIcon} alt="" />
            <input
              type={passwordTypeNew}
              id="newPassword"
              placeholder="*********"
              className="input-password"
              name="password_baru"
              value={formPass.password_baru}
              onChange={handleChanges}
            />
            <button
              type="button"
              className="btn-mata"
              onClick={togglePasswordVisibilityNew}
            >
              <img src={mataIcon} alt="" />
            </button>
          </div>
          {errors.password_baru && (
            <span className="error">{errors.password_baru}</span>
          )}

          <p className="judul-form">Konfirmasi sandi baru</p>
          <div className="con-form-password">
            <img src={passIcon} alt="" />
            <input
              type={passwordTypeConfirm}
              id="confirmPassword"
              placeholder="*********"
              className="input-password"
              name="konfirmasi_password_baru"
              value={formPass.konfirmasi_password_baru}
              onChange={handleChanges}
            />
            <button
              type="button"
              className="btn-mata"
              onClick={togglePasswordVisibilityConfirm}
            >
              <img src={mataIcon} alt="" />
            </button>
          </div>
          {errors.konfirmasi_password_baru && (
            <span className="error">{errors.konfirmasi_password_baru}</span>
          )}

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

      {/* message Changes Pass */}

      <div id="popup-success-ChangesPass">
        <div className="detail-success">
          <Icon
            icon="radix-icons:cross-circled"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={closeSuccessChangesPass}
          />
          <div className="image-success">
            <img
              src={ImgSuccess}
              alt="Delete Success"
              className="img-success"
            />
          </div>
          <p className="desc-success">Password Berhasil Di Perbarui</p>
          <button className="btn-success" onClick={closeSuccessChangesPass}>
            Kembali
          </button>
        </div>
      </div>

      <div id="popup-Failed-ChangesPass">
        <div className="detail-Failed">
          <Icon
            icon="radix-icons:cross-circled"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={closeFailedChangesPass}
          />
          <div className="image-Failed">
            <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
          </div>
          <p className="desc-Failed">
            Masukan Password Lama Anda Dengan Benar!!
          </p>
          <button className="btn-Failed" onClick={closeFailedChangesPass}>
            Kembali
          </button>
        </div>
      </div>

      {/* end message Changes Pass*/}

      {/* card loading */}
      <div className="popup-loading">
        <div className="body-loading" id="body-loading">
          <svg
            class="pl"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                <stop offset="100%" stop-color="hsl(223,90%,55%)" />
              </linearGradient>
              <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                <stop offset="100%" stop-color="hsl(223,90%,55%)" />
              </linearGradient>
            </defs>
            <circle
              class="pl__ring"
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="url(#pl-grad1)"
              stroke-width="36"
              stroke-dasharray="0 257 1 257"
              stroke-dashoffset="0.01"
              stroke-linecap="round"
              transform="rotate(-90,100,100)"
            />
            <line
              class="pl__ball"
              stroke="url(#pl-grad2)"
              x1="100"
              y1="18"
              x2="100.01"
              y2="182"
              stroke-width="36"
              stroke-dasharray="1 165"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      {/* end loading */}
    </div>
  );
}

export default PagePengumpulan;
