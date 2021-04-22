import Head from 'next/head'
import Menu from "../../components/menu";
import Header from "../../components/header";
import Main from "../../components/main";

function Settings(props) {
  return (
    <>
      <Head>
        <title>Configurações - Imachine</title>
      </Head>
      <Menu />
      <Header />
      <Main title="Configurações" />
    </>
  )
}

export default Settings
