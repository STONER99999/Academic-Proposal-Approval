import React from "react";

function DownloadButton({ fileurl }) {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = fileurl;
    link.download = fileurl.substring(fileurl.lastIndexOf("/") + 1); // Extract filename from URL for download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={downloadFile}>Download</button>;
}

export default DownloadButton;
