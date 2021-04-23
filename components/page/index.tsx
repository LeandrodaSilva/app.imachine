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
          <a href="https://www.techplus.com.br"><img src="/img/icon-techplus.svg" alt="Logo" height={20}/> Techplus</a>
        </footer>
      </div>
    </>
  )
}

export default Page
