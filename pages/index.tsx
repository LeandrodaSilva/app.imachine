import Layout from "../components/layout";
import Page from "../components/page";
import Card from "../components/card";

function Home(props) {
  return (
    <Layout>
      <Page title="Dashboard">
        <Card title="Previsão Geral" />
      </Page>
    </Layout>
  )
}

export default Home
