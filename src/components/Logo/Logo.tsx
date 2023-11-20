"use client";

import { FC } from "react";
import styles from "./Logo.module.scss";
import { Link } from "react-scroll";

export const Logo: FC<{ option: string }> = ({ option }) => {
  return (
    <Link className={`${styles.logo} ${option}`} to="hero" offset={-150}>
      EVIC
    </Link>
  );
};
