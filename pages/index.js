import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <>
    <Head>
      <title> E-List | Home </title>
    </Head>
    <div>
      <h1 className={styles.title} >Home</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quaerat, dolores non illo earum voluptates mollitia? Corrupti rem quam sed doloribus enim ad quisquam, eveniet, a ullam, illum odio facere?</p>
      <Link href="/items">
        <a className={styles.btn}> See all Items</a>
      </Link>
    </div>
    </>
  );
}
