import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Main } from "../components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Index() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handlClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handlChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handlDisply = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  useEffect(() => {
    document.body.style.background = "lightblue";
    return () => {
      document.body.style.background = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handlClick}>ボタン</button>
      <button onClick={handlDisply}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handlChange}></input>
      <Main page="index" />
    </div>
  );
}
