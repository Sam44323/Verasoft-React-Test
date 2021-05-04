import React from "react";
import Loader from "react-loader-spinner";

import styles from "./Loader.module.css";

const LoaderComponent = () => {
  return (
    <h1 className={styles.loaderContainer}>
      <Loader type="ThreeDots" color="#D2D2D2" width={48} height={48} />
    </h1>
  );
};

export default LoaderComponent;
