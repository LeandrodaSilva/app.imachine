import Layout from "../components/layout";
import Page from "../components/page";
import styled from "styled-components";
import {setUser} from "../redux/actions/userActions";
import {connect} from "react-redux";
import {User} from "../types";
import SidebarRight from "../components/sidebarRight";
import {openMenu} from "../redux/actions/sidebarRightActions";
import Card from "../components/card";
import {FiberManualRecordTwoTone, WarningTwoTone} from "@material-ui/icons";

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

const WarningsContainer = styled.div`
  width: available;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  h3, button {
    font-size: 16px;
  }

  button {
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.11);
    background-color: transparent;
    color: rgba(91, 91, 91, 0.83);

    &:hover {
      background-color: rgba(255, 255, 255, 0.22);
      border: 1px solid #0053ff;
    }
  }
`


const WarningsList = styled.ul`
  list-style: none;
  width: available;
  padding: 0;

  li {
    width: available;
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(189, 189, 189, 0.49);
    padding-bottom: 4px;
    width: available;

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.22);
      border-radius: 4px;
      border-bottom: 1px solid #0053ff;
      opacity: 0.8;
    }
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
                  <tr onClick={() => openMenu()}>
                    <td>
                      <Dot>
                        <FiberManualRecordTwoTone color={"error"} fontSize={"inherit"}/>
                      </Dot>
                      <WarningTwoTone color={"error"} />  Soprador</td>
                    <td>São Paulo</td>
                    <td>Setor 1</td>
                    <td style={{color: "red", fontWeight: "bold"}}>2%</td>
                  </tr>
                  <tr onClick={() => openMenu()}>
                    <td>
                      <Dot>
                        <FiberManualRecordTwoTone color={"error"} fontSize={"inherit"}/>
                      </Dot>
                      <WarningTwoTone color={"error"} />  Soprador</td>
                    <td>São Paulo</td>
                    <td>Setor 2</td>
                    <td style={{color: "red", fontWeight: "bold"}}>5%</td>
                  </tr>
                  <tr onClick={() => openMenu()}>
                    <td>
                      <Dot>
                        <FiberManualRecordTwoTone color={"error"} fontSize={"inherit"}/>
                      </Dot>
                      <WarningTwoTone color={"error"} />  Soprador</td>
                    <td>São Paulo</td>
                    <td>Setor 3</td>
                    <td style={{color: "red", fontWeight: "bold"}}>1%</td>
                  </tr>
                  <tr onClick={() => openMenu()}>
                    <td>
                      <Dot>
                        <FiberManualRecordTwoTone color={"error"} fontSize={"inherit"}/>
                      </Dot>
                      <WarningTwoTone color={"error"} />  Soprador</td>
                    <td>São Paulo</td>
                    <td>Setor 4</td>
                    <td style={{color: "red", fontWeight: "bold"}}>4%</td>
                  </tr>
                  </tbody>
                </Table>
              </Card>
            </Row>
          </Content>
        </Page>
      </Layout>
      <SidebarRight>
      </SidebarRight>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  setUser,
  openMenu: openMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
