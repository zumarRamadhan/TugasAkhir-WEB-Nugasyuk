import "../cssAll/murid/DetailTugas.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import NavbarMurid from "../component/NavbarMurid";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import ImgSuccess from "../assets/88860-success-animation.gif";
import ImgFailed from "../assets/94303-failed.gif";
import ImgDelete from "../assets/15120-delete.gif";
import axios from "axios";
import apiurl from "../api/api";
import SkeletonDetailTask from "../componentSkeleton/SkeletonDetailTask";
import SkeletonNavbar from "../componentSkeleton/SkeletonNavbar";

function DetailTask() {
  const navigate = useNavigate();

  // messege
  const showSuccessAdd = () => {
    const background = document.querySelector("#popup-success");
    background.style.display = "flex";
    const popupLogout = document.querySelector(".detail-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    // navigate(`/murid/detailtugas/{$id}`);
    const background = document.querySelector("#popup-success");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupLogout = document.querySelector(".detail-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    window.location.reload();
  };

  const showFailedAdd = () => {
    const background = document.querySelector("#popup-failed");
    background.style.display = "flex";
    const popupLogout = document.querySelector(".detail-failed");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeFailed = () => {
    const background = document.querySelector("#popup-failed");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupLogout = document.querySelector(".detail-failed");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  // end messege

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const saveToken = sessionStorage.getItem("token");

  const [fileList, setFileList] = useState([]);
  const [dataDetailTugas, setDataDetailTugas] = useState([]);
  const [status, setStatus] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const newFileList = [...fileList, e.target.files[0]];
    setFileList(newFileList);
  };

  const handleButtonClick = () => {
    document.getElementById("file-input").click();
  };

  useEffect(() => {
    getDetail();
    // submitTask();
  }, [id]);

  function getDetail() {
    setisLoading(true);
    axios
      .get(`${apiurl}murid/tugas/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataDetailTugas(response.data.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data", error);
        setisLoading(false);
        setisError(true);
      });
  }

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

  const handleDelete = () => {
    console.log("menghapus data");
    axios
      .get(`${apiurl}murid/tugas/hapus/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((response) => {
        // Penanganan ketika penghapusan berhasil
        console.log("Data berhasil dihapus", response.data);
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

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isErrorSubmit, setIsErrorSubmit] = useState(false);

  const submitTask = () => {
    setIsLoadingSubmit(true);
    setIsErrorSubmit(false);
    showPopupLoading();

    const formData = new FormData();
    formData.append("file", selectedFile);

    console.log("mengirim tugas");
    axios
      .post(`${apiurl}murid/tugas/${id}`, formData, {
        headers: {
          "ngrok-skip-browser-warning": "any",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        console.log("Data berhasil dikirim", response.data);
        showSuccessAdd();
        // Tambahkan logika atau pesan yang ingin ditampilkan jika pengiriman berhasil
        setIsLoadingSubmit(false);
        closePopupLoading();
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengirim data", error);
        // Tambahkan logika atau pesan yang ingin ditampilkan jika terjadi kesalahan
        setIsErrorSubmit(true);
        setIsLoadingSubmit(false);
        showFailedAdd();
        closePopupLoading();
      });
  };

  // start funsi input file generate file or link materi
  const generateFileInputs = () => {
    return fileList.map((file, index) => {
      let fileIcon = "";
      let fileExtension = "";

      if (file.name) {
        fileExtension = file.name.substring(file.name.lastIndexOf(".") + 1);
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
        <div className="input-file-generate" key={index}>
          {/* Tampilkan ikon file dan tombol hapus */}
          <div className="value-file-icon">
            <Icon className="icon-file-generate" icon={fileIcon} width={45} />
          </div>
          <div className="file-button-delete">
            <div className="name-delete">
              <div>
                <h1 className="title-value-file">{file.name}</h1>
                <p className="format-file">{fileExtension.toUpperCase()}</p>
              </div>
              <button
                className="button-delete"
                onClick={() => handleDeleteFile(index)}
              >
                <Icon
                  className="icon-delete-file"
                  icon="basil:cross-solid"
                  width={30}
                />
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  // end fungsi generate input file

  // start funsi generate file jawaban
  function generateFileJawaban(item) {
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
          <div className="file-generate">
            <div className="value-file-icon">
              <Icon className="icon-file-generate" icon={fileIcon} width={45} />
            </div>
            <div className="file-button-delete">
              <div className="name-delete">
                <div>
                  <h1 className="title-value-file">{item.nama_tugas}</h1>
                  <p className="format-file">{fileExtension.toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  function generateFileLinkElements() {
    return dataDetailTugas.map((item) => {
      if (item.file) {
        return (
          <div className="con-value-file-jawaban" key={item.id}>
            <a
              href={`https://wondrous-squirrel-blatantly.ngrok-free.app/${item.file}`}
              className="value-file"
              id="value-file"
              target="_blank"
            >
              {generateFileJawaban(item)}
            </a>

            <button
              className="button-delete"
              onClick={handleDelete}
              style={{
                display:
                  item.status === "selesai_dalam_deadline" ||
                  item.status === "selesai_lebih_deadline"
                    ? "none"
                    : "flex",
              }}
            >
              <Icon
                className="icon-delete-file"
                icon="basil:cross-solid"
                width={30}
              />
            </button>
          </div>
        );
      }
      return null;
    });
  }
  // end generate file jawaban

  // start funsi generate file soal
  function generateFileSoal(item) {
    let fileIcon;
    let fileExtension = "";

    if (item.file_tugas) {
      fileExtension = item.file_tugas.substring(
        item.file_tugas.lastIndexOf(".") + 1
      );
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
          <div className="file-generate">
            <div className="value-file-icon">
              <Icon icon={fileIcon} width={45} />
            </div>
            <div>
              <h1 className="title-value-file">{item.file_tugas}</h1>
              <p className="format-file">{fileExtension.toUpperCase()}</p>
            </div>
          </div>
        )}
      </>
    );
  }

  // start funsi generate file or link materi
  function generateFileLinkElementsSoal() {
    return dataDetailTugas.map((item) => {
      if (item.link_tugas === "null") {
        item.link_tugas = null;
      }

      if (item.link_tugas !== null && item.file_tugas) {
        let linkElement = null;

        if (item.link_tugas && item.link_tugas.includes("youtube.com")) {
          let youtubeLink = item.link.replace("watch?v=", "embed/");
          linkElement = (
            <a
              href={youtubeLink}
              className="value-link"
              id="value-link"
              target="_blank"
            >
              <iframe
                src={youtubeLink}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          );
        } else if (item.link_tugas && item.link_tugas.includes("youtu.be")) {
          let youtubeLink = `https://www.youtube.com/embed/${item.link_tugas
            .split("/")
            .pop()}`;
          linkElement = (
            <div className="value-link" id="value-link">
              <iframe
                src={youtubeLink}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h1 className="title-link-yt">{item.nama_tugas}</h1>
                <p className="link-detailMenunggu">
                  <a
                    href={youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube <span>Klik</span>
                  </a>
                </p>
              </div>
            </div>
          );
        } else {
          linkElement = (
            <a
              href={item.link_tugas}
              className="btn-openSitus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka Situs
            </a>
          );
        }

        return (
          <div className="con-value-fileOrlink" key={item.id}>
            {linkElement}
            <a
              href={`https://www.nugasyuk.my.id/public/${item.file_tugas}`}
              className="value-file"
              id="value-file"
              target="_blank"
              rel="noopener noreferrer"
            >
              {generateFileSoal(item)}
            </a>
          </div>
        );
      } else if (item.link_tugas) {
        if (item.link_tugas.includes("youtube.com")) {
          let youtubeLink = item.link_tugas.replace("watch?v=", "embed/");
          return (
            <div className="con-value-fileOrlink" key={item.id}>
              <a href={youtubeLink} className="value-link" id="value-link">
                <iframe
                  src={youtubeLink}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div>
                  <h1 className="title-fileOrlink">{item.link_tugas}</h1>
                  <p className="link-detailMenunggu">
                    YouTube <span>Klik</span>
                  </p>
                </div>
              </a>
            </div>
          );
        } else if (item.link_tugas.includes("youtu.be")) {
          let youtubeLink = `https://www.youtube.com/embed/${item.link_tugas
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
                  <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
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
              <a
                href={item.link_tugas}
                className="btn-openSitus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buka Situs
              </a>
            </div>
          );
        }
      } else if (item.file_tugas) {
        return (
          <div className="con-value-fileOrlink" key={item.id}>
            <a
              href={`https://wondrous-squirrel-blatantly.ngrok-free.app/file/${item.file_tugas}`}
              className="value-file"
              id="value-file"
              target="_blank"
              rel="noopener noreferrer"
            >
              {generateFileSoal(item)}
            </a>
          </div>
        );
      }

      return null;
    });
  }
  // end generate file soal
  

  const handleDeleteFile = (index) => {
    const newFileList = fileList.filter((_, i) => i !== index);
    setFileList(newFileList);
  };

  const fileLinkElements = generateFileLinkElements();
  const fileGenerateInput = generateFileInputs();
  const fileLinkElementsSoal = generateFileLinkElementsSoal();

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  if (dataDetailTugas && !isError)
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
            <li className="active" onClick={() => navigate("/murid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
            {/* <li onClick={() => navigate("/murid/pagekonseling")}>
              <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
              Konseling
            </li> */}
          </ul>
        </aside>
        <div className="container-content">
          {isLoading ? (
            <SkeletonNavbar />
          ) : (
            <div>
              {dataDetailTugas.map((detailTugas) => (
                <NavbarMurid textNavigasi={detailTugas.nama_mapel} />
              ))}
            </div>
          )}

          <div className="main">
            {isLoading ? (
              <SkeletonDetailTask />
            ) : (
              <div>
                {dataDetailTugas &&
                  dataDetailTugas.map((detailTugas) => (
                    <div className="con-content-detail-task">
                      <div className="content-detail-task">
                        <div className="content-detail-task-left">
                          {detailTugas.status ===
                            "belum_selesai_dalam_deadline" && (
                            <div
                              className="icon-detail-task"
                              style={{ background: "#DDDDDD" }}
                            >
                              <Icon
                                icon="ic:round-pending-actions"
                                width="35"
                                style={{ color: "#797979" }}
                              />
                            </div>
                          )}
                          {detailTugas.status ===
                            "belum_selesai_luar_deadline" && (
                            <div
                              className="icon-detail-task"
                              style={{ background: "#FFC6C6" }}
                            >
                              <Icon
                                icon="ic:round-pending-actions"
                                width="30"
                                style={{ color: "#FF3F3F" }}
                              />
                            </div>
                          )}
                          {detailTugas.status === "menunggu_dalam_deadline" && (
                            <div
                              className="icon-detail-task"
                              style={{ background: "#FFFA87" }}
                            >
                              <Icon
                                icon="uiw:time-o"
                                width="30"
                                style={{ color: "#CBC41A" }}
                              />
                            </div>
                          )}
                          {detailTugas.status === "menunggu_lebih_deadline" && (
                            <div
                              className="icon-detail-task"
                              style={{ background: "#FFC6C6" }}
                            >
                              <Icon
                                icon="uiw:time-o"
                                width="30"
                                style={{ color: "#FF3F3F" }}
                              />
                            </div>
                          )}
                          {detailTugas.status === "selesai_dalam_deadline" && (
                            <div
                              className="icon-detail-task"
                              style={{ background: "#D5FFC6" }}
                            >
                              <Icon
                                icon="material-symbols:check-small-rounded"
                                width="50"
                                style={{ color: "#84E063" }}
                              />
                            </div>
                          )}
                          {detailTugas.status === "selesai_lebih_deadline" && (
                            <div
                              className="icon-detail-task"
                              style={{ background: "#FFC6C6" }}
                            >
                              <Icon
                                icon="material-symbols:check-small-rounded"
                                width="50"
                                style={{ color: "#FF3F3F" }}
                              />
                            </div>
                          )}
                          <div className="desc-material">
                            <p className="name-task ">
                              {detailTugas.nama_tugas}
                            </p>
                            <p className="teacher">{detailTugas.nama_guru}</p>
                          </div>
                        </div>
                        <div className="content-detail-task-right">
                          <p className="date-upload">{detailTugas.date}</p>
                        </div>
                      </div>
                      <p className="desc-content-detail-task">
                        {detailTugas.soal}
                      </p>
                      <p className="task-deadline-time">
                        Deadline : <span>{detailTugas.deadline}</span>
                      </p>
                      {fileLinkElementsSoal}
                      <div className="submition-task">
                        <p className="title-submition">Pengumpulan Tugas</p>
                        <div>
                          {fileLinkElements}
                          {fileGenerateInput}
                        </div>
                        <div>
                          <input
                            type="file"
                            id="file-input"
                            hidden
                            onChange={handleFileInputChange}
                          />
                          <button
                            className="btn-add-task"
                            onClick={handleButtonClick}
                            style={{
                              display:
                                detailTugas.status ===
                                  "selesai_dalam_deadline" ||
                                detailTugas.status === "selesai_lebih_deadline"
                                  ? "none"
                                  : "flex",
                            }}
                          >
                            <Icon icon="ic:round-plus" width="20" />
                            <p>Tambah</p>
                          </button>
                        </div>
                        <button
                          className="btn-submit-task"
                          type="submit"
                          onClick={submitTask}
                          style={{
                            display:
                              detailTugas.status === "selesai_dalam_deadline" ||
                              detailTugas.status === "selesai_lebih_deadline"
                                ? "none"
                                : "block",
                          }}
                        >
                          <p>Kirim</p>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
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
            <p className="desc-Delete">Anda yakin ingin menghapus file ini?</p>
            {/* memanggil nama sesuai data yang di pilih */}
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
            <p className="desc-success">Tugas Berhasil Dikirim</p>
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
            <p className="desc-Failed">Tugas Gagal Dikirim!</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        {/* messege delete */}

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
            <p className="desc-success">Data Berhasil Di Hapus</p>
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
            <p className="desc-Failed">Data Gagal Di Hapus</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        {/* page laoding */}

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

        {/* end page loading */}

        <ProfileSiswa />

        <NotifSiswa />
      </div>
    );
}

export default DetailTask;
