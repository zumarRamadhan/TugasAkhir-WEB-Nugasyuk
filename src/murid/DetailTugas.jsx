import "../cssAll/murid/DetailTugas.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import NavbarMurid from "../component/NavbarMurid";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import axios from "axios";
import CardSkeletonDetailTugas from "../componentSkeleton/CardSkeletonDetailTugas";
import SkeletonDetailTask from "../componentSkeleton/SkeletonDetailTask";
import SkeletonNavbar from "../componentSkeleton/SkeletonNavbar";

function DetailTask() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailTugas, setDataDetailTugas] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    // Pemicu input file ketika tombol diklik
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

  // useEffect(() => {
  //   if (isSubmitting) {
  //     fileTask.append('file', FormData.file);
  //   }
  // });

  function getDetail() {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/murid/tugas/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        // setDataDetailTugas(response.data.data);
        // setisLoading(false);

        console.log("Data berhasil ditambahkan");

        setFileTask({
          file: ""
        })

        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data", error);
        setisLoading(false);
        setisError(true);
      });
  }

  
  // const handleSubmit = (e) => {
  //   console.log(e.target.value);
  //   setFile(e.target.value);
  // };
  
  const [file, setFile] = useState({
    file: ""
  });


  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   if (isSubmitting) {
  //     axios
  //     .post(`https://www.nugasyuk.my.id/api/murid/tugas/${id}`, file,{
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${saveToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       // props.userAuthentication()
  //       console.log(response.data);
  //       sessionStorage.setItem("token", response.data.token);
  //       // alert('login Berhasil')
  //     })
  //         .catch((error) => {
  //       console.error("Terjadi kesalahan saat mengambil data", error);
  //       setisError({ submit: "Terjadi kesalahan saat menambahkan data"});
  //       setIsSubmitting(false);
  //     });
  //   }
  // }, [isSubmitting, file]);

  
    const handleFileUpload = (event) => {
      const file = event.target.file[0]

      const formData = new FormData();
      formData.append("file", file);

      axios
      .post(`https://www.nugasyuk.my.id/api/murid/tugas/${id}`, formData,{
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFile((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(file);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.file) {
      errors.file = "File harus diisi"
    }
    
    return errors;
  }

  // const handleFileInputChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   // Lakukan pengolahan berikutnya dengan file yang dipilih
  // };



  // const submitTask = (e) => {
  //   e.preventDefault();
  //   console.log("mengirim data");
    
  // };

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

  // const fileLinkElements = generateFileLinkElements();

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
                          {/* Tambahkan tampilan preview lainnya sesuai kebutuhan */}
                        </div>
                        
                        <div>

                          
                          <input
                            type="file"
                            id="file-input"
                            hidden
                            onChange={handleFileUpload}
                          />
                          <button
                            className="btn-add-task"
                            onClick={handleButtonClick}
                          >
                            <Icon icon="ic:round-plus" width="20" />
                            <p>Tambah</p>
                          </button>
                        </div>
                        <button className="btn-submit-task" type="submit">
                          <p>Kirim</p>
                        </button>
                        
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <ProfileSiswa />

        <NotifSiswa />
      </div>
    );
}

export default DetailTask;
