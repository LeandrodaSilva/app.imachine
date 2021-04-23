import Page from "../../components/page";
import Layout from "../../components/layout";
import styled from "styled-components";
import Card from "../../components/card";
import dynamic from "next/dynamic";
const Area = dynamic(() => import("../../components/charts/area"), {ssr:false})


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  flex: 2;
  width: 100%;
  padding: 10px;
`

const Content = styled.div`
  height: auto;
  display: block;
`


function Sensores(props) {
  return (
    <Layout>
      <Page title="Gráficos dos sensores">
        <Content>
          <Row>
            <Container>
              <Card title="Vibração X">
                <Area />
              </Card>
            </Container>

            <Container>
              <Card title="Vibração Y">
                <Area />
              </Card>
            </Container>
          </Row>

          <Row>
            <Container>
              <Card title="Vibração Z">
                <Area />
              </Card>
            </Container>

            <Container>
              <Card title="Temperatura">
                <Area />
              </Card>
            </Container>
          </Row>
        </Content>
      </Page>
    </Layout>
  )
}

export default Sensores
