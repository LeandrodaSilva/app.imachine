import Head from "next/head";
import styles from "./styles.module.scss"

interface PageProps {
  title: string,
  children?: any
}

function Page(props: PageProps) {
  const {
    title,
    children
  } = props;
  return (
    <>
      <div className={styles.page}>
        <Head>
          <title>{title}</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.h1}>{title}</h1>
          {children}
        </main>

        <footer className={styles.footer}>
          <span>2021 © iMachine</span>
        </footer>
      </div>
    </>
  )
}

export default Page
