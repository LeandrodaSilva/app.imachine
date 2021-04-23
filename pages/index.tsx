import Layout from "../components/layout";
import Page from "../components/page";
import Card from "../components/card";
import styled from "styled-components";
import dynamic from 'next/dynamic'
const Pie = dynamic(() => import("../components/charts/pie"), {ssr:false})
const Table = dynamic(() => import("../components/table"), {ssr:false})

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const GeneralPrevision = styled.div`
  flex: 1;
  width: 100%;
  padding: 10px;
  height: 100%;
`

const TableContainer = styled.div`
  flex: 2;
  width: 100%;
  padding: 10px;
`

const Prevision = styled.div`
  flex: 4;
  width: 100%;
  padding: 10px;
`

const Legend = styled.div`
  flex: 1;
  width: 100%;
  padding: 10px;
`

const LegendItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4px;
  height: 100%;
`

const Content = styled.div`
  height: auto;
  //overflow: auto;
  display: block;
`

const Button = styled.button`
  padding: 2px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  
  &:hover {
    opacity: 0.6;
  }
`

const FailButton = styled(Button)`
  background-color: tomato;
  color: white;
`;

const AlertButton = styled(Button)`
  background-color: #ffe047;
  color: white;
`;

const NormalButton = styled(Button)`
  background-color: #4cff00;
  color: white;
`;

const LearningButton = styled(Button)`
  background-color: #00fff7;
  color: white;
`;

function Home(props) {
  return (
    <Layout>
      <Page title="Dashboard">
        <Content>
          <Row>
            <GeneralPrevision>
              <Card title="Previsão Geral">
                <Pie />
              </Card>
            </GeneralPrevision>

            <TableContainer>
              <Card>
                <Table />
              </Card>
            </TableContainer>
          </Row>

          <Row>
            <Legend>
              <Card>
                <LegendItens>
                  <FailButton>FALHAS</FailButton>
                  <AlertButton>ALERTAS</AlertButton>
                  <NormalButton>NORMAIS</NormalButton>
                  <LearningButton>APRENDIZADO</LearningButton>
                </LegendItens>
              </Card>
            </Legend>

            <Prevision>
              <Card title="Previsão de Paulinia">
                <Pie />
              </Card>
            </Prevision>
          </Row>
        </Content>
      </Page>
    </Layout>
  )
}

export default Home
