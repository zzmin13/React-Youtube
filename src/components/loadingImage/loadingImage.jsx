import React from "react";
import styles from "./loadingImage.module.css";
const LoadingImage = (props) => {
  return (
    <div className={styles.box}>
      <img
        className={styles.image}
        src="https://i.imgur.com/bBILr5g.gif"
        alt="loading"
      />
      <h1 className={styles.text}>Loading...</h1>
    </div>
  );
};

export default LoadingImage;
