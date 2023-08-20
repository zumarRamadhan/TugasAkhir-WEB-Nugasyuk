import "../cssAll/guru/DetailTugasKbm.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link, useParams } from "react-router-dom";
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
import apiurl from "../api/api";
import axios from "axios";
import ImgDelete from "../assets/imgDelete.svg";

function DetailTugasKbm() {
  const navText = "KBM 11 PPLG 1";
  const navigate = useNavigate();
  const saveToken = sessionStorage.getItem("token");

  if (!saveToken) {
    navigate("/login");
  }

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [detailTugas, setDetailTugas] = useState([]);
  const [kelasId, setKelasId] = useState([]);
  const [titleKelas, setTitleKelas] = useState([]);

  const handleEditClick = (id) => {
    navigate(`/guru/pagekbm/detail/editformtugas/${id}`);
  };

  useEffect(() => {
    axios
      .get(`${apiurl}guru/tugas/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API detail tugas", result.data);
        const responseAPI = result.data;
        setDetailTugas(responseAPI.tugas[0]);
        setTitleKelas(responseAPI.kelas);
        setKelasId(responseAPI.kelas_id);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const handleCek = (id) => {
    // Ambil data guru dari API berdasarkan id

    // pindah ke halaman detail
    navigate(`/guru/pagekbm/detail/detailtugas/listtugas/${id}`);
  };

  const closeDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(350px)";
  };

  const showDeletePopup = () => {
    const background = document.querySelector("#popup-Delete");
    background.style.display = "flex";
    const popupDelete = document.querySelector(".detail-Delete");
    popupDelete.style.display = "block";
    popupDelete.style.animation = "slide-down 0.3s ease-in-out";
  };

  const handleDelete = (id) => {
    showPopupLoading();
    axios
      .delete(`${apiurl}guru/tugas/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((response) => {
        // Handling successful deletion
        console.log("Data berhasil dihapus");
        // Close the delete popup and detail popup
        closeDeletePopup();
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

  const showSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = (id) => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    navigate(`/guru/pagekbm/detail/${id}`);
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

  function generateFileIcons(item) {
    let fileIcon;
    let fileExtension = "";

    if (item.soal_file) {
      fileExtension = item.soal_file.substring(
        item.soal_file.lastIndexOf(".") + 1
      );
      switch (fileExtension) {
        case "pdf":
          fileIcon = "mdi:file-pdf-box";
          break;
        case "docx":
          fileIcon = "mdi:file-word-box";
          break;
        case "xlsx":
          fileIcon = "file-icons:microsoft-excel";
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
              <h1 className="title-value-file">{item.nama_tugas}</h1>
              <p className="file-detailMenunggu">
                {fileExtension.toUpperCase()} <span>Klik</span>
              </p>
            </div>
          </>
        )}
      </>
    );
  }

  // start funsi generate file link elements
  function generateFileLinkElements(detailTugas) {
    const item = detailTugas;

    // Ubah string "null" menjadi null pada properti link
    if (item.soal_link === "null") {
      item.soal_link = null;
    }

    if (item.soal_link !== null && item.soal_file) {
      let linkElement = null;

      if (item.soal_link && item.soal_link.includes("youtube.com")) {
        let youtubeLink = item.soal_link.replace("watch?v=", "embed/");
        linkElement = (
          <a href={youtubeLink} className="value-link" id="value-link">
            <iframe src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
            <div>
              <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
              <p className="link-detailMenunggu">
                YouTube <span>Klik</span>
              </p>
            </div>
          </a>
        );
      } else if (item.soal_link && item.soal_link.includes("youtu.be")) {
        let youtubeLink = `https://www.youtube.com/embed/${item.soal_link
          .split("/")
          .pop()}`;
        linkElement = (
          <a href={youtubeLink} className="value-link" id="value-link">
            <iframe src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
            <div>
              <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
              <p className="link-detailMenunggu">
                YouTube <span>Klik</span>
              </p>
            </div>
          </a>
        );
      } else {
        linkElement = (
          <a href={item.soal_link} className="btn-openSitus">
            Buka Situs
          </a>
        );
      }

      return (
        <div className="con-value-fileOrlink" key={item.id}>
          {linkElement}
          <a
            href={`https://www.nugasyuk.my.id/public/${item.soal_file}`}
            className="value-file"
            id="value-file"
          >
            {generateFileIcons(item)}
          </a>
        </div>
      );
    } else if (item.soal_link) {
      if (item.soal_link.includes("youtube.com")) {
        let youtubeLink = item.soal_link.replace("watch?v=", "embed/");
        return (
          <div className="con-value-fileOrlink" key={item.id}>
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe
                src={youtubeLink}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h1 className="title-fileOrlink">{item.nama_materi}</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          </div>
        );
      } else if (item.soal_link.includes("youtu.be")) {
        let youtubeLink = `https://www.youtube.com/embed/${item.soal_link
          .split("/")
          .pop()}`;
        return (
          <div className="con-value-fileOrlink" key={item.id}>
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe
                src={youtubeLink}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h1 className="title-fileOrlink">{item.nama_materi}</h1>
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
            <a href={item.soal_link} className="btn-openSitus">
              Buka Situs
            </a>
          </div>
        );
      }
    } else if (item.soal_file) {
      return (
        <div className="con-value-fileOrlink" key={item.id}>
          <a
            href={`https://wondrous-squirrel-blatantly.ngrok-free.app/file/${item.soal_file}`}
            className="value-file"
            id="value-file"
          >
            {generateFileIcons(item)}
          </a>
        </div>
      );
    }

    return null;
  }
  // end funsi generate file link elements

  // Panggil fungsi generateFileLinkElements untuk menghasilkan elemen-elemen yang sesuai
  const fileLinkElements = generateFileLinkElements(detailTugas);

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
  if (detailTugas && kelasId && titleKelas && !isError)
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
            <li className="active" onClick={() => navigate("/guru/pagekbm")}>
              <Icon icon="ph:chalkboard-teacher" width="20" />
              KBM
            </li>
            <li onClick={() => navigate("/guru/pagepengumpulan")}>
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
          <NavbarGuru text={"Tugas" + " " + titleKelas} />
          <div className="main">
            <div className="con-card-detailTugas">
              <div className="header-card-detailTugas">
                <div className="left-header-card-detailTugas">
                  <div className="icon-header-card-detailTugas">
                    <Icon icon="tabler:clipboard-text" width={40} />
                  </div>
                  <div className="text-header-card-detailTugas">
                    <h1 className="title-header-card-detailTugas">
                      {detailTugas.nama_tugas}
                    </h1>
                    <p className="guru-header-card-detailTugas">
                      {detailTugas.nama_guru}
                    </p>
                  </div>
                </div>
                <div className="right-header-card-detailTugas">
                  <p className="date-header-card-detailTugas">
                    {detailTugas.date}
                  </p>
                  <div className="con-btn-card-kbm">
                    <div
                      className="btn-edit-card-kbm"
                      onClick={() => handleEditClick(detailTugas.id)}
                    >
                      <Icon
                        icon="material-symbols:edit-outline-rounded"
                        width="15"
                      />
                    </div>
                    <div
                      className="btn-delete-card-kbm"
                      onClick={showDeletePopup}
                    >
                      <Icon icon="ic:round-delete-outline" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="desc-card-detailTugas">{detailTugas.soal}</p>

              <p className="infoDeadline">Deatline : {detailTugas.deadline}</p>

              <div>{fileLinkElements}</div>

              <div
                className="btn-cek-pengumpulan"
                onClick={() => handleCek(detailTugas.id)}
              >
                Cek Pengumpulan
              </div>
            </div>
          </div>
        </div>
        {/* end body */}

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
            <p className="desc-Delete">
              Anda yakin ingin menghapus materi ini?
            </p>
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
                onClick={() => handleDelete(detailTugas.id)}
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
              <button type="button" className="btn-keluar" onClick={logout}>
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
              onClick={() => closeSuccess(kelasId)}
            />
            <div className="image-success">
              <img
                src={ImgSuccess}
                alt="Delete Success"
                className="img-success"
              />
            </div>
            <p className="desc-success">Data Berhasil Di Hapus!!!</p>
            <button
              className="btn-success"
              onClick={() => closeSuccess(kelasId)}
            >
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

export default DetailTugasKbm;
