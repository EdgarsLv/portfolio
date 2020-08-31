import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const logo = (props) => (
  <div className={styles.Logo}>
    <Link to="/">
      <svg
        className={styles.svg}
        style={{ height: props.height }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140 124"
      >
        <path
          className={styles.p}
          d="M64 123a62 62 0 01-48-32h9l1 2 8 9a60 60 0 0050 15 61 61 0 0034-17l-7 7a62 62 0 01-47 16zm7-9a60 60 0 01-25-9l2 1 11 4h11l14-1a55 55 0 0037-32l3-1a44 44 0 006-1l-3 6c-3 7-8 14-14 19a58 58 0 01-42 14zM1 62V36h60l-5 6-5 7H17v7h42l-5 6-4 5H34l-17 1v7h22l22 1-5 6-4 6H1zm69 13V62h47c4-1 7-3 7-7 0-3-2-5-5-6H70l5-7 5-6h19l26 1a20 20 0 0113 10c3 6 2 14-2 19-3 4-8 7-14 8l-19 1H86l-1 7v6H70zM56 48l5-6 4-6h4l-5 6-5 7h-2c-2 0-2 0-1-1zm7 0l5-6 5-6h3l-5 7-4 6h-2l-2-1zm59-14l-4-1h-3l-1-1c-9-10-21-17-34-18a59 59 0 00-45 13l5-5a58 58 0 0173-1l9 10 2 3h-2zM16 32l1-2a62 62 0 0186-20c4 3 4 3 0 1-9-4-18-6-29-6L60 7c-14 3-26 12-34 24l-1 2h-5l-4-1z"
        />
        <path
          className={styles.e}
          d="M64 123a62 62 0 01-48-32h9l1 2 8 9a60 60 0 0050 15 61 61 0 0034-17l-7 7a62 62 0 01-47 16zM1 62V36h60l-5 6-5 7H17v7h42l-5 6-4 5H34l-17 1v7h22l22 1-5 6-4 6H1zm55-14l5-6 4-6h4l-5 6-5 7h-2c-2 0-2 0-1-1zM16 32l1-2a62 62 0 0186-20c4 3 4 3 0 1-9-4-18-6-29-6L60 7c-14 3-26 12-34 24l-1 2h-5l-4-1z"
        />
      </svg>
    </Link>
  </div>
);

export default logo;
