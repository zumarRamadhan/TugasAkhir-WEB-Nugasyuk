import "../cssAll/walimurid/DetailTugas.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import DetailOrtu from "../component/ProfileWaliMurid";
import NotifOrtu from "../component/NotifOrtu";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonDetailTask from "../componentSkeleton/SkeletonDetailTask";
import SkeletonNavbarWali from "../componentSkeleton/SkeletonNavbarWalimurid";
import apiurl from "../api/api";

function DetailTugasOrtu() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailTugas, setDataDetailTugas] = useState([]);

  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetail();
  }, [id]);

  function getDetail() {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/tugas/${id}`, {
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

  const [file, setFile] = useState({
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.file) {
      errors.file = "File harus diisi";
    }

    return errors;
  };

  // validate link and yt

  function generateFileIcons(item) {
    let fileIcon;
    let fileExtension = "";

    if (typeof item.file === "string") {
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

  // end validate link and yt
  if (dataDetailTugas && !isError)
    return (
      <div>
        <aside>
          <h1
            className="title-form-login"
            onClick={() => navigate("/walimurid/berandawalimurid")}
          >
            <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
            nugasyuk
          </h1>
          <ul>
            <li onClick={() => navigate("/walimurid/berandawalimurid")}>
              <Icon icon="iconoir:home-simple" width="20" />
              Beranda
            </li>
            <li
              className="active"
              onClick={() => navigate("/walimurid/pagetugas")}
            >
              <Icon
                icon="fluent:clipboard-bullet-list-rtl-20-regular"
                width="25"
              />
              Tugas
            </li>
            <li onClick={() => navigate("/walimurid/pagekbm")}>
              <Icon icon="uiw:date" width="18" />
              Jadwal KBM
            </li>
            <li onClick={() => navigate("/walimurid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
          </ul>
        </aside>
        <div className="container-content">
          {isLoading ? (
            <SkeletonNavbarWali />
          ) : (
            <div>
              {dataDetailTugas.map((detailTugas) => (
                <NavbarWaliMurid navigasiOrtu={detailTugas.nama_mapel} />
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
                      {fileLinkElements}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <DetailOrtu />

        <NotifOrtu />
      </div>
    );
}

export default DetailTugasOrtu;
