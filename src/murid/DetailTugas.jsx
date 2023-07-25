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
import axios from "axios";
import CardSkeletonDetailTugas from "../componentSkeleton/CardSkeletonDetailTugas";
import SkeletonDetailTask from "../componentSkeleton/SkeletonDetailTask";
import SkeletonNavbar from "../componentSkeleton/SkeletonNavbar";

function DetailTask() {
  const navigate = useNavigate();

     // messege

    const showSuccessAdd = () => {
      const popupLogout = document.querySelector("#popup-success");
      popupLogout.style.display = "flex";
      popupLogout.style.animation = "slide-down 0.3s ease-in-out";
    };
  
    const closeSuccess = () => {
      const popupLogout = document.querySelector("#popup-success");
      setTimeout(() => (popupLogout.style.display = "none"), 250);
      popupLogout.style.animation = "slide-up 0.3s ease-in-out";
      // navigate(`/murid/detailtugas/{$id}`);
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

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailTugas, setDataDetailTugas] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleButtonClick = () => {
    document.getElementById("file-input").click();
  };

  useEffect(() => {
    getDetail();
    // submitTask();
  }, [id]);

  const [fileTask, setFileTask] = useState({
    file: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function getDetail() {
    setisLoading(true);
    axios
      .get(`https://www.nugasyuk.my.id/api/murid/tugas/${id}`, {
        headers: {
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

  const [file, setFile] = useState({
    file: "",
  });

  const [errors, setErrors] = useState({});

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isErrorSubmit, setIsErrorSubmit] = useState(false);

  const handleFileInput = (event) => {
    const file = event.target.files[0];
  };

  const submitTask = () => {
    setIsLoadingSubmit(true);
    setIsErrorSubmit(false);
  
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    axios
      .post(`https://www.nugasyuk.my.id/api/murid/tugas/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        console.log("Data berhasil dikirim", response.data);
        // alert("Tugas berhasil dikirim");
         showSuccessAdd();
        // Tambahkan logika atau pesan yang ingin ditampilkan jika pengiriman berhasil
        setIsLoadingSubmit(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengirim data", error);
        // alert("Tugas gagal dikirim")
        // Tambahkan logika atau pesan yang ingin ditampilkan jika terjadi kesalahan
        setIsErrorSubmit(true);
        setIsLoadingSubmit(false);
        showFailedAdd();
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm(file);
  //   setErrors(validationErrors);
  //   if (Object.keys(validationErrors).length === 0) {
  //     setIsSubmitting(true);
  //   }
  // };

  const validateForm = (data) => {
    let errors = {};

    if (!data.file) {
      errors.file = "File harus diisi";
    }

    return errors;
  };

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
    return dataDetailTugas.map((item) => {
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
            <a
              href={`https://www.nugasyuk.my.id/public/${item.file}`}
              className="value-file"
              id="value-file"
            >
              {generateFileIcons(item)}
            </a>
          </div>
        );
      }

      return null;
    });
  }

  const fileLinkElements = generateFileLinkElements();

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
            <li onClick={() => navigate("/murid/pagekonseling")}>
              <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
              Konseling
            </li>
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
                          <div className="icon-detail-task">
                            <Icon icon="uiw:time-o" width="30" />
                          </div>
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
                      <div className="submition-task">
                        <p className="title-submition">Pengumpulan Tugas</p>
                        <div className="file-task">
                           {selectedFile && <p>{selectedFile.name}</p>}
                           {detailTugas.file}
                          {/* Tambahkan tampilan preview lainnya sesuai kebutuhan */}
                        </div>

                        <div>
                          <input
                            type="file"
                            id="file-input"
                            hidden
                            onChange={handleFileInputChange}
                            // onChange={handleFileInput}
                          />
                          <button
                            className="btn-add-task"
                            onClick={handleButtonClick}
                          >
                            <Icon icon="ic:round-plus" width="20" />
                            <p>Tambah</p>
                          </button>
                        </div>
                        <button
                          className="btn-submit-task"
                          type="submit"
                          onClick={submitTask}
                          // onChange={handleFileUpload}
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
              <img
                src={ImgFailed}
                alt="Delete Failed"
                className="img-Failed"
              />
            </div>
            <p className="desc-Failed">Tugas Gagal Dikirim!</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        <ProfileSiswa />

        <NotifSiswa />
      </div>
    );
}

export default DetailTask;
