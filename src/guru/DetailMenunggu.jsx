import "../cssAll/guru/DetailMenunggu.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarGuru from "../component/NavbarGuru";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState } from "react";
import ImgProfil from "../assets/profil-guru.svg";
import damiImgMurid from "../assets/damiImgMurid.png";

function DetailMenunggu() {
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

  const valueDataKelas = [
    {
      id: 1,
      kelas: "10",
      jurusan: "pplg",
      tingkatan: "1",
      // assets: cardMapel1,
    },
    {
      id: 2,
      kelas: "10",
      jurusan: "pplg",
      tingkatan: "2",
      // assets: cardMapel2,
    },
    {
      id: 3,
      kelas: "11",
      jurusan: "pplg",
      tingkatan: "1",
      // assets: cardMapel3,
    },
    {
      id: 4,
      kelas: "11",
      jurusan: "pplg",
      tingkatan: "2",
      // assets: cardMapel4,
    },
    {
      id: 5,
      kelas: "12",
      jurusan: "pplg",
      tingkatan: "1",
      // assets: cardMapel5,
    },
    {
      id: 6,
      kelas: "12",
      jurusan: "pplg",
      tingkatan: "2",
      // assets: cardMapel6,
    },
    {
      id: 7,
      kelas: "10",
      jurusan: "animasi",
      tingkatan: "1",
      // assets: cardMapel7,
    },
    {
      id: 8,
      kelas: "10",
      jurusan: "animasi",
      tingkatan: "2",
      // assets: cardMapel8,
    },
    {
      id: 9,
      kelas: "11",
      jurusan: "animasi",
      tingkatan: "1",
      // assets: cardMapel9,
    },
    {
      id: 10,
      kelas: "11",
      jurusan: "animasi",
      tingkatan: "2",
      // assets: cardMapel10,
    },
  ];

  const dayData = [
    {
      id: 1,
      hari: "Senin",
    },
    {
      id: 2,
      hari: "Selasa",
    },
    {
      id: 3,
      hari: "Rabu",
    },
    {
      id: 4,
      hari: "Kamis",
    },
    {
      id: 5,
      hari: "Jumat",
    },
    {
      id: 6,
      hari: "Sabtu",
    },
  ];

  const dataCardMurid = [
    {
      id: 1,
      imgProfile: damiImgMurid,
      name: "Ahmad Aziz Wira Widodo",
      email: "ahmadaziz@smkrus.sch.id",
      kelas:
        valueDataKelas[2].kelas +
        " " +
        valueDataKelas[2].jurusan.toUpperCase() +
        " " +
        valueDataKelas[2].tingkatan,
    },
    {
      id: 2,
      imgProfile: damiImgMurid,
      name: "Bayu Septian Kurniawan",
      email: "bayuseptian@smkrus.sch.id",
      kelas:
        valueDataKelas[2].kelas +
        " " +
        valueDataKelas[2].jurusan.toUpperCase() +
        " " +
        valueDataKelas[2].tingkatan,
    },
    {
      id: 3,
      imgProfile: damiImgMurid,
      name: "Javier Gavra Abhinaya",
      email: "javiergavra@smkrus.sch.id",
      kelas:
        valueDataKelas[4].kelas +
        " " +
        valueDataKelas[4].jurusan.toUpperCase() +
        " " +
        valueDataKelas[4].tingkatan,
    },
    {
      id: 4,
      imgProfile: damiImgMurid,
      name: "Khoiru Rizal Kalam Ismail",
      email: "khoirurizal@smkrus.sch.id",
      kelas:
        valueDataKelas[4].kelas +
        " " +
        valueDataKelas[4].jurusan.toUpperCase() +
        " " +
        valueDataKelas[4].tingkatan,
    },
    {
      id: 5,
      imgProfile: damiImgMurid,
      name: "Muhammad Nur Wahid Bimawan",
      email: "nurwahid@smkrus.sch.id",
      kelas:
        valueDataKelas[8].kelas +
        " " +
        valueDataKelas[8].jurusan.toUpperCase() +
        " " +
        valueDataKelas[8].tingkatan,
    },
    {
      id: 6,
      imgProfile: damiImgMurid,
      name: "Muh Wahyu Ageng Pambudi",
      email: "muhwahyu@smkrus.schid",
      kelas:
        valueDataKelas[8].kelas +
        " " +
        valueDataKelas[8].jurusan.toUpperCase() +
        " " +
        valueDataKelas[8].tingkatan,
    },
    {
      id: 7,
      imgProfile: damiImgMurid,
      name: "Muhammad Vitto Corlenone",
      email: "vittocorleone@smkrus.sch.id",
      kelas:
        valueDataKelas[9].kelas +
        " " +
        valueDataKelas[9].jurusan.toUpperCase() +
        " " +
        valueDataKelas[9].tingkatan,
    },
  ];

  const valueTugas = [
    {
      id: 1,
      judul: "Application Letter",
      deskripsi:
        "Assalamualaikum wr wb, untuk kelas 11 PPLG 1 kalian bisa memahami Tugas mengenai pengertian application letter. Dibawah ini saya mencantumkan link youtube pengertian dari application letter, kalian bisa menyimak video tersebut. jika sudah selesai menyimak video, silahkan resume materi apa saja yang di dapat. Terima kasih, sukses selalu...",
      deadline: "1 Mar 2023",
      updateTime: "8 Mar 2023",
      kelas:
        valueDataKelas[2].kelas +
        " " +
        valueDataKelas[2].jurusan.toUpperCase() +
        " " +
        valueDataKelas[2].tingkatan,
      murid: dataCardMurid[0].name,
      status: "Menunggu",
    },

    {
      id: 2,
      judul: "Application Letter",
      deskripsi:
        "Assalamualaikum wr wb, untuk kelas 11 PPLG 1 kalian bisa memahami Tugas mengenai pengertian application letter. Dibawah ini saya mencantumkan link youtube pengertian dari application letter, kalian bisa menyimak video tersebut. jika sudah selesai menyimak video, silahkan resume materi apa saja yang di dapat. Terima kasih, sukses selalu...",
      deadline: "1 Mar 2023",
      updateTime: "8 Mar 2023",
      kelas:
        valueDataKelas[2].kelas +
        " " +
        valueDataKelas[2].jurusan.toUpperCase() +
        " " +
        valueDataKelas[2].tingkatan,
      murid: dataCardMurid[0].name,
      status: "Selesai",
    },
  ];

  const fileOrlinkMateri = [
    {
      id: 1,
      link: "https://youtu.be/gDLV39EQEC8",
      file: "test.pdf",
    },
    // {
    //     id: 2,
    //     link: "https://mamaco.co.id/artikel/14-bagian-ayam-dan-contoh-olahanya",
    //     file: "test.docx",
    // },
    // {
    //     id: 3,
    //     link: "https://mamaco.co.id/artikel/14-bagian-ayam-dan-contoh-olahanya",
    //     file: "",
    // },
    // {
    //     id: 4,
    //     link: "",
    //     file: "test.docx",
    // }
  ];

  const fileOrlinkJawaban = [
    {
      id: 1,
      link: "https://www.youtube.com/watch?v=9XaS93WMRQQ",
      file: "test.pdf",
    },
    {
      id: 2,
      link: "https://mamaco.co.id/artikel/14-bagian-ayam-dan-contoh-olahanya",
      file: "test.docx",
    },
    {
      id: 3,
      link: "https://mamaco.co.id/artikel/14-bagian-ayam-dan-contoh-olahanya",
      file: "",
    },
    {
      id: 4,
      link: "",
      file: "test.docx",
    },
  ];

  function generateFileIcons(item) {
    let fileIcon;
    let fileExtension = "";

    if (item.file) {
      fileExtension = item.file.substring(item.file.lastIndexOf(".") + 1);
      switch (fileExtension) {
        case "pdf":
          fileIcon = "mdi:file-pdf-box";
          break;
        case "docx":
          fileIcon = "mdi:file-word-box";
          break;
        default:
          fileIcon = "";
          break;
      }
    }

    return (
      <>
        {fileExtension && (
          <>
            <div className="icon-value-file">
              <Icon icon={fileIcon} width={45} />
            </div>
            <div>
              <h1 className="title-value-file">{item.file}</h1>
              <p className="file-detailMenunggu">
                {fileExtension.toUpperCase()} <span>Klik</span>
              </p>
            </div>
          </>
        )}
      </>
    );
  }

  // start funsi generate file or link materi
  function generateFileLinkElements() {
    return fileOrlinkMateri.map((item) => {
      if (item.link && item.file) {
        let linkElement = null;
        if (item.link.includes("youtube.com")) {
          let youtubeLink = item.link.replace("watch?v=", "embed/");
          linkElement = (
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe
                src={youtubeLink}
                frameborder="0"
                allowfullscreen
              ></iframe>
              <div>
                <h1 className="title-fileOrlink">Application Letter</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          );
        } else if (item.link.includes("youtu.be")) {
          let youtubeLink = `https://www.youtube.com/embed/${item.link
            .split("/")
            .pop()}`;
          linkElement = (
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe
                src={youtubeLink}
                frameborder="0"
                allowfullscreen
              ></iframe>
              <div>
                <h1 className="title-fileOrlink">Application Letter</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          );
        } else {
          linkElement = (
            <a href={item.link} className="btn-openSitus">
              Buka Situs
            </a>
          );
        }

        return (
          <div className="con-value-fileOrlink" key={item.id}>
            {linkElement}
            <a href={item.file} className="value-file" id="value-file">
              {generateFileIcons(item)}
            </a>
          </div>
        );
      } else if (item.link) {
        if (item.link.includes("youtube.com")) {
          let youtubeLink = item.link.replace("watch?v=", "embed/");
          return (
            <div className="con-value-fileOrlink" key={item.id}>
              <a href={youtubeLink} className="value-link" id="value-link">
                <iframe
                  src={youtubeLink}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <div>
                  <h1 className="title-fileOrlink">Application Letter</h1>
                  <p className="link-detailMenunggu">
                    YouTube <span>Klik</span>
                  </p>
                </div>
              </a>
            </div>
          );
        } else if (item.link.includes("youtu.be")) {
          let youtubeLink = `https://www.youtube.com/embed/${item.link
            .split("/")
            .pop()}`;
          return (
            <div className="con-value-fileOrlink" key={item.id}>
              <a href={youtubeLink} className="value-link" id="value-link">
                <iframe
                  src={youtubeLink}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <div>
                  <h1 className="title-fileOrlink">Application Letter</h1>
                  <p className="link-detailMenunggu">
                    YouTube <span>Klik</span>
                  </p>
                </div>
              </a>
            </div>
          );
        } else {
          return (
            <div className="con-value-fileOrlink" key={item.id}>
              <a href={item.link} className="btn-openSitus">
                Buka Situs
              </a>
            </div>
          );
        }
      } else if (item.file) {
        return (
          <div className="con-value-fileOrlink" key={item.id}>
            <a href={item.file} className="value-file" id="value-file">
              {generateFileIcons(item)}
            </a>
          </div>
        );
      }

      return null;
    });
  }

  //   end funsi generate file link elements

  // Panggil fungsi generateFileLinkElements untuk menghasilkan elemen-elemen yang sesuai
  const fileLinkElements = generateFileLinkElements();

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
          <div className="header-content-DetailMenunggu">
            <div className="card-DetailMenunggu-Guru">
              <div className="card-DetailMenunggu-Guru-left">
                <div className="img-DetailMenunggu-Guru">
                  <img
                    src={damiImgMurid}
                    alt=""
                    className="image-DetailMenunggu-Guru"
                  />
                </div>
                <div className="desc-card-DetailMenunggu-Guru">
                  <p className="name-card-DetailMenunggu-Guru">
                    Ahmad Aziz Wira Widodo
                  </p>
                  <p className="email-card-DetailMenunggu-Guru">
                    ahmadaziz@smkrus.sch.id
                  </p>
                </div>
              </div>
              <div className="detaiKelas-DetailMenunggu-Guru">
                <p>11 PPLG 1</p>
              </div>
            </div>
          </div>

          <div className="content-DetailMenunggu">
            <div className="con-card-detailMenunggu">
              <div className="header-card-detailMenunggu">
                <div className="left-header-card-detailMenunggu">
                  <div className="icon-header-card-detailMenunggu">
                    <Icon icon="uiw:time-o" width={40} />
                  </div>
                  <div className="text-header-card-detailMenunggu">
                    <h1 className="title-header-card-detailMenunggu">
                      Tugas Application Letter
                    </h1>
                    <p className="guru-header-card-detailMenunggu">
                      Budiono, S.Pd
                    </p>
                  </div>
                </div>
                <div className="right-header-card-detailMenunggu">
                  <p className="date-header-card-detailMenunggu">8 Mar 2023</p>
                  <div className="icon-options" style={{ cursor: "pointer" }}>
                    <Icon icon="mi:options-vertical" width={40} />
                  </div>
                </div>
              </div>

              <p className="desc-card-detailMenunggu">
                Assalamualaikum wr wb, untuk kelas 11 PPLG 1 kalian bisa
                memahami Tugas mengenai pengertian application letter. Dibawah
                ini saya mencantumkan link youtube pengertian dari application
                letter, kalian bisa menyimak video tersebut. jika sudah selesai
                menyimak video, silahkan resume materi apa saja yang di dapat.
                Terima kasih, sukses selalu...
              </p>

              <p className="infoDeadline">Deatline : 1 Mar 2022</p>

              <div>{fileLinkElements}</div>

              <div className="sectionJawaban">
                <h1 className="title-sectionJawaban">Jawaban</h1>
                <div className="value-file" id="value-file">
                  <div className="icon-value-file">
                    <Icon icon="mdi:file-word-box" width={45} />
                  </div>
                  <div>
                    <h1 className="title-value-file">29_Muhammad_Zum...</h1>
                    <p className="file-detailMenunggu">
                       DOCX <span>Klik</span>
                    </p>
                  </div>
                </div>
                <button className="btn-collection-confirmation">
                  Konfirmasi
                </button>
              </div>
            </div>
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

export default DetailMenunggu;
