import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import "../cssAll/admin/FormAddMurid.css";
import Navigation from "../component/NavigationBar";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import { useNavigate, Link, useParams } from "react-router-dom";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import axios from "axios";
import apiurl from "../api/api";

function EditFormAddMurid() {
  const navText = "Tambah Data";
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
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

  const showSuccessAdd = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    navigate("/admin/pagemurid");
  };

  const showFailedAdd = () => {
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
    const background = document.querySelector("#popup-forget");
    background.style.display = "flex";
    const popupForget = document.querySelector(".detail-forget-password");
    popupForget.style.display = "block";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeForgetPopupAndClearInput = () => {
    const background = document.querySelector("#popup-forget");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupForget = document.querySelector(".detail-forget-password");
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
  const { id } = useParams();
  const saveToken = sessionStorage.getItem("token");

  const [formData, setFormData] = useState({
    // Inisialisasi nilai awal untuk setiap field formulir
    // file: "",
    namaMurid: "",
    namaPanggilan: "",
    namaWaliMurid: "",
    nis: "",
    alamat: "",
    email: "",
    email_wali_murid: "",
    // nomorTlp: "",
    password: "",
    konfirmasiPassword: "",
    password_wali_murid: "",
    konfirmasiPassword_wali_murid: "",
    kelas: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // console.log(formData.email_wali_murid);
    setIsLoading(true);
    showPopupLoadingDetail();
    axios
      .get(`${apiurl}admin/murid/${id}`, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((response) => {
        // setMuridData(response.data.data);
        setFormData({
          // file: response.data.data.foto_profile,
          namaMurid: response.data.data.nama_siswa,
          namaPanggilan: response.data.data.nama_panggilan,
          namaWaliMurid: response.data.data.nama_wali_murid,
          nis: response.data.data.nis,
          email: response.data.data.email,
          email_wali_murid: response.data.data.email_wali_murid,
          alamat: response.data.data.alamat,
          password: "",
          konfirmasiPassword: "",
          password_wali_murid: "",
          konfirmasiPassword_wali_murid: "",
          kelas: response.data.data.kelas_id,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data murid:", error);
        setIsLoading(false);
      });
  }, [id, saveToken]);

  const validateForm = (data) => {
    let errors = {};

    if (!data.namaMurid.trim()) {
      errors.namaMurid = "Nama siswa harus diisi";
    }

    if (!data.namaPanggilan.trim()) {
      errors.namaPanggilan = "Nama panggilan harus diisi";
    }

    if (!data.namaWaliMurid.trim()) {
      errors.namaWaliMurid = "Nama wali murid harus diisi";
    }

    if (!data.nis.trim()) {
      errors.nis = "NIS harus diisi";
    } else if (!/^\d+$/.test(data.nis)) {
      errors.nis = "NIS hanya boleh berisi angka";
    }

    if (!data.alamat.trim()) {
      errors.alamat = "Alamat harus diisi";
    }

    if (!data.email.trim()) {
      errors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email tidak valid";
    }

    if (!data.email_wali_murid.trim()) {
      errors.email_wali_murid = "Email wali murid harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(data.email_wali_murid)) {
      errors.email_wali_murid = "Email tidak valid";
    }

    if (!data.kelas.toString().trim()) {
      errors.kelas = "Silahkan pilih kelas";
    }

    if (data.password.trim().length < 8) {
      errors.password = "Password harus lebih dari 8 karakter";
    }

    if (!data.password.trim()) {
      errors.password =
        "Password harus diisi, pengubahan password tidak akan menghapus data yang sudah ada";
    }

    if (data.password !== data.konfirmasiPassword) {
      errors.konfirmasiPassword = "Password tidak cocok";
    }

    if (data.password_wali_murid.trim().length < 8) {
      errors.password_wali_murid = "Password harus lebih dari 8 karakter";
    }

    if (!data.password_wali_murid.trim()) {
      errors.password_wali_murid =
        "Password harus diisi, pengubahan password tidak akan menghapus data yang sudah ada";
    }

    if (data.password_wali_murid !== data.konfirmasiPassword_wali_murid) {
      errors.konfirmasiPassword_wali_murid = "Password tidak cocok";
    }

    return errors;
  };

  //   console.log();

  useEffect(() => {
    if (isSubmitting) {
      const form = new FormData();
      //   form.append("foto_profile", formData.file);
      form.append("nama_siswa", formData.namaMurid);
      form.append("nama_panggilan", formData.namaPanggilan);
      form.append("nama", formData.namaWaliMurid);
      form.append("nis", formData.nis);
      form.append("alamat", formData.alamat);
      form.append("email", formData.email);
      form.append("email_wali", formData.email_wali_murid);
      form.append("password", formData.password || "");
      form.append("konfirmasiPassword", formData.konfirmasiPassword || "");
      form.append("password_wali", formData.password_wali_murid);
      form.append(
        "konfirmasiPassword_wali",
        formData.konfirmasiPassword_wali_murid || ""
      );
      //   form.append("nomor_tlp", formData.nomorTlp);
      form.append("kelas_id", formData.kelas || "");

      axios
        .post(`${apiurl}admin/murid/${id}`, form, {
          headers: {
            "Access-Control-Allow-Origin": "https://nugasyuk.my.id",
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning": "any",
          },
        })
        .then((result) => {
          console.log("Data berhasil diperbarui");
          // Lakukan tindakan yang diperlukan setelah menambahkan data
          showSuccessAdd();
          closePopupLoading();
          // navigate("/admin/pagemurid");
          //   setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat memperbarui data:", error);
          setErrors({ submit: "Terjadi kesalahan saat memperbarui data" });
          setIsSubmitting(false);
          showFailedAdd();
          closePopupLoading();
        });
    }
  }, [isSubmitting, formData, id, saveToken, navigate]);

  const [dataKelas, setDataKelas] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [isError, setIsError] = useState(false);
  // console.log("data kelas", dataKelas);

  useEffect(() => {
    if (isLoading) {
      showPopupLoadingDetail();
    }
  }, [isLoading]);

  useState(() => {
    setIsLoading(true);
    axios
      .get(`${apiurl}admin/kelas`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataKelas(responseAPI.data);
        closePopupLoadingDetail();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      showPopupLoading();
    }
  };

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

  // changes pass

  const showSuccessChangesPass = () => {
    const background = document.querySelector("#popup-success-ChangesPass");
    background.style.display = "flex";
    const popupSuccess = document.querySelector("#detail-success-ChangesPass");
    popupSuccess.style.display = "flex";
    popupSuccess.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showFailedChangesPass = () => {
    const background = document.querySelector("#popup-Failed-ChangesPass");
    background.style.display = "flex";
    const popupFailed = document.querySelector("#detail-Failed-ChangesPass");
    popupFailed.style.display = "flex";
    popupFailed.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccessChangesPass = () => {
    const background = document.querySelector("#popup-success-ChangesPass");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupSuccess = document.querySelector("#detail-success-ChangesPass");
    setTimeout(() => (popupSuccess.style.display = "none"), 250);
    popupSuccess.style.animation = "slide-up 0.3s ease-in-out";
  };

  const closeFailedChangesPass = () => {
    const background = document.querySelector("#popup-Failed-ChangesPass");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupFailed = document.querySelector("#detail-Failed-ChangesPass");
    setTimeout(() => (popupFailed.style.display = "none"), 250);
    popupFailed.style.animation = "slide-up 0.3s ease-in-out";
  };

  // end message popup

  // function changes password
  const [formPass, setformPass] = useState({
    password_lama: "",
    password_baru: "",
    konfirmasi_password_baru: "",
  });

  const [IsSubmittingPass, setIsSubmittingPass] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformPass((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitChangesPass = (e) => {
    e.preventDefault();
    const validationErrors = validateFormPass(formPass);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmittingPass(true);
      showPopupLoading();
    }
  };

  const validateFormPass = (data) => {
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
    if (IsSubmittingPass) {
      const formData = new FormData();
      formData.append("password_lama", formPass.password_lama);
      formData.append("password_baru", formPass.password_baru);

      axios
        .post(`${apiurl}admin/ubahpassword`, formData, {
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

          setIsSubmittingPass(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat memperbarui password:", error);
          setErrors({ submit: "Terjadi kesalahan saat memperbarui password" });
          setIsSubmittingPass(false);
          showFailedChangesPass();
          closePopupLoading();
        });
    }
  }, [IsSubmittingPass, formPass]);

  if (dataKelas && !isError)
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
            {/* <li onClick={() => navigate("/admin/pageassets")}>
              <Icon icon="ic:outline-file-copy" width="20" />
              Assets
            </li> */}
          </ul>
        </aside>
        <div className="container-content">
          <Navigation text={navText} />
          <div className="main">
            <div className="content-formKbm">
              <form onSubmit={handleSubmit} className="container-formKbm">
                {/* <div className="con-formKbm">
                  <div className="title-formKbm">Profi</div>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="input-formKbm"
                    // value={formData.file}
                    accept=".jpg, .png, .jpeg"
                    onChange={handleFoto}
                  />
                  {errors.file && <span className="error">{errors.file}</span>}
                  <img
                    id="previewImage"
                    src={formData.file}
                    alt="Pilih foto, dan foto akan muncul di sini"
                  />
                </div> */}

                <div className="con-formKbm">
                  <div className="title-formKbm">Nama Siswa</div>
                  {formData && formData.namaMurid ? (
                    <input
                      type="text"
                      id="namaMurid"
                      name="namaMurid"
                      value={formData.namaMurid}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan nama siswa"
                    />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.namaMurid && (
                    <span className="error">{errors.namaMurid}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Nama Panggilan</div>
                  {formData && formData.namaPanggilan ? (
                    <input
                      type="text"
                      id="namaPanggilan"
                      name="namaPanggilan"
                      value={formData.namaPanggilan}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan nama panggilan"
                    />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.namaPanggilan && (
                    <span className="error">{errors.namaPanggilan}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Nama Walimurid</div>
                  {formData && formData.namaWaliMurid ? (
                    <input
                      type="text"
                      id="namaWaliMurid"
                      name="namaWaliMurid"
                      value={formData.namaWaliMurid}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan nama walimurid"
                    />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.namaWaliMurid && (
                    <span className="error">{errors.namaWaliMurid}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Kelas</div>
                  {formData && formData.kelas ? (
                    <select
                      name="kelas"
                      id="kelas"
                      className="selectClass"
                      value={formData.kelas}
                      onChange={handleChange}
                    >
                      <option value="" selected disabled>
                        Pilih Kelas
                      </option>
                      {dataKelas.map((kelas) => (
                        <option value={kelas.id}>
                          {kelas.tingkat_ke +
                            " " +
                            kelas.nama_jurusan.toUpperCase() +
                            " " +
                            kelas.nama_kelas}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.kelas && ( //change
                    <span className="error">{errors.kelas}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">NIS</div>
                  {formData && formData.nis ? (
                    <input
                      type="text"
                      id="nis"
                      name="nis"
                      value={formData.nis}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan niy guru"
                    />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.nis && <span className="error">{errors.nis}</span>}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Alamat</div>
                  {formData && formData.alamat ? (
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan alamat siswa"
                    />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.alamat && (
                    <span className="error">{errors.alamat}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Email</div>
                  {formData && formData.email ? (
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="example@smkrus.schid"
                    />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Email Walimurid</div>
                  {formData && formData.email_wali_murid ? (
                    <input
                      type="text"
                      id="email_wali_murid"
                      name="email_wali_murid"
                      value={formData.email_wali_murid}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="example@smkrus.schid"
                    />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.email_wali_murid && (
                    <span className="error">{errors.email_wali_murid}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Password Siswa</div>
                  <input
                    type="password"
                    className="input-formKbm"
                    placeholder="*******"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Konfirmasi Password Siswa</div>
                  <input
                    type="password"
                    className="input-formKbm"
                    placeholder="*******"
                    id="konfirmasiPassword"
                    name="konfirmasiPassword"
                    value={formData.konfirmasiPassword}
                    onChange={handleChange}
                  />
                  {errors.konfirmasiPassword && (
                    <span className="error">{errors.konfirmasiPassword}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Password Walimurid</div>
                  <input
                    type="password"
                    className="input-formKbm"
                    placeholder="*******"
                    id="password_wali_murid"
                    name="password_wali_murid"
                    value={formData.password_wali_murid}
                    onChange={handleChange}
                  />
                  {errors.password_wali_murid && (
                    <span className="error">{errors.password_wali_murid}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">
                    Konfirmasi Password Walimurid
                  </div>
                  <input
                    type="password"
                    className="input-formKbm"
                    placeholder="*******"
                    id="konfirmasiPassword_wali"
                    name="konfirmasiPassword_wali_murid"
                    value={formData.konfirmasiPassword_wali_murid}
                    onChange={handleChange}
                  />
                  {errors.konfirmasiPassword_wali_murid && (
                    <span className="error">
                      {errors.konfirmasiPassword_wali_murid}
                    </span>
                  )}
                </div>

                <div className="con-btn-form">
                  <button
                    type="submit"
                    className="btn-form"
                    style={{ cursor: "pointer" }}
                  >
                    Simpan perubahan
                  </button>
                </div>
              </form>
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
              onClick={closeSuccess}
            />
            <div className="image-success">
              <img
                src={ImgSuccess}
                alt="Delete Success"
                className="img-success"
              />
            </div>
            <p className="desc-success">Data Berhasil Di Perbarui</p>
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
            <p className="desc-Failed">
              Data Gagal Di Perbarui, , Silahkan Periksa Apakah Ada Data Yang
              Sama Dengan Murid Lain!!!
            </p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
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
{/* changes pass */}
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
        {/* message Changes Pass */}
        <div id="popup-success-ChangesPass">
          <div className="detail-success" id="detail-success-ChangesPass">
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
          <div className="detail-Failed" id="detail-Failed-ChangesPass">
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
        {/* end changes pass */}
      </div>
    );
}

export default EditFormAddMurid;
