import Layout from "../components/layout";
import Page from "../components/page";
import styled from "styled-components";
import {setUser} from "../redux/actions/userActions";
import {connect} from "react-redux";
import {User, Warning} from "../types";
import SidebarRight from "../components/sidebarRight";
import {openMenu} from "../redux/actions/sidebarRightActions";
import Card from "../components/card";
import {FiberManualRecordTwoTone, WarningTwoTone} from "@material-ui/icons";
import {useEffect, useState} from "react";
import Imachine from "../services/imachine";
import Link from "next/link";
import Line from "../components/charts/line";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`

const Content = styled.div`
  height: auto;
  display: block;
`

const WarningView = styled.div`
  padding: 0 50px;
`

const WarningViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;

  h2, span {
    font-size: 28px;
    font-weight: lighter;
  }

  span {
    color: red;
  }
`

const WarningViewBody = styled.div`
 
`

const WarningViewBodySensor = styled.li`
  padding-bottom: 10px;
  
  &:hover {
    opacity: 0.8;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .body {
    height: auto;
    border-radius: 8px;
    background-color: #2a2e44;
  }
  
  .footer {
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

const Table = styled.table`
  width: 100%;
  padding-left: 10px;
  min-height: 100px;

  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(189, 189, 189, 0.49);
    width: available;
    padding: 4px;

    &:hover {
      cursor: pointer;
      background-color: rgba(180, 180, 180, 0.2);
      opacity: 0.8;
    }
  }
`

const Dot = styled.span`
  padding-right: 10px;
`

function Index(props: {
  user: User,
  openMenu: Function
}) {
  const {
    user,
    openMenu
  } = props;
  const [arrWarnings, setArrWarnings] = useState<Array<Warning>|[]>([]);
  const [selectedWarning, setSelectedWarning] = useState<Warning|undefined>(undefined);
  const [mounted, setMounted] = useState(false);


  const renderWarningViewItem = () => {
    return (
      <WarningViewBodySensor>
        <div>
          <div className="header">
            <p>Mancal dianteiro motor</p>
            <span>80%</span>
          </div>

          <div className="body">
            <Line />
          </div>

          <div className="footer">
            <Link href="/#">Ver mais</Link>
          </div>
        </div>
      </WarningViewBodySensor>
    )
  }

  const renderWarningView = () => {
    return (
      <WarningView>
        <WarningViewHeader>
          <h2>{selectedWarning.name}</h2>
          <span><WarningTwoTone color={"error"} /> 10%</span>
        </WarningViewHeader>
        <WarningViewBody>
          <ol>
            {renderWarningViewItem()}
            {renderWarningViewItem()}
            {renderWarningViewItem()}
            {renderWarningViewItem()}
            {renderWarningViewItem()}
            {renderWarningViewItem()}
            {renderWarningViewItem()}
            {renderWarningViewItem()}
          </ol>
        </WarningViewBody>
      </WarningView>
    )
  }

  const renderWarnings = (warning: Warning) => {
    let color: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';

    switch (warning.color) {
      case "amarelo":
        color = "error"
        break;
      case "azul":
        color = "primary"
        break;
      case "verde":
        color = "action"
        break;
      case "vermelho":
        color = "error"
        break;
    }

    return (
      <>
        <tr onClick={() => {
          setSelectedWarning(warning);
          openMenu();
        }}>
          <td>
            <Dot>
              <FiberManualRecordTwoTone color={color} fontSize={"inherit"}/>
            </Dot>
            {' '}{warning.name}</td>
          <td>{warning.factory}</td>
          <td>{warning.sector}</td>
          <td>{warning.timestamp}</td>
        </tr>
      </>
    )
  }

  useEffect(() => {
    setMounted(true);
  }, [])

  useEffect(() => {
    if (mounted) {
      Imachine.machine.warnings().then(value => setArrWarnings(value));
    }
  }, [mounted])

  return (
    <>
      <Layout>
        <Page title={user.company.company_name}>
          <Content>
            <Row>
              <Card title="Avisos">
                <Table>
                  <thead>
                  </thead>
                  <tbody>
                  {arrWarnings.map(renderWarnings)}
                  </tbody>
                </Table>
              </Card>
            </Row>
          </Content>
        </Page>
      </Layout>
      {
        selectedWarning &&
        <SidebarRight>
          {renderWarningView()}
        </SidebarRight>
      }
    </>
  )
}

const mapStateToProps = state => ({
  user: state.UserObject.user
});

const mapDispatchToProps = {
  setUser,
  openMenu: openMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
