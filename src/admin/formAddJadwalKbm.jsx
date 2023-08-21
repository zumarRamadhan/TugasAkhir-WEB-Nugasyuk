import "../cssAll/admin/formAddJadwalKbm.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import Navigation from "../component/NavigationBar";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import { useState, useEffect } from "react";
import axios from "axios";
import apiurl from "../api/api";
import Select from "react-select";

function FormAddJadwalKbm() {
  const navText = "Tambah data";
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

  const showSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    navigate("/admin/jadwalkbm");
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
    hariId: "",
    jamId: "",
    mapelId: "",
    jumlahJam: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      // console.log(formData.file);

      const form = new FormData();
      form.append("hari_id", formData.hariId);
      form.append("jam_id", formData.jamId);
      form.append("mapel_id", formData.mapelId);
      form.append("jumlah_jam", formData.jumlahJam);

      axios
        .post(`${apiurl}admin/jadwal`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning":"any"
          },
        })
        .then((result) => {
          console.log("Data berhasil ditambahkan");
          // Lakukan tindakan yang diperlukan setelah menambahkan data
          showSuccess();

          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setFormData({
            // Set nilai awal untuk setiap field formulir
            hariId: "",
            jamId: "",
            mapelId: "",
            jumlahJam: "",
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menambahkan data:", error);
          setErrors({ submit: "Terjadi kesalahan saat menambahkan data" });
          setIsSubmitting(false);
          showFailed();
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
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.hariId) {
      errors.hariId = "Hari harus diisi";
    }

    if (!data.jamId) {
      errors.jamId = "Pilih pelajaran mulai jam ke berapa!!";
    }

    if (!data.mapelId) {
      errors.mapelId = "Pilih Mata Pelaajaran!!";
    }

    if (!data.jumlahJam) {
      errors.jumlahJam = "Jumlah jam harus diisi";
    }

    return errors;
  };

  const [dataMapel, setDataMapel] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [dataAsset, setDataAsset] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useState(() => {
    setIsLoading(true);
    axios
      .get(`${apiurl}admin/mapel`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataMapel(responseAPI.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const dataHari = [
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

  const dataJamPelajaran = [
    {
      id: 1,
      jamKe: 1,
    },
    {
      id: 2,
      jamKe: 2,
    },
    {
      id: 3,
      jamKe: 3,
    },
    {
      id: 4,
      jamKe: 4,
    },
    {
      id: 5,
      jamKe: 5,
    },
    {
      id: 6,
      jamKe: 6,
    },
    {
      id: 7,
      jamKe: 7,
    },
    {
      id: 8,
      jamKe: 8,
    },
    {
      id: 9,
      jamKe: 9,
    },
    {
      id: 10,
      jamKe: 10,
    },
    {
      id: 11,
      jamKe: 11,
    },
    {
      id: 12,
      jamKe: 12,
    },
    {
      id: 13,
      jamKe: 13,
    },
    {
      id: 14,
      jamKe: 14,
    },
  ];

  const [selectedMapel, setSelectedMapel] = useState([null]);
  const [MapelOptions, setMapelOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiurl}admin/mapel`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        const responseAPI = result.data;
        const options = responseAPI.data.map((mapel) => ({
          value: mapel.id,
          label: `${mapel.nama_mapel} // ${mapel.nama_guru} // ${mapel.tingkat_ke +
          " " +
          mapel.nama_jurusan.toUpperCase() +
          " " +
          mapel.nama_kelas}`,
        }));
        setMapelOptions(options);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
      });
  }, []);

  const handleMapelChange = (selectedOption) => {
    setSelectedMapel(selectedOption);
    setFormData((prevState) => ({
      ...prevState,
      mapelId: selectedOption ? selectedOption.value : "",
    }));
  };

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

  if (dataMapel && !isError)
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
            <li onClick={() => navigate("/admin/matapelajaran")}>
              <Icon icon="fluent-mdl2:education" width="20" />
              Mata Pelajaran
            </li>
            <li className="active" onClick={() => navigate("/admin/jadwalkbm")}>
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
          <main className="main">
            <div className="content-formKbm">
              <form onSubmit={handleSubmit} className="container-formKbm">
              <div className="con-formKbm">
                  <div className="title-formKbm">Mata Pelajaran</div>
                  <Select
                    value={selectedMapel}
                    onChange={handleMapelChange}
                    options={MapelOptions}
                    isClearable
                    placeholder="Pilih Mata Pelajaran"
                    className="input-formKbm"
                  />
                  {errors.mapelId && (
                    <span className="error">{errors.mapelId}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Hari</div>
                  <select
                    name="hariId"
                    id="hariId"
                    value={formData.hariId}
                    onChange={handleChange}
                    className="selectClass"
                  >
                    <option hidden>-- Hari --</option>
                    {dataHari.map((data) => (
                      <option value={data.id}>{data.hari}</option>
                    ))}
                  </select>
                  {errors.hariId && (
                    <span className="error">{errors.hariId}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Jam ke</div>
                  <select
                    name="jamId"
                    id="jamId"
                    value={formData.jamId}
                    onChange={handleChange}
                    className="selectClass"
                  >
                    <option hidden>-- Jam Ke --</option>
                    {dataJamPelajaran.map((data) => (
                      <option value={data.id}>{data.jamKe}</option>
                    ))}
                  </select>
                  {errors.jamId && (
                    <span className="error">{errors.jamId}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Jumlah jam</div>
                  <input
                    type="text"
                    className="input-formKbm"
                    placeholder="Jumlah jam"
                    name="jumlahJam"
                    id="jumlahJam"
                    value={formData.jumlahJam}
                    onChange={handleChange}
                  />
                  {errors.jumlahJam && (
                    <span className="error">{errors.jumlahJam}</span>
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
              Data Gagal Di Tambahkan, Pastikan anda memasukan data yang
              benar/data yang belom ada pada jadwal tersebut!!!
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
      </div>
    );
}

export default FormAddJadwalKbm;
