import "../cssAll/murid/BuatJanji.css";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import { useState } from "react";
import Calendar from "react-calendar";
import CardChat from "../assets/card-chat-bk.svg";
import CardCounseling from "../assets/card-counseling.svg";
import ProfilBk from "../assets/profil-bk.svg";
// import AssetsCalendar from '../assets/79891-calendar.gif';
import "react-calendar/dist/Calendar.css";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";

function BuatJanji() {
  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());

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
        <NavbarMurid textNavigasi={"Buat Janji"} />
        <div className="main">
          <div className="con-content-promaise-counseling">
            <div className="content-promise-counseling">
              <div className="card-profile-teacher-bk">
                <img src={ProfilBk} alt="" className="img-bk-teacher" />
                <p className="name-bk-teacher">Sumijah, S.Pd</p>
                <p className="teach">Guru BK PPLG</p>
              </div>
              <div className="card-calendar">
                <div className="calendar">
                  <div className="calendar-container">
                    <Calendar onChange={setDate} value={date} />
                  </div>
                  {/* <p className='text-center date-selected'>
                                        <span className='bold'>Tanggal Dipilih:</span>{' '}
                                        {date.toDateString()}
                                    </p> */}
                </div>
              </div>
              <div className="card-date-time">
                <p className="date-selected"> {date.toDateString()}</p>
                <p className="text-select-time">Pilih jam konseling :</p>
                <div className="time-promise-counseling">
                  <button className="btn-time-counseling">Jam 1</button>
                  <button className="btn-time-counseling">Jam 2</button>
                  <button className="btn-time-counseling">Jam 3</button>
                  <button className="btn-time-counseling">Jam 4</button>
                  <button className="btn-time-counseling">Jam 5</button>
                  <button className="btn-time-counseling selected">
                    Jam 6
                  </button>
                  <button className="btn-time-counseling selected">
                    Jam 7
                  </button>
                  <button className="btn-time-counseling selected">
                    Jam 8
                  </button>
                  <button className="btn-time-counseling">Jam 9</button>
                  <button className="btn-time-counseling">Jam 10</button>
                </div>
                <div className="color-status-promise-counseling">
                  <div className="status-not-selected">
                    <div className="rectangle-not-selected"></div>
                    <p className="text-status-not-selected">Belum dipilih</p>
                  </div>
                  <div className="status-selected">
                    <div className="rectangle-selected"></div>
                    <p className="text-status-selected">Sudah dipilih</p>
                  </div>
                </div>
                <div className="dropdown-location-counseling">
                  <select
                    id="location-counseling"
                    name="location-counseling"
                    className="dropdown-counseling"
                  >
                    <option value="location" selected>
                      Tempat Konseling
                    </option>
                    <option value="location">Ruang BK</option>
                    <option value="location">Ruang VR</option>
                    <option value="location">Ruang Guru</option>
                  </select>
                </div>
                <div className="form-topic-counseling">
                  <form className="form-topic">
                    <input
                      type="text"
                      placeholder="Topik yang ingin ditanyakan"
                    />
                  </form>
                </div>
                <button className="btn-submit-promise-counseling">
                  Buat janji
                </button>
                {/* <img src={AssetsCalendar} alt="" className="gif-calendar" />
                                <p className='text-desc-date'>Mohon pilih tanggal konseling terlebhi dahulu</p> */}
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

export default BuatJanji;
