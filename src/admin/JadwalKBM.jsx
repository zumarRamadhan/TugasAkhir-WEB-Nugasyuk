import "../cssAll/admin/JadwalKBM.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import Navigation from "../component/NavigationBar";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import imgCardKbm from "../assets/guru-karman.svg";
import ImgDelete from "../assets/imgDelete.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import { useEffect, useState } from "react";
import axios from "axios";
import apiurl from "../api/api";

function EditFormAddJadwal() {
  const navText = "Jadwal KBM";
  const navigate = useNavigate();
  const [detailHariJadwal, setDetailHariJadwal] = useState([]);
  const [detailJadwal, setDetailJadwal] = useState([]);
  const [deleteJadwal, setDeleteJadwal] = useState([]);
  const saveToken = sessionStorage.getItem("token");
  const [dataKelas, setDataKelas] = useState([]);
  const [dataJadwal, setDataJadwal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCardLoading, setCardLoading] = useState(true);
  const [isPopupLoading, setPopupLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleEditClick = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman form edit
    navigate(`/admin/jadwalkbm/edit/${id}`);
    console.log(dataJadwal);
  };

  const closeDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(350px)";
  };

  const showDeletePopup = (id) => {
    setSelected(id);
    const background = document.querySelector("#popup-Delete");
    background.style.display = "flex";
    const popupDelete = document.querySelector(".detail-Delete");
    popupDelete.style.display = "block";
    popupDelete.style.animation = "slide-down 0.3s ease-in-out";

    setDeleteJadwal(null);
    showPopupLoadingDetail();
    axios
      .get(`${apiurl}admin/jadwal/data/` + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        if (responseAPI.success && responseAPI.data.length > 0) {
          setDeleteJadwal(responseAPI.data[0]);
          setIsLoading(false);
          closePopupLoadingDetail();
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  const handleDelete = () => {
    showPopupLoading();
    axios
      .delete(`${apiurl}admin/jadwal/${selected}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((response) => {
        // Handling successful deletion
        console.log("Data berhasil dihapus");
        // Close the delete popup and detail popup
        closeDeletePopup();
        closeDetailKbm();
        showSuccess();
        closePopupLoading();
      })
      .catch((error) => {
        // Handling error when deleting data
        console.log("Terjadi kesalahan saat menghapus data:", error);
        showFailed();
        closePopupLoading();
      });
  };

  const closeDeletePopup = () => {
    const background = document.querySelector("#popup-Delete");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const popupDelete = document.querySelector(".detail-Delete");
    setTimeout(() => (popupDelete.style.display = "none"), 250);
    popupDelete.style.animation = "slide-up 0.3s ease-in-out";
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

  // messege
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

  const showPopupLoadingDetail = () => {
    const background = document.querySelector("#popup-loadingDetail");
    background.style.display = "flex";
    const PopupLoadingDetail = document.querySelector(".body-loadingDetail");
    PopupLoadingDetail.style.display = "grid";
    PopupLoadingDetail.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closePopupLoadingDetail = () => {
    const background = document.querySelector("#popup-loadingDetail");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const PopupLoadingDetail = document.querySelector(".body-loadingDetail");
    setTimeout(() => (PopupLoadingDetail.style.display = "none"), 250);
    PopupLoadingDetail.style.animation = "slide-up 0.3s ease-in-out";
  };
  // end popup card loading

  const showSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    // Fetch the updated data after deletion
    fetchData(selectedValue);
  };

  const showFailed = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeFailed = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  // end messege

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

  const closeDetailKbm = () => {
    const popupLogout = document.querySelector(".popup-kbm");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  useState(() => {
    setIsLoading(true);
    axios
      .get(`${apiurl}admin/kelas`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;
        

        setDataKelas(responseAPI.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const [selectedValue, setSelectedValue] = useState(1);

  useEffect(() => {
    fetchData(selectedValue);
  }, []); // Fetch data on initial component mount

  const showDetailKbm = (id) => {
    setPopupLoading(true);
    const popupForget = document.querySelector(".popup-kbm");
    popupForget.style.display = "flex";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";

    const url = `${apiurl}admin/jadwal/${id}?kelas=${selectedValue}`;

    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;
        setDetailHariJadwal(responseAPI.hari);
        setDetailJadwal(responseAPI.data);
        setIsLoading(false);
        setPopupLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(false);
        setIsLoading(false);
        setPopupLoading(false);
      });
  };

  const fetchData = (selectedValue) => {
    const url = `${apiurl}admin/jadwal?kelas=${selectedValue}`;
    setCardLoading(true);

    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;
        setDataJadwal(responseAPI.data);
        setCardLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setCardLoading(false);
      });
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    fetchData(selectedValue); // Fetch data again when the select value changes
  };

  //   if (isLoading) {
  //     return (
  //       <div id="load">
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //         <div>.</div>
  //       </div>
  //     );
  //   } else
  if (dataJadwal && dataKelas && !isError)
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
            <li onClick={() => navigate("/admin/pagekelas")}>
              <Icon icon="fluent:class-24-regular" width="20" />
              Kelas
            </li>
            <li onClick={() => navigate("/admin/matapelajaran")}>
              <Icon icon="fluent-mdl2:education" width="20" />
              Mata Pelajaran
            </li>
            <li className="active" onClick={() => navigate("/admin/jadwalkbm")}>
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
            <div className="header-jadwalKBM">
              <div className="header-jadwalKBM-left">
                <button
                  className="btn-add-jadwalKBM"
                  onClick={() => navigate("/admin/jadwalkbm/tambah")}
                >
                  <Icon icon="ic:round-plus" width="20"></Icon>
                  <p>Tambah Data</p>
                </button>
                <select
                  id="jadwalKbm"
                  name="jadwalKbm"
                  onChange={handleSelectChange}
                >
                  {dataKelas.map((data) => (
                    <option value={data.id}>
                      {data.nama_kelas} {data.nama_jurusan.toUpperCase()}{" "}
                      {data.tingkat_ke}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="content-jadwalKBM">
              {isCardLoading ? (
                <div className="con-card-jadwalKBM">
                  <div className="cardJadwalKbm-skeleton"></div>
                  <div className="cardJadwalKbm-skeleton"></div>
                  <div className="cardJadwalKbm-skeleton"></div>
                  <div className="cardJadwalKbm-skeleton"></div>
                  <div className="cardJadwalKbm-skeleton"></div>
                  <div className="cardJadwalKbm-skeleton"></div>
                </div>
              ) : (
                <div className="con-card-jadwalKBM">
                  {dataJadwal.map((cardKbm) => (
                    <div className="cardJadwalKbm">
                      <div className="titleJadwalKbm">
                        <p>Jadwal KBM</p>
                        <h1>{cardKbm.hari}</h1>
                      </div>
                      <div className="bottomjadwalKbm">
                        <div className="conImgGuru-Kbm">
                          {cardKbm.detail.map((data) => (
                            <div className="imgGuru-Kbm">
                              <img
                                src={`https://www.nugasyuk.my.id/public/${data.foto_profile}`}
                                alt=""
                                className="imageGuru-Kbm"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="btnDetail-Kbm">
                          <Icon
                            icon="ic:round-navigate-next"
                            width="30"
                            className="iconDetail-Kbm"
                            onClick={() => showDetailKbm(cardKbm.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>

        <div className="popup-kbm">
          <div className="detail-popup-kbm">
            <div className="nav-popup-kbm">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer" }}
                className="btn-close"
                onClick={closeDetailKbm}
              />
              {isPopupLoading ? (
                <h2>Loading...</h2>
              ) : (
                <h2>{detailHariJadwal}</h2>
              )}
            </div>
            {isPopupLoading ? (
              <div className="con-popup-kbm">
                <div className="skeleton-popup-card-kbm"></div>
                <div className="skeleton-popup-card-kbm"></div>
                <div className="skeleton-popup-card-kbm"></div>
                <div className="skeleton-popup-card-kbm"></div>
              </div>
            ) : (
              <div className="con-popup-kbm">
                {detailJadwal.length === 0 ? ( // Check if detailJadwal is empty
                  <div className="popup-card-kbm">
                    <div className="dataKosong">Data Tidak Ditemukan</div>
                  </div>
                ) : (
                  detailJadwal.map((dataGuru) => (
                    <div className="popup-card-kbm">
                      <div className="test1">
                        <img
                          src={`https://www.nugasyuk.my.id/public/${dataGuru.foto_profile}`}
                          alt=""
                          className="image-card-kbm"
                        />
                        <div className="mapel-card-kbm">
                          <p>{dataGuru.nama_mapel}</p>
                          <p className="guruPengampu">{dataGuru.nama_guru}</p>
                        </div>
                      </div>
                      <div className="test2">
                        <div className="jamMengajar">
                          <span>{dataGuru.waktu_mulai.substring(0, 5)}</span> -{" "}
                          <span>{dataGuru.waktu_selesai.substring(0, 5)}</span>
                        </div>
                        <div className="con-btn-card-kbm">
                          <div
                            className="btn-edit-card-kbm"
                            onClick={() => handleEditClick(dataGuru.id)}
                          >
                            <Icon
                              icon="material-symbols:edit-outline-rounded"
                              width="15"
                            />
                          </div>
                          <div
                            className="btn-delete-card-kbm"
                            onClick={() => showDeletePopup(dataGuru.id)}
                          >
                            <Icon icon="ic:round-delete-outline" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        <div className="popup-Delete" id="popup-Delete">
          <div className="detail-Delete">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeDeletePopup}
            />
            <div className="image-Delete">
              <img src={ImgDelete} alt="" className="img-Delete" />
            </div>
            <p className="desc-Delete">Anda yakin ingin menghapus?</p>
            {/* memanggil nama sesuai data yang di pilih */}
            {deleteJadwal && deleteJadwal.nama_guru ? (
              <p className="desc-Delete">
                {deleteJadwal.nama_guru} // {deleteJadwal.nama_mapel}
              </p>
            ) : (
              <p className="desc-Delete">
                Tunggu Sebentar,Data Sedang Dalam Proses...
              </p>
            )}
            <div className="con-btn-Delete">
              <button
                type="button"
                className="btn-batal"
                onClick={closeDeletePopup}
              >
                Batal
              </button>
              <button
                type="button"
                className="btn-delete"
                onClick={handleDelete}
              >
                Hapus
              </button>
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

        <div id="popup-success">
          <div className="detail-success">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeSuccess}
            />
            <div className="image-success">
              <img
                src={ImgSuccess}
                alt="Delete Success"
                className="img-success"
              />
            </div>
            <p className="desc-success">Data Berhasil Di Hapus!!!</p>
            <button className="btn-success" onClick={closeSuccess}>
              Kembali
            </button>
          </div>
        </div>

        <div id="popup-Failed">
          <div className="detail-Failed">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeFailed}
            />
            <div className="image-Failed">
              <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
            </div>
            <p className="desc-Failed">Data Gagal Di Hapus!!!</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
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

        <div className="popup-loading" id="popup-loadingDetail">
          <div className="body-loadingDetail" id="body-loadingDetail">
            <h2 class="animate-loadingDetail">Loading</h2>
            <p>Data Sedang Di Proses...</p>
          </div>
        </div>
        {/* end loading */}
      </div>
    );
}

export default EditFormAddJadwal;
