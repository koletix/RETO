import React from "react";
import Helmet from "react-helmet";
import notFoundImage from "../Media/404.png"; // Importa la imagen
import Styles from "./Nopage.module.css"; // Importa los estilos CSS específicos para Nopage

export default function Nopage() {
  return (
    <>
      <Helmet>
        <title>ERROR 404</title>
        <meta
          name="description"
          content="No se encontró la página solicitada"
        />
        {/* Otros metadatos si es necesario */}
      </Helmet>
      <div className={Styles.container}>
        <h1>NO PAGE FOUND</h1>
        <img src={notFoundImage}  alt="Imagen asociada" />
      </div>
    </>
  );
}