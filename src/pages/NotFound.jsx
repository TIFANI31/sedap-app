// pages/NotFound.jsx
import React from "react";
import ErrorPage from "../components/ErrorPage";
import gambar404 from "../assets/images/404.png"; // sesuaikan path

const NotFound = () => {
  return (
    <ErrorPage
      kodeError="404"
      deskripsiError="Sorry, page not found. The page you were looking for doesn't exist."
      gambarError={gambar404}
    />
  );
};

export default NotFound;
