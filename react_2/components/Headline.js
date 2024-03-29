import styles from "../styles/Home.module.css";
import react, { useEffect } from "react";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
    </div>
  );
}
