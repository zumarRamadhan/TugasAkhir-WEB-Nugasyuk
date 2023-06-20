import "../cssAll/admin/MataPelajaran.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import Navigation from "../component/NavigationBar";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgDelete from "../assets/imgDelete.svg";
import { useState, useEffect } from "react";
import axios from "axios";

function MataPelajaran() {
  const navText = "Mata Pelajaran";
  const navigate = useNavigate();
  const [detailMapel, setDetailMapel] = useState([]);
  // const source = axios.CancelToken.source();

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

  const showDeletePopup = (id) => {
    setCurrentMapel(id);
    const background = document.querySelector("#popup-Delete");
    background.style.display = "flex";
    const popupDelete = document.querySelector(".detail-Delete");
    popupDelete.style.display = "block";
    popupDelete.style.animation = "slide-down 0.3s ease-in-out";

    setDetailMapel(null);

    axios
      .get("https://www.nugasyuk.my.id/api/admin/mapel/" + currentHover, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        setDetailMapel(responseAPI.data);
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
      .delete(`https://www.nugasyuk.my.id/api/admin/mapel/${currentMapel}`, {
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

  const [dataCardMapel, setDataCardMapel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [dataMapel, setDataMapel] = useState({});
  const [currentHover, setCurrentHover] = useState(null);
  const [currentMapel, setCurrentMapel] = useState(null);

  const handleEditClick = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman form edit
    navigate(`/admin/matapelajaran/edit/${id}`);
    console.log(dataMapel);
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
      .get("https://www.nugasyuk.my.id/api/admin/mapel", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataCardMapel(responseAPI.data);
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

    const filteredData = dataCardMapel.filter((value) => {
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
  console.log("filter value", dataCardMapel);

  const renderData = filteredData.length > 0 ? filteredData : dataCardMapel;
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
  } else if (dataCardMapel && !isError)
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
          <li
            className="active"
            onClick={() => navigate("/admin/matapelajaran")}
          >
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
          <div className="header-mapel">
            <div className="header-mapel-left">
              <button className="btn-add-mapel" onClick={() => navigate("/admin/matapelajaran/add")}>
                <Icon icon="ic:round-plus" width="20"></Icon>
                <p>Tambah Data</p>
              </button>

              <select
                id="mapel"
                name="mapel"
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
          </div>

          <div className="content-mapel">
          {dataNotFound ? (
              <div className="dataNotFound">
                <h2>Data Tidak Ditemukan</h2>
              </div>
            ) : (
            <div className="con-card-mapel">
              {renderData.map((data) => (
                <div
                  className="card-mapel"
                  key={data.id}
                  onMouseEnter={() => setCurrentHover(data.id)}
                  onMouseLeave={() => setCurrentHover(null)}
                >
                  <img src={`https://www.nugasyuk.my.id/public/${data.file_asset}`} alt="" className="image-card-mapel" />
                  <div className="content-card-mapel">
                    <div className="card-mapel-left">
                      <p className="mata-pelajaran">{data.nama_mapel}</p>
                      <p className="nama-guru-mapel">{data.nama_guru}</p>
                    </div>
                    <div className="kelas-mapel">{`${
                      data.tingkat_ke
                    } ${data.nama_jurusan.toUpperCase()} ${data.nama_kelas}`}</div>
                  </div>
                  {currentHover === data.id && (
                    <div className="hover-card-mapel">
                      <div className="con-btn-card-mapel">
                        <button className="btn-edit-mapel" onClick={() => handleEditClick(data.id)}>
                          <Icon
                            icon="material-symbols:edit-outline-rounded"
                            width="20"
                          />
                        </button>
                        <button className="btn-delete-mapel" onClick={() => showDeletePopup(data.id)}>
                          <Icon
                            icon="material-symbols:delete-outline-rounded"
                            width="20"
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            )}
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
            {detailMapel && detailMapel.nama_mapel && detailMapel.nama_guru ? (
            <p className="desc-Delete">{detailMapel.nama_mapel} // {detailMapel.nama_guru}</p>
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
          <button className="logout" id="btn-logout" onClick={showLogoutPopup}>
            <Icon icon="material-symbols:logout-rounded" width="30" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MataPelajaran;
