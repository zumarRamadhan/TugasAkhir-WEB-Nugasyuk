import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import "../cssAll/admin/FormAddMurid.css";
import Navigation from "../component/NavigationBar";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import { useNavigate, Link } from "react-router-dom";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import axios from "axios";
import apiurl from "../api/api";
import * as XLSX from "xlsx";

function FormAddMurid() {
  const navText = "Tambah Data";
  const navigate = useNavigate();
  const [formType, setFormType] = useState("manual");

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
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

  const showFailedImport = () => {
    const popupLogout = document.querySelector("#popup-Failed-Import");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showFailedNoData = () => {
    const popupLogout = document.querySelector("#popup-Failed-NoData");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeFailed = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const closeFailedImport = () => {
    const popupLogout = document.querySelector("#popup-Failed-Import");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const closeFailedNoData = () => {
    const popupLogout = document.querySelector("#popup-Failed-NoData");
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

  const saveToken = sessionStorage.getItem("token");

  const [formData, setFormData] = useState({
    // Inisialisasi nilai awal untuk setiap field formulir
    file: "",
    namaMurid: "",
    namaPanggilan: "",
    namaWaliMurid: "",
    nis: "",
    alamat: "",
    email: "",
    email_wali_murid: "",
    nomorTlp: "",
    password: "",
    password_wali_murid: "",
    kelas: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      // console.log(formData.file);

      const form = new FormData();
      form.append("foto_profile", formData.file);
      form.append("nama_siswa", formData.namaMurid);
      form.append("nama_panggilan", formData.namaPanggilan);
      form.append("nama", formData.namaWaliMurid);
      form.append("nis", formData.nis);
      form.append("alamat", formData.alamat);
      form.append("email", formData.email);
      form.append("email_wali", formData.email_wali_murid);
      form.append("password", formData.password);
      form.append("password_wali", formData.password_wali_murid);
      form.append("nomor_tlp", formData.nomorTlp);
      form.append("kelas_id", formData.kelas);

      axios
        .post(`${apiurl}admin/murid`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "https://nugasyuk.my.id",
            Accept: "application/json",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning": "any",
          },
        })
        .then((result) => {
          console.log("Data berhasil ditambahkan");
          // Lakukan tindakan yang diperlukan setelah menambahkan data
          showSuccessAdd();
          closePopupLoading();

          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setFormData({
            // Set nilai awal untuk setiap field formulir
            file: "",
            namaMurid: "",
            namaWaliMurid: "",
            namaPanggilan: "",
            nis: "",
            alamat: "",
            email: "",
            email_wali_murid: "",
            nomorTlp: "",
            password: "",
            konfirmasiPassword: "",
            password_wali_murid: "",
            konfirmasiPassword_wali_murid: "",
            kelas: "",
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menambahkan data:", error);
          setErrors({ submit: "Terjadi kesalahan saat menambahkan data" });
          setIsSubmitting(false);
          showFailedAdd();
          closePopupLoading();
        });
    }
  }, [isSubmitting, formData]);

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

  const validateForm = (data) => {
    let errors = {};

    // jika file lebih dari 2MB maka muncul error
    if (data.file.size > 3000000) {
      errors.file = "Ukuran file tidak boleh lebih dari 3MB";
    }

    if (!data.file) {
      errors.file = "Foto harus diisi";
    }

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

    if (!data.kelas.trim()) {
      errors.kelas = "Silahkan pilih kelas";
    }

    if (data.password.trim().length < 8) {
      errors.password = "Password harus lebih dari 8 karakter";
    }

    if (!data.password.trim()) {
      errors.password = "Password harus diisi";
    }

    if (data.password !== data.konfirmasiPassword) {
      errors.konfirmasiPassword = "Password tidak cocok";
    }

    if (data.password_wali_murid.trim().length < 8) {
      errors.password_wali_murid = "Password harus lebih dari 8 karakter";
    }

    if (!data.password_wali_murid.trim()) {
      errors.password_wali_murid = "Password harus diisi";
    }

    if (data.password_wali_murid !== data.konfirmasiPassword_wali_murid) {
      errors.konfirmasiPassword_wali_murid = "Password tidak cocok";
    }

    return errors;
  };

  function handleFoto(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        file: selectedFile,
      }));

      const reader = new FileReader();
      reader.onload = function (e) {
        const previewImage = document.getElementById("previewImage");
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  const [dataKelas, setDataKelas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // console.log("data kelas", dataKelas);

  useEffect(() => {
    if (isLoading) {
      showPopupLoadingDetail();
    }
  }, [isLoading]);

  useState(() => {
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
        setIsLoading(false);
        closePopupLoadingDetail();
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  // fungsi import

  const [selectedFileImport, setSelectedFileImport] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFileImport(e.target.files[0]);
  };

  const handleImport = () => {
    showPopupLoading();
    if (!selectedFileImport) {
      showFailedNoData();
      closePopupLoading();
      console.log("Please select a file to import.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const formData = new FormData();
      formData.append(
        "file",
        new Blob([data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }),
        selectedFileImport.name
      );

      try {
        const response = await axios.post(
          `${apiurl}admin/import/murid`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${saveToken}`,
              "ngrok-skip-browser-warning": "any",
            },
          }
        );

        console.log("Import successful:", response.data);
        // refresh data
        closePopupLoading();
        showSuccessAdd();
        // Lakukan tindakan setelah impor selesai
      } catch (error) {
        console.error("Import error:", error);
        closePopupLoading();
        showFailedImport();
        // Tangani kesalahan impor
      }
    };

    reader.readAsArrayBuffer(selectedFileImport);
  };

  // end fungsi import

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
              <div className="con-formKbm">
                <div className="title-formKbm">Menambah Data Melalui</div>
                <div className="switch-Option">
                  <div className="con-radio">
                    <label>
                      <input
                        type="radio"
                        name="formType"
                        value="manual"
                        checked={formType === "manual"}
                        onChange={handleFormTypeChange}
                      />
                      Manual
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="formType"
                        value="import"
                        checked={formType === "import"}
                        onChange={handleFormTypeChange}
                      />
                      Import Excel
                    </label>
                  </div>
                </div>
              </div>
              {formType === "import" && (
                <div className="container-formKbm">
                  <div className="con-formKbm">
                    <input
                      type="file"
                      accept=".xlsx, .xls"
                      onChange={handleFileChange}
                      className="input-formKbm"
                    />
                  </div>
                  <div className="con-btn-form">
                    <button onClick={handleImport} className="btn-form">
                      Import Excel
                    </button>
                  </div>
                </div>
              )}
              {formType === "manual" && (
                <form onSubmit={handleSubmit} className="container-formKbm">
                  <div className="con-formKbm">
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
                    {errors.file && (
                      <span className="error">{errors.file}</span>
                    )}
                    <img
                      id="previewImage"
                      src={formData.file}
                      alt="Pilih foto, dan foto akan muncul di sini"
                    />
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">Nama Siswa</div>
                    <input
                      type="text"
                      id="namaMurid"
                      name="namaMurid"
                      value={formData.namaMurid}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan nama siswa"
                    />
                    {errors.namaMurid && (
                      <span className="error">{errors.namaMurid}</span>
                    )}
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">Nama Panggilan</div>
                    <input
                      type="text"
                      id="namaPanggilan"
                      name="namaPanggilan"
                      value={formData.namaPanggilan}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan nama panggilan"
                    />
                    {errors.namaPanggilan && (
                      <span className="error">{errors.namaPanggilan}</span>
                    )}
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">Nama Walimurid</div>
                    <input
                      type="text"
                      id="namaWaliMurid"
                      name="namaWaliMurid"
                      value={formData.namaWaliMurid}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan nama walimurid"
                    />
                    {errors.namaWaliMurid && (
                      <span className="error">{errors.namaWaliMurid}</span>
                    )}
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">Kelas</div>
                    {isLoading ? (
                      <input
                        value="Data Sedang Dalam Proses..."
                        disabled
                        className="input-formKbm"
                      />
                    ) : (
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
                    )}
                    {errors.kelas && ( //change
                      <span className="error">{errors.kelas}</span>
                    )}
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">NIS</div>
                    <input
                      type="number"
                      id="nis"
                      name="nis"
                      value={formData.nis}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan niy guru"
                    />
                    {errors.nis && <span className="error">{errors.nis}</span>}
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">Alamat</div>
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan alamat siswa"
                    />
                    {errors.alamat && (
                      <span className="error">{errors.alamat}</span>
                    )}
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">Email</div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="example@smkrus.schid"
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>

                  <div className="con-formKbm">
                    <div className="title-formKbm">Email Walimurid</div>
                    <input
                      type="text"
                      id="email_wali_murid"
                      name="email_wali_murid"
                      value={formData.email_wali_murid}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="example@smkrus.schid"
                    />
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
                    <div className="title-formKbm">
                      Konfirmasi Password Siswa
                    </div>
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
                      <span className="error">
                        {errors.password_wali_murid}
                      </span>
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
                      id="konfirmasiPassword_wali_murid"
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
            <p className="desc-success">Data Berhasil Di Tambahkan</p>
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
              Data Gagal Di Tambahkan, Silahkan Periksa Apakah Ada Data Yang
              Sama!!!
            </p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        <div id="popup-Failed-Import">
          <div className="detail-Failed">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeFailedImport}
            />
            <div className="image-Failed">
              <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
            </div>
            <p className="desc-Failed">
              Data Gagal Di Tambahkah, Silahkan Periksa Apakah Data Pada File
              Ada Yang Sama Dengan Guru Lain!!!
            </p>
            <button className="btn-Failed" onClick={closeFailedImport}>
              Kembali
            </button>
          </div>
        </div>

        <div id="popup-Failed-NoData">
          <div className="detail-Failed">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeFailedNoData}
            />
            <div className="image-Failed">
              <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
            </div>
            <p className="desc-Failed">
              Data Gagal Di Tambahkah, Data Wajib Di Isi!!!
            </p>
            <button className="btn-Failed" onClick={closeFailedNoData}>
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

export default FormAddMurid;
