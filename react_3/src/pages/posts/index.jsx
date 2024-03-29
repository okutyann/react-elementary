import Head from "next/head";
import { Header } from "@/components/Header";
import { Posts as PostsComponents } from "@/components/Posts";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PostsComponents />
    </div>
  );
};
export default Posts;
