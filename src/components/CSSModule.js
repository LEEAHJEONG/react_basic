import React from "react";
import styles from "../styles/CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="somthing">CSS Module!</span>
    </div>
  );
};

export default CSSModule;