import Head from "next/head";
import styled from "styled-components";

interface PageProps {
  title: string,
  children?: any
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  background-color: #f5f5f5;
  overflow: auto;
  overflow-x: hidden;
  height: 100vh;
  padding-bottom: 30px;
  padding-left: 10%;
  padding-right: 10%;

  h1 {
    font-size: 28px;
    padding-bottom: 20px;
    padding-top: 50px;
  }

  .main {
    width: 100%;
    padding: 10px;
    margin-bottom: 40px;
  }

  footer {
    position: fixed;
    bottom: 0;
    right: 0;
    border-top-left-radius: 8px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: max-content;
    min-height: 30px;
    background-color: white;
    color: rgb(111, 111, 111);
    opacity: 0.8;

    img {
      padding-left: 8px;
    }
  }
`

function Page(props: PageProps) {
  const {
    title,
    children
  } = props;
  return (
    <>
      <Container>
        <Head>
          <title>{title}</title>
        </Head>

        <main className="main">
          <h1>{title}</h1>
          {children}
        </main>

        <footer>
          <span>2021 © iMachine</span>
          <a href="https://www.techplus.com.br"><img src="/img/icon-techplus.svg" alt="Logo" height={20}/> Techplus</a>
        </footer>
      </Container>
    </>
  )
}

export default Page
