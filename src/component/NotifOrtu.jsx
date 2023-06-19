import "../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ImgProfil from "../assets/profil-walimurid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";

function NotifOrtu() {

  const closeDetailNotif = () => {
    const detailProfile = document.querySelector(".detail-notif");
    detailProfile.style.transform = "translateX(350px)";
  };

  const saveToken = sessionStorage.getItem("token");

  const [tugasSekarang, setTugasSekarang] = useState([]);
  const [tugasKemarin, setTugasKemarin] = useState([]);
  const [materiSekarang, setMateriSekarang] = useState([]);
  const [materiKemarin, setMateriKemarin] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/ortu/notifikasi", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        // const responseAPI = result.data;

        setTugasSekarang(result.data.data.tugas_sekarang);
        setTugasKemarin(result.data.data.tugas_kemarin);
        setMateriSekarang(result.data.data.materi_sekarang);
        setMateriKemarin(result.data.data.materi_kemarin);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="detail-notif">
        <div className="content-detail-notif">
          <div className="navbar-detail-notif">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer", color: "#4b4b4b" }}
              onClick={closeDetailNotif}
            />
            <h2>Notifikasi</h2>
          </div>
          <p className="day">Hari Ini</p>
          {tugasSekarang.map((item) => 
            <div className="notif">
            <div className="icon-notif">
              <Icon icon="tabler:clipboard-text" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>{item.nama_tugas}</p>
              </div>
              <div className="teacher">
                <p>{item.nama_guru}</p>
              </div>
            </div>
          </div>
          )}
          {materiSekarang.map((item) => 
            <div className="notif">
            <div className="icon-notif">
              <Icon icon="ri:book-line" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>{item.nama_materi}</p>
              </div>
              <div className="teacher">
                <p>{item.nama_guru}</p>
              </div>
            </div>
          </div>
          )}
  
          <p className="day">Kemarin</p>
          {tugasKemarin.map((item) => 
            <div className="notif">
            <div className="icon-notif">
              <Icon icon="tabler:clipboard-text" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>{item.nama_tugas}</p>
              </div>
              <div className="teacher">
                <p>{item.nama_guru}</p>
              </div>
            </div>
          </div>
          )}
          {materiKemarin.map((item) => 
            <div className="notif">
            <div className="icon-notif">
              <Icon icon="ri:book-line" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>{item.nama_materi}</p>
              </div>
              <div className="teacher">
                <p>{item.nama_guru}</p>
              </div>
            </div>
          </div>
          )}
          
          {/* <div className="notif">
            <div className="icon-notif">
              <Icon icon="tabler:clipboard-text" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>Sejarah Gojek</p>
              </div>
              <div className="teacher">
                <p>Rini, S.Pd</p>
              </div>
            </div>
          </div>
          <div className="notif">
            <div className="icon-notif">
              <Icon icon="ri:book-line" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>Sejarah Gojek</p>
              </div>
              <div className="teacher">
                <p>Rini, S.Pd</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NotifOrtu;
