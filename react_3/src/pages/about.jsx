import { Header } from "@/components/Header";
import Head from "next/head";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handlClick}>ボタン</button>
      <button onClick={props.handlDisply}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <input
        type="text"
        value={props.text}
        onChange={props.handlChange}
      ></input>
      <button onClick={props.handlAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />
    </div>
  );
};

export default About;
