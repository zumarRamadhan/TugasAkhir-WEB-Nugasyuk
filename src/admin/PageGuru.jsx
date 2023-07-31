import "../cssAll/admin/DataGuru.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import Navigation from "../component/NavigationBar";
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
// import { useHistory } from "react-router-dom";

function BerandaGuru() {
  const navText = "Data Guru";
  const navigate = useNavigate();
  const [detailGuru, setDetailGuru] = useState([]);

  const saveToken = sessionStorage.getItem("token");

  const [dataTabelGuru, setDataTabelGuru] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [guruData, setGuruData] = useState({});

  function getGuru() {
    axios
      .get(`${apiurl}admin/guru`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataTabelGuru(responseAPI.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }

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

  // massege

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

  const showSuccessDelete = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showSuccessAddCode = () => {
    const popupLogout = document.querySelector("#popup-success-addCode");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    const messageCode = document.querySelector("#popup-success-addCode");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    setTimeout(() => (messageCode.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    messageCode.style.animation = "slide-up 0.3s ease-in-out";
    window.location.reload();
  };

  // end massege

  const showFailedDelete = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showFailedAddCode = () => {
    const popupLogout = document.querySelector("#popup-Failed-addCode");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeFailed = () => {
    const messageDelete = document.querySelector("#popup-Failed"); 
    const messageCode = document.querySelector("#popup-Failed-addCode");
    setTimeout(() => (messageDelete.style.display = "none"), 250);
    setTimeout(() => (messageCode.style.display = "none"), 250);
    messageDelete.style.animation = "slide-up 0.3s ease-in-out";
    messageCode.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showDeletePopup = () => {
    const background = document.querySelector("#popup-Delete");
    background.style.display = "flex";
    const popupDelete = document.querySelector(".detail-Delete");
    popupDelete.style.display = "block";
    popupDelete.style.animation = "slide-down 0.3s ease-in-out";

    setDetailGuru(null);
    showPopupLoadingDetail();
    axios
      .get(`${apiurl}admin/guru/` + selected, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        setDetailGuru(responseAPI.data);
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
      .delete(`${apiurl}admin/guru/${selected}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((response) => {
        // Penanganan ketika penghapusan berhasil
        console.log("Data berhasil dihapus");
        closeDeletePopup();
        showSuccessDelete();
        closePopupLoading();
      })
      .catch((error) => {
        // Penanganan ketika terjadi kesalahan saat menghapus data
        console.log("Terjadi kesalahan saat menghapus data:", error);
        showFailedDelete();
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

  const showDetailPopup = () => {
    const background = document.querySelector(".popup-detailGuru");
    background.style.display = "flex";
    const popupDetail = document.querySelector(".detail-popup-detailGuru");
    popupDetail.style.display = "block";
    popupDetail.style.animation = "slide-down 0.3s ease-in-out";

    setDetailGuru(null);
    showPopupLoadingDetail();

    axios
      .get(`${apiurl}admin/guru/` + selected, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        setDetailGuru(responseAPI.data);
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
    const background = document.querySelector(".popup-detailGuru");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const popupDetail = document.querySelector(".detail-popup-detailGuru");
    setTimeout(() => (popupDetail.style.display = "none"), 250);
    popupDetail.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showKodePopup = () => {
    const background = document.querySelector("#popup-Kode");
    background.style.display = "flex";
    const popupKode = document.querySelector(".detail-Kode");
    popupKode.style.display = "block";
    popupKode.style.animation = "slide-down 0.3s ease-in-out";

    setDetailGuru(null);
    showPopupLoadingDetail();

    axios
      .get(`${apiurl}admin/guru/` + selected, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        setDetailGuru(responseAPI.data);
        closePopupLoadingDetail();
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        // setIsError(true);
        // setIsLoading(false);
      });
  };

  const closeKodePopup = () => {
    const background = document.querySelector("#popup-Kode");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const popupKode = document.querySelector(".detail-Kode");
    setTimeout(() => (popupKode.style.display = "none"), 250);
    popupKode.style.animation = "slide-up 0.3s ease-in-out";
    // jika di close maka #inpurKode dan #inputMapel akan di clear
    const clearKode = document.querySelector("#inputKode");
    clearKode.value = "";
    const clearMapel = document.querySelector("#inputMapel");
    clearMapel.value = "";
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
  //   const [active, setActive] = useState();
  //   const [selected, setSelected] = useState();

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

  // const navigate = useNavigate();

  // const handleEditClick = (id) => {
  //   setSelected(id);
  //   navigate(`/admin/pageguru/edit?id=${id}`);
  // };

  const handleEditClick = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman form edit
    navigate(`/admin/pageguru/edit/${id}`);
    console.log(guruData);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(navigate.search);
    const id = searchParams.get("id");

    if (id) {
      setSelected(id);
    }
  }, [navigate.search]);

  // start kodeGuru

  const [formKode, setFormKode] = useState({
    kode_guru: "",
    nama_mapel: "",
    status_mapel: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormKode((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formKode);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      showPopupLoading();
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.kode_guru) {
      errors.kode_guru = "Kode Guru harus diisi";
    }

    if (!data.nama_mapel) {
      errors.nama_mapel = "Nama Mapel harus diisi";
    }

    if (!data.status_mapel) {
      errors.status_mapel = "Harus memilih status mapel";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmitting) {
      const formData = new FormData();
      formData.append("kode_guru", formKode.kode_guru);
      formData.append("nama_mapel", formKode.nama_mapel);
      formData.append("status_mapel", formKode.status_mapel);

      axios
        .post(
          `${apiurl}admin/kode/${selected}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${saveToken}`,
              "ngrok-skip-browser-warning":"any"
            },
          }
        )
        .then((result) => {
          console.log("Data berhasil ditambahkan");
          // Lakukan tindakan refresh window
          // window.location.reload();
          showSuccessAddCode();
          closeKodePopup();
          closePopupLoading();
          // navigate("/admin/pageguru");

          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setFormKode({
            kode_guru: "",
            nama_mapel: "",
            status_mapel: "",
          });

          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menambahkan data:", error);
          setErrors({ submit: "Terjadi kesalahan saat menambahkan data" });
          setIsSubmitting(false);
          showFailedAddCode();
          closePopupLoading();
        });
    }
  }, [isSubmitting, formKode]);

  // end kodeGuru

  useEffect(() => {
    getGuru();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, filterValue]);

  const handleToggle = (e) => {
    setActive(!active);
    setSelected(e);
  };

  const handleSearch = () => {
    const filteredData = dataTabelGuru.filter((value) => {
      // const lowerCaseSearchQuery = searchQuery.toLowerCase();
      const lowerCaseStatusMapel = value.status_mapel
        ? value.status_mapel.toLowerCase()
        : "";

      return (
        (filterValue === "all" || filterValue === lowerCaseStatusMapel) &&
        ((value &&
          value.nama_guru &&
          value.nama_guru.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (value &&
            value.email &&
            value.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (value &&
            value.niy &&
            value.niy.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (value &&
            value.status_mapel &&
            value.status_mapel
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
    // setFilterValue(e.target.value);
    // jika filter value nya tidak ada maka akan menampilkan data not found
    setFilterValue(e.target.value);
  };
  console.log("filter value", dataTabelGuru);

  const renderData = filteredData.length > 0 ? filteredData : dataTabelGuru;
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
  if (dataTabelGuru && !isError)
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
            <li className="active" onClick={() => navigate("/admin/pageguru")}>
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
            <div className="header-guru">
              <div className="header-guru-left">
                <button
                  className="btn-add-guru"
                  onClick={() => navigate("/admin/pageguru/add")}
                >
                  <Icon icon="ic:round-plus" width="20"></Icon>
                  <p>Tambah Data</p>
                </button>
                <select
                  id="filter"
                  value={filterValue}
                  onChange={handleFilterChange}
                >
                  <option value="all">-- Semua Guru --</option>
                  <option value="produktif">Guru Produktif</option>
                  <option value="normadaf">Guru Normadaf</option>
                  <option value="bk">Guru BK</option>
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
              <div className="header-guru-right">
                <p className="detail-jumlah-guru">
                  <span>{renderData.length}</span> Guru
                </p>
              </div>
            </div>

            {dataNotFound ? (
              <div className="dataNotFound">
                <h2>Data Tidak Ditemukan</h2>
              </div>
            ) : (
              <div className="container-table">
                <table className="content-table-guru">
                  <thead>
                    <tr>
                      <th>Foto</th>
                      <th>Nama</th>
                      <th>Email</th>
                      <th>NIY</th>
                      <th>Pengampu</th>
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
                        <td>{item.nama_guru}</td>
                        <td>{item.email}</td>
                        <td>{item.niy}</td>

                        <td>
                          <div className="pengampu">
                            {item.status_mapel
                              ? item.status_mapel.toUpperCase()
                              : "-"}
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
                              <li>
                                <a onClick={showKodePopup}>Tambah Kode</a>
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

        <div className="popup-detailGuru">
          <div className="detail-popup-detailGuru">
            <div className="navbar-detail-detailGuru">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer" }}
                onClick={closeDetailPopup}
              />
              {detailGuru && detailGuru.nama_guru ? (
                <h2>{detailGuru.nama_guru}</h2>
              ) : (
                <h2>Loading...</h2>
              )}
              <div className="divKosong"></div>
            </div>
            <div className="con-popup-detailGuru">
              <div className="img-detailGuru">
                {detailGuru && detailGuru.foto_profile ? (
                  <img
                    src={`https://www.nugasyuk.my.id/public/${detailGuru.foto_profile}`}
                    alt="foto profile ${detailGuru.foto_profile}"
                    className="image-detailGuru"
                  />
                ) : (
                  <img
                    src={vektorProfile}
                    alt="foto profile ${detailGuru.foto_profile}"
                    className="image-detailGuru"
                  />
                )}
              </div>
              <h3>Nama :</h3>
              {detailGuru && detailGuru.nama_guru ? (
                <p className="nama-detailGuru">{detailGuru.nama_guru}</p>
              ) : (
                <p className="nama-detailGuru">Data Sedang Dalam Proses...</p>
              )}
              <h3>Email :</h3>
              {detailGuru && detailGuru.email ? (
                <p className="email-detailGuru">{detailGuru.email}</p>
              ) : (
                <p className="email-detailGuru">Data Sedang Dalam Proses...</p>
              )}
              <h3>Nomor Telp :</h3>
              {detailGuru && detailGuru.nomor_tlp ? (
                <p className="nomor-detailGuru">{detailGuru.nomor_tlp}</p>
              ) : (
                <p className="nomor-detailGuru">Data Sedang Dalam Proses...</p>
              )}
              <h3>NIY :</h3>
              {detailGuru && detailGuru.niy ? (
                <p className="niy-detailGuru">{detailGuru.niy}</p>
              ) : (
                <p className="niy-detailGuru">Data Sedang Dalam Proses...</p>
              )}
              <h3>Alamat :</h3>
              {detailGuru && detailGuru.alamat ? (
                <p className="alamat-detailGuru">{detailGuru.alamat}</p>
              ) : (
                <p className="alamat-detailGuru">Data Sedang Dalam Proses...</p>
              )}
              <h3>Mengajar :</h3>
              {detailGuru && detailGuru.mengajar ? (
                <div className="con-mengajar-detailGuru">
                  {detailGuru.mengajar?.map((item, index) => (
                    <p key={index} className="mengajar-detailGuru">
                      {item.nama_mapel}
                    </p>
                  ))}
                  {detailGuru.mengajar.length === 0 && (
                    <p className="mengajar-detailGuru">Data Kosong</p>
                  )}
                </div>
              ) : (
                <div className="con-mengajar-detailGuru">
                  <p className="mengajar-detailGuru">
                    Data Sedang Dalam Proses...
                  </p>
                </div>
              )}

              <h3>Kode :</h3>
              {detailGuru && detailGuru.kode ? (
                <div className="con-kode-detailGuru">
                  {detailGuru.kode?.map((item, index) => (
                    <p key={index} className="kode-detailGuru">
                      {item.kode_guru}
                    </p>
                  ))}
                  {detailGuru.kode.length === 0 && (
                    <p className="kode-detailGuru">Data Kosong</p>
                  )}
                </div>
              ) : (
                <div className="con-kode-detailGuru">
                  <p className="kode-detailGuru">Data Sedang Dalam Proses...</p>
                </div>
              )}

              <h3>Mengajar Kelas :</h3>
              {detailGuru && detailGuru.mengajar_kelas ? (
                <div className="con-mengajarkelas-detailGuru">
                  {detailGuru.mengajar_kelas?.map((item, index) => (
                    <p key={index} className="mengajarKelas-detailGuru">
                      {item.tingkat_ke +
                        " " +
                        item.nama_jurusan.toUpperCase() +
                        " " +
                        item.nama_kelas}
                    </p>
                  ))}
                  {detailGuru.mengajar_kelas.length === 0 && (
                    <p className="mengajarKelas-detailGuru">Data Kosong</p>
                  )}
                </div>
              ) : (
                <div className="con-mengajarkelas-detailGuru">
                  <p className="mengajarKelas-detailGuru">
                    Data Sedang Dalam Proses...
                  </p>
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
            {detailGuru && detailGuru.nama_guru ? (
              <p className="desc-Delete">{detailGuru.nama_guru}</p>
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

        <div className="popup-Kode" id="popup-Kode">
          <form onSubmit={handleSubmit} className="detail-Kode">
            <div className="navbar-detail-Kode">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer" }}
                onClick={closeKodePopup}
              />
              <h2>Tambah Kode Guru</h2>
              <div className="divKosong"></div>
            </div>
            <p className="judul-form">Nama Guru</p>
            {detailGuru && detailGuru.nama_guru ? (
              <input
                type="text"
                id=""
                value={detailGuru.nama_guru}
                disabled
                readOnly
                className="inputGuru"
              />
            ) : (
              <input
                type="text"
                id=""
                value="Data Sedang Dalam Proses..."
                disabled
                readOnly
                className="inputGuru"
              />
            )}

            <p className="judul-form">Kode Guru</p>
            <input
              type="text"
              id="inputKode"
              name="kode_guru"
              className="inputGuru"
              value={formKode.kode_guru}
              onChange={handleChanges}
            />
            {errors.kode_guru && (
              <span className="error">{errors.kode_guru}</span>
            )}

            <p className="judul-form">Mata Pelajaran</p>
            <input
              type="text"
              id="inputMapel"
              name="nama_mapel"
              className="inputGuru"
              value={formKode.nama_mapel}
              onChange={handleChanges}
            />
            {errors.nama_mapel && (
              <span className="error">{errors.nama_mapel}</span>
            )}

            <p className="judul-form">Status Mata Pelajaran</p>
            <div className="switch-inputKode">
              <div className="con-radio">
                <label>
                  <input
                    type="radio"
                    name="status_mapel"
                    value="produktif"
                    checked={formKode.status_mapel === "produktif"}
                    onChange={handleChanges}
                  />
                  produktif
                </label>
                <label>
                  <input
                    type="radio"
                    name="status_mapel"
                    value="normadaf"
                    checked={formKode.status_mapel === "normadaf"}
                    onChange={handleChanges}
                  />
                  normadaf
                </label>
                <label>
                  <input
                    type="radio"
                    name="status_mapel"
                    value="bk"
                    checked={formKode.status_mapel === "bk"}
                    onChange={handleChanges}
                  />
                  bk
                </label>
              </div>
              {errors.status_mapel && (
                <span className="error">{errors.status_mapel}</span>
              )}
            </div>
            <button type="submit" className="btn-sumbitKode">
              Tambah
            </button>
          </form>
        </div>

        {/* messege delete */}

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
            <p className="desc-success">Data Berhasil Di Hapus</p>
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
              <img
                src={ImgFailed}
                alt="Delete Failed"
                className="img-Failed"
              />
            </div>
            <p className="desc-Failed">Data Gagal Di Hapus</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        {/* end messege delete */}

        {/* message add kode */}

        <div id="popup-success-addCode">
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
            <p className="desc-success">Berhasil Menambahkan Kode Guru</p>
            <button className="btn-success" onClick={closeSuccess}>
              Kembali
            </button>
          </div>
        </div>

        <div id="popup-Failed-addCode">
          <div className="detail-Failed">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeFailed}
            />
            <div className="image-Failed">
              <img
                src={ImgFailed}
                alt="Delete Failed"
                className="img-Failed"
              />
            </div>
            <p className="desc-Failed">Gagal Menambahkan Kode Guru</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        {/* end message add kode */}

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
              <div className="divKosong"></div>
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

export default BerandaGuru;
