import Head from 'next/head'
import Menu from "../components/menu";
import Header from "../components/header";
import Main from "../components/main";

function Home(props) {
  return (
    <>
      <Head>
        <title>iMachine</title>
      </Head>
      <Menu />
      <Header />
      <Main title="Dashboard [ Lycra ]"/>
    </>
  )
}

export default Home
