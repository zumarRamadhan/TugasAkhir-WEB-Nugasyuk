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
import ImgDelete from "../assets/imgDelete.svg";
import axios from "axios";

function Pagekelas() {
  const navText = "Kelas";
  const navigate = useNavigate();
  const [detailKelas, setDetailKelas] = useState([]);

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
  // const [active, setActive] = useState();
  // const [selected, setSelected] = useState();

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

  const showDeletePopup = () => {
    const background = document.querySelector("#popup-Delete");
    background.style.display = "flex";
    const popupDelete = document.querySelector(".detail-Delete");
    popupDelete.style.display = "block";
    popupDelete.style.animation = "slide-down 0.3s ease-in-out";

    setDetailKelas(null);

    axios
      .get("https://www.nugasyuk.my.id/api/admin/kelas/" + selected, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        setDetailKelas(responseAPI.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://www.nugasyuk.my.id/api/admin/kelas/${selected}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        // Penanganan ketika penghapusan berhasil
        console.log("Data berhasil dihapus");
        // Refresh halaman atau ambil ulang data setelah penghapusan
        window.location.reload();
      })
      .catch((error) => {
        // Penanganan ketika terjadi kesalahan saat menghapus data
        console.log("Terjadi kesalahan saat menghapus data:", error);
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

  const saveToken = sessionStorage.getItem("token");

  const [dataCardKelas, setDataCardKelas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [dataKelas, setDataKelas] = useState({});

  const handleEditClick = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman form edit
    navigate(`/admin/pagekelas/edit/${id}`);
    console.log(dataKelas);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(navigate.search);
    const id = searchParams.get("id");

    if (id) {
      setSelected(id);
    }
  }, [navigate.search]);

  useEffect(() => {
    axios
      .get("https://www.nugasyuk.my.id/api/admin/kelas", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataCardKelas(responseAPI.data);
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
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    // setFilterValue(e.target.value);
    // jika filter value nya tidak ada maka akan menampilkan data not found
    setFilterValue(e.target.value);
  };
  console.log("filter value", dataCardKelas);

  const renderData = filteredData.length > 0 ? filteredData : dataCardKelas;
  const dataNotFound =
    searchQuery !== "" && filteredData.length === 0 && !isLoading;

  if (isLoading) {
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  } else if (dataCardKelas && !isError)
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
                <button
                  className="btn-add-kelas"
                  onClick={() => navigate("/admin/pagekelas/add")}
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
              <div className="header-kelas-right">
                <p className="detail-jumlah-kelas">
                  <span>25</span> Kelas
                </p>
              </div>
            </div>

            {dataNotFound ? (
              <div className="dataNotFound">
                <h2>Data Tidak Ditemukan</h2>
              </div>
            ) : (
              <div className="content-kelas">
                {renderData.map((kelas, index) => (
                  <div key={index} className="card-kelas">
                    <div className="icon-card-kelas">
                      <Icon icon="fluent:class-24-regular" width="40" />
                    </div>

                    <div className="con-card-right-kelas">
                      <div className="con-card-left-kelas">
                        <p className="title-card-kelas">Kelas</p>
                        <p className="value-card-kelas">
                          {kelas.tingkat_ke +
                            " " +
                            kelas.nama_jurusan.toUpperCase() +
                            " " +
                            kelas.nama_kelas}
                        </p>
                      </div>
                      <div className="detail-kelas">
                        <div className="card-content-kelas-right">
                          <button id="popup-button-kelas">
                            <Icon
                              icon="mi:options-vertical"
                              width="40"
                              color="#2A93D5"
                              onClick={() => handleToggle(kelas.id)}
                            />
                          </button>
                        </div>
                        <div
                          id="popup-menu-guruAdmin"
                          //   className="popup-menu-guruAdmin"
                          className={`popup-menu-guruAdmin ${
                            selected === kelas.id && active ? "active" : ""
                          }`}
                        >
                          <ul>
                            <li>
                              <a onClick={() => handleEditClick(kelas.id)}>
                                Edit
                              </a>
                            </li>
                            <li>
                              <a onClick={showDeletePopup}>Hapus</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            {detailKelas && detailKelas.nama_jurusan ? (
            <p className="desc-Delete">
              {detailKelas.tingkat_ke +
                " " +
                detailKelas.nama_jurusan.toUpperCase() +
                " " +
                detailKelas.nama_kelas}
            </p>
            ) : (
              <p className="desc-Delete">Tunggu Sebentar,Data Sedang Dalam Proses...</p>
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
      </div>
    );
}

export default Pagekelas;
