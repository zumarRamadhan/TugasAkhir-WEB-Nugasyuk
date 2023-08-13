import React, { useState } from "react";
import * as XLSX from "xlsx"; // Menggunakan * as XLSX
import axios from "axios";
import apiurl from "../api/api";
import './ImportExcelComponent.css'; // Impor file CSS untuk styling
import { useNavigate, Link } from "react-router-dom";

const ImportExcelComponent = () => {
  const saveToken = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const [selectedFileImport, setSelectedFileImport] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFileImport(e.target.files[0]);
  };

  const handleImport = () => {
    if (!selectedFileImport) {
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
          `${apiurl}admin/import`,
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
        navigate("/admin/pageguru"); 
        // Lakukan tindakan setelah impor selesai
      } catch (error) {
        console.error("Import error:", error);
        // Tangani kesalahan impor
      }
    };

    reader.readAsArrayBuffer(selectedFileImport);
  };

  return (
  
    <div className="import-excel-container">
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleImport}>Import Excel</button>
    </div>
  );  
};

export default ImportExcelComponent;
