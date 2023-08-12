import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./ExportExcelComponent.css"; // Impor file CSS untuk styling

const ExportButton = ({ data, filename }) => {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Convert the workbook to an ArrayBuffer instead of Blob
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Create a Blob from the ArrayBuffer
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, `${filename}.xlsx`);
  };

  return <button className="btn-export" onClick={handleExport}>Export XLSX</button>;
};

export default ExportButton;
