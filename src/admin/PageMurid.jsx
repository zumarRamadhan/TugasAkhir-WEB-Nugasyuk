import "../cssAll/admin/DataMurid.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Navigation from "../component/NavigationBar";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import { useNavigate, Link } from "react-router-dom";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import iconaksi from "../assets/iconaksi.svg";
import ImgDelete from "../assets/imgDelete.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import vektorProfile from "../assets/vektorProfile.svg";
import axios from "axios";
import apiurl from "../api/api";

function DataMurid() {
  const navText = "Data Murid";
  const navigate = useNavigate();
  const [detailMurid, setDetailMurid] = useState([]);
  const [isShowNotifSucces, setisShowNotifSucces] = useState(false);

  const showDetailPopup = () => {
    const background = document.querySelector(".popup-detailMurid");
    background.style.display = "flex";
    const popupDetail = document.querySelector(".detail-popup-detailMurid");
    popupDetail.style.display = "block";
    popupDetail.style.animation = "slide-down 0.3s ease-in-out";

    setDetailMurid(null);
    showPopupLoadingDetail();
    axios
      .get(`${apiurl}admin/murid/` + selected, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        setDetailMurid(responseAPI.data);
        setIsLoading(false);
        closePopupLoadingDetail();
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  const closeDetailPopup = () => {
    const background = document.querySelector(".popup-detailMurid");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const popupDetail = document.querySelector(".detail-popup-detailMurid");
    setTimeout(() => (popupDetail.style.display = "none"), 250);
    popupDetail.style.animation = "slide-up 0.3s ease-in-out";
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

  // message

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
    window.location.reload();
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

  // end message

  const showDeletePopup = () => {
    const background = document.querySelector("#popup-Delete");
    background.style.display = "flex";
    const popupDelete = document.querySelector(".detail-Delete");
    popupDelete.style.display = "block";
    popupDelete.style.animation = "slide-down 0.3s ease-in-out";

    setDetailMurid(null);
    showPopupLoadingDetail();
    axios
      .get(`${apiurl}admin/murid/` + selected, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        setDetailMurid(responseAPI.data);
        setIsLoading(false);
        closePopupLoadingDetail();
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
      .delete(`${apiurl}admin/murid/${selected}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((response) => {
        // Penanganan ketika penghapusan berhasil
        console.log("Data berhasil dihapus");
        // Refresh halaman atau ambil ulang data setelah penghapusan
        // window.location.reload();
        // setisShowNotifSucces(true);
        showSuccess();
        closeDeletePopup();
        closePopupLoading();
      })
      .catch((error) => {
        // Penanganan ketika terjadi kesalahan saat menghapus data
        console.log("Terjadi kesalahan saat menghapus data:", error);
        showFailed();
        closeDeletePopup();
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

  const [dataTabelMurid, setDataTabelMurid] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [muridData, setMuridData] = useState({});

  const handleEditClick = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman form edit
    navigate(`/admin/pagemurid/edit/${id}`);
    console.log(muridData);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(navigate.search);
    const id = searchParams.get("id");

    if (id) {
      setSelected(id);
    }
  }, [navigate.search]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`${apiurl}admin/murid`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataTabelMurid(responseAPI.data);
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

  const handleToggle = (e) => {
    setActive(!active);
    setSelected(e);
  };

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
            value.nis &&
            value.nis.toLowerCase().includes(searchQuery.toLowerCase())) ||
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
    // jika filter value nya tidak ada maka akan menampilkan data not found
    setFilterValue(e.target.value);
  };
  console.log("filter value", dataTabelMurid);

  const renderData = filteredData.length > 0 ? filteredData : dataTabelMurid;
  const dataNotFound =
    searchQuery !== "" && filteredData.length === 0 && !isLoading;

  // if (isLoading) {
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  // } else
  if (dataTabelMurid && !isError)
    return (
      <div>
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
            <li className="active" onClick={() => navigate("/admin/pagemurid")}>
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
            <div className="header-murid">
              <div className="header-murid-left">
                <button
                  className="btn-add-murid"
                  onClick={() => navigate("/admin/pagemurid/add")}
                >
                  <Icon icon="ic:round-plus" width="20"></Icon>
                  <p>Tambah Data</p>
                </button>

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

                <form className="search-box" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Cari..."
                    value={searchQuery}
                    onChange={handleChange}
                  />
                  <button disabled="disabled">
                    <Icon
                      icon="material-symbols:search-rounded"
                      width="20"
                    ></Icon>
                  </button>
                </form>
              </div>
              <div className="header-murid-right">
                <p className="detail-jumlah-murid">
                  <span>{dataTabelMurid.length}</span> Murid
                </p>
              </div>
            </div>
            {/* jika data pada renderData kosong maka tampilkan dataNotFound */}
            {dataNotFound ? (
              <div className="dataNotFound">
                <h2>Data Tidak Ditemukan</h2>
              </div>
            ) : (
              <div className="container-table">
                <table className="content-table-murid">
                  <thead>
                    <tr>
                      <th>Foto</th>
                      <th>Nama</th>
                      <th>Email</th>
                      <th>NIS</th>
                      <th>Jurusan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderData.map((item, index) => (
                      <tr key={index} style={{ cursor: "pointer" }}>
                        <td className="tdImg">
                          <div className="img-td">
                            <img
                              src={`https://www.nugasyuk.my.id/public/${item.foto_profile}`}
                              alt={item.foto_profile}
                            />
                          </div>
                        </td>
                        <td>{item.nama_siswa}</td>
                        <td>{item.email}</td>
                        <td>{item.nis}</td>
                        <td>
                          <div className="jurusan">
                            {item.nama_jurusan.toUpperCase()}
                          </div>
                        </td>
                        <td>
                          <img
                            src={iconaksi}
                            alt=""
                            onClick={() => handleToggle(item.id)}
                          />
                          <div
                            id="popup-menu-guruAdmin"
                            //   className="popup-menu-guruAdmin"
                            className={`popup-menu-guruAdmin ${
                              selected === item.id && active ? "active" : ""
                            }`}
                          >
                            <ul>
                              <li>
                                <a onClick={showDetailPopup}>Detail</a>
                              </li>
                              <li>
                                <a onClick={() => handleEditClick(item.id)}>
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a onClick={showDeletePopup}>Hapus</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </main>
        </div>

        <div className="popup-detailMurid">
          <div className="detail-popup-detailMurid">
            <div className="navbar-detail-detailMurid">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer" }}
                onClick={closeDetailPopup}
              />
              {detailMurid && detailMurid.nama_panggilan ? (
                <h2>{detailMurid.nama_panggilan}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
              <div className="divKosong"></div>
            </div>
            <div className="con-popup-detailMurid">
              <div className="img-detailMurid">
                {detailMurid && detailMurid.foto_profile ? (
                  <img
                    src={`https://www.nugasyuk.my.id/public/${detailMurid.foto_profile}`}
                    alt="foto profile ${detailMurid.foto_profile}"
                    className="image-detailMurid"
                  />
                ) : (
                  <img
                    src={vektorProfile}
                    alt="foto profile ${detailMurid.foto_profile}"
                    className="image-detailMurid"
                  />
                )}
              </div>
              <h3>Nama :</h3>
              {detailMurid && detailMurid.nama_siswa ? (
                <p className="nama-detailMurid">{detailMurid.nama_siswa}</p>
              ) : (
                <p className="nama-detailMurid">Data Sedang Dalam Proses...</p>
              )}
              <h3>Nama Panggilan :</h3>
              {detailMurid && detailMurid.nama_panggilan ? (
                <p className="nama-detailMurid">{detailMurid.nama_panggilan}</p>
              ) : (
                <p className="nama-detailMurid">Data Sedang Dalam Proses...</p>
              )}
              <h3>Jurusan :</h3>
              {detailMurid && detailMurid.jurusan ? (
                <p className="jurusan-detailMurid">
                  {detailMurid.jurusan.toUpperCase()}
                </p>
              ) : (
                <p className="jurusan-detailMurid">
                  Data Sedang Dalam Proses...
                </p>
              )}
              <h3>Kelas :</h3>
              {detailMurid && detailMurid.jurusan ? (
                <p className="kelas-detailMurid">
                  {detailMurid.tingkat_ke +
                    " " +
                    detailMurid.jurusan.toUpperCase() +
                    " " +
                    detailMurid.kelas}
                </p>
              ) : (
                <p className="kelas-detailMurid">Data Sedang Dalam Proses...</p>
              )}
              <h3>Email :</h3>
              {detailMurid && detailMurid.email ? (
                <p className="email-detailMurid">{detailMurid.email}</p>
              ) : (
                <p className="email-detailMurid">Data Sedang Dalam Proses...</p>
              )}
              <h3>Email Orang Tua:</h3>
              {detailMurid && detailMurid.email_wali_murid ? (
                <p className="email-detailMurid">
                  {detailMurid.email_wali_murid}
                </p>
              ) : (
                <p className="email-detailMurid">Data Sedang Dalam Proses...</p>
              )}
              <h3>NIS :</h3>
              {detailMurid && detailMurid.nis ? (
                <p className="niy-detailMurid">{detailMurid.nis}</p>
              ) : (
                <p className="niy-detailMurid">Data Sedang Dalam Proses...</p>
              )}
              <h3>Alamat :</h3>
              {detailMurid && detailMurid.alamat ? (
                <p className="alamat-detailMurid">{detailMurid.alamat}</p>
              ) : (
                <p className="alamat-detailMurid">
                  Data Sedang Dalam Proses...
                </p>
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
              <button type="button" className="btn-keluar">
                Keluar
              </button>
            </div>
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
            {detailMurid && detailMurid.nama_siswa ? (
              <p className="desc-Delete">{detailMurid.nama_siswa}</p>
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

        {/* {isShowNotifSucces && ( */}
        <div id="popup-success">
          <div className="detail-success">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeSuccess}
            />
            <div className="image-success">
              <img src={ImgSuccess} alt="Success" className="img-success" />
            </div>
            <p className="desc-success">Data Berhasil Di Hapus</p>
            <button className="btn-success" onClick={closeSuccess}>
              Kembali
            </button>
          </div>
        </div>
        {/* )} */}

        <div id="popup-Failed">
          <div className="detail-Failed">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeFailed}
            />
            <div className="image-Failed">
              <img src={ImgFailed} alt="Failed" className="img-Failed" />
            </div>
            <p className="desc-Failed">Data Gagal Di Hapus</p>
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

export default DataMurid;
