import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../cssAll/murid/RiwayatKonseling.css";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState } from "react";
import CardChat from "../assets/card-chat-bk.svg";
import CardCounseling from "../assets/card-counseling.svg";
import ProfilBk from "../assets/profil-bk.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import axios from "axios";

function RiwayatKonseling() {
  const navigate = useNavigate();

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

  const handleEditClick = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman form edit
    navigate(`/admin/pageguru/edit/${id}`);
    console.log("");
  };

  const handleToggle = (e) => {
    setActive(!active);
    setSelected(e);
  };

  const showDeletePopup = () => {
    const background = document.querySelector("#popup-Delete");
    background.style.display = "flex";
    const popupDelete = document.querySelector(".detail-Delete");
    popupDelete.style.display = "block";
    popupDelete.style.animation = "slide-down 0.3s ease-in-out";

    // setDetailGuru(null);

    axios
      .get("https://www.nugasyuk.my.id/api/admin/guru/" + selected, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        // setDetailGuru(responseAPI.data);
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
      .delete(`https://www.nugasyuk.my.id/api/admin/guru/${selected}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        // Penanganan ketika penghapusan berhasil
        console.log("Data berhasil dihapus");
        closeDeletePopup();
        showSuccessDelete();
      })
      .catch((error) => {
        // Penanganan ketika terjadi kesalahan saat menghapus data
        console.log("Terjadi kesalahan saat menghapus data:", error);
        showFailedDelete();
        closeDeletePopup();
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

  const showSuccessDelete = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showFailedDelete = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  return (
    <div>
      <aside>
        <h1
          className="title-form-login"
          onClick={() => navigate("/murid/berandamurid")}
        >
          <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
          nugasyuk
        </h1>
        <ul>
          <li onClick={() => navigate("/murid/berandamurid")}>
            <Icon icon="iconoir:home-simple" width="20" />
            Beranda
          </li>
          <li onClick={() => navigate("/murid/pagetugas")}>
            <Icon
              icon="fluent:clipboard-bullet-list-rtl-20-regular"
              width="25"
            />
            Tugas
          </li>
          <li onClick={() => navigate("/murid/pagekbm")}>
            <Icon icon="uiw:date" width="18" />
            Jadwal KBM
          </li>
          <li onClick={() => navigate("/murid/pagemapel")}>
            <Icon icon="fluent-mdl2:education" width="18" />
            Mata Pelajaran
          </li>
          <li
            className="active"
            onClick={() => navigate("/murid/pagekonseling")}
          >
            <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
            Konseling
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <NavbarMurid textNavigasi={"Riwayat Janji Konseling"} />
        <div className="main">
          <div className="con-content-history-counseling">
            <div className="content-history-promise-counseling">
              <p className="text-promise-counseling">
                Janji konseling dengan guru BK :
              </p>
              <div className="card-promise-counseling">
                <div className="header-profile-teacher-bk">
                  <div className="profile-teacher-bk">
                    <img src={ProfilBk} alt="" className="img-teacher-bk" />
                    <p className="name-teacher-bk">Sumijah, S.Pd</p>
                  </div>
                  <div className="icon-option-promise-counseling">
                    <Icon icon="mi:options-vertical" width="30" />
                    <div
                      id="popup-menu-guruAdmin"
                      //   className="popup-menu-guruAdmin"
                      className={`popup-menu-guruAdmin ${
                        selected === active ? "active" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <a onClick={() => handleEditClick()}>Edit</a>
                        </li>
                        <li>
                          <a onClick={showDeletePopup}>Hapus</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="topics-counseling">
                  Topik : <span>Kuliah setelah SMK</span>
                </p>
                <div className="information-promise-counseling">
                  <div className="counseling-date">
                    <Icon icon="uiw:date" width="15" />
                    <p>Kam, 2 April 2023</p>
                  </div>
                  <div className="counseling-time">
                    <Icon
                      icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                      width="15"
                    />
                    <p>Jam 4</p>
                  </div>
                  <div className="counseling-location">
                    <Icon
                      icon="material-symbols:location-on-outline-rounded"
                      width="15"
                    />
                    <p>Ruang BK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-history-promise-counseling">
              <p className="text-promise-counseling">
                Riwayat janji konseling dengan guru BK :
              </p>
              <div className="card-promise-counseling">
                <div className="profile-teacher-bk">
                  <img src={ProfilBk} alt="" className="img-teacher-bk" />
                  <p className="name-teacher-bk">Sumijah, S.Pd</p>
                </div>
                <p className="topics-history-counseling">
                  Topik : <span>Kuliah setelah SMK</span>
                </p>
                <div className="information-promise-history-counseling">
                  <div className="counseling-date">
                    <Icon icon="uiw:date" width="15" />
                    <p>Kam, 2 April 2023</p>
                  </div>
                  <div className="counseling-time">
                    <Icon
                      icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                      width="15"
                    />
                    <p>Jam 4</p>
                  </div>
                  <div className="counseling-location">
                    <Icon
                      icon="material-symbols:location-on-outline-rounded"
                      width="15"
                    />
                    <p>Ruang BK</p>
                  </div>
                </div>
              </div>

              <div className="card-promise-counseling">
                <div className="profile-teacher-bk">
                  <img src={ProfilBk} alt="" className="img-teacher-bk" />
                  <p className="name-teacher-bk">Sumijah, S.Pd</p>
                </div>
                <p className="topics-history-counseling">
                  Topik : <span>Kuliah setelah SMK</span>
                </p>
                <div className="information-promise-history-counseling">
                  <div className="counseling-date">
                    <Icon icon="uiw:date" width="15" />
                    <p>Kam, 2 April 2023</p>
                  </div>
                  <div className="counseling-time">
                    <Icon
                      icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                      width="15"
                    />
                    <p>Jam 4</p>
                  </div>
                  <div className="counseling-location">
                    <Icon
                      icon="material-symbols:location-on-outline-rounded"
                      width="15"
                    />
                    <p>Ruang BK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProfileSiswa />

      <NotifSiswa />
    </div>
  );
}

export default RiwayatKonseling;
