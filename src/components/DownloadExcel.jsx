import React from "react";
import axios from "axios";

const DownloadExcel = () => {
  const downloadExcel = () => {
    axios.get("http://localhost:5000/api/download-excel", { responseType: "blob" })
      .then((response) => {
        const blob = new Blob([response.data], { type: response.headers["content-type"] });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Filtered_Sales.xlsx";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Lỗi khi tải file:", error);
      });
  };

  return (
    <div>
      <h2>Task 1: Tải File Excel đã lọc các hàng có giá trị cột Sales trên 50000</h2>
      <button onClick={downloadExcel}>Tải Excel</button>
    </div>
  );
};

export default DownloadExcel;
