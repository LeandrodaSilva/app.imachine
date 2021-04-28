import Layout from "../components/layout";
import Page from "../components/page";
import styled from "styled-components";
import {setUser} from "../redux/actions/userActions";
import {connect} from "react-redux";
import {User} from "../types";
import SidebarRight from "../components/sidebarRight";
import {openMenu} from "../redux/actions/sidebarRightActions";

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
              <WarningsContainer>
                <h3>Avisos</h3>
                <button>configurar</button>
              </WarningsContainer>

              <WarningsList>
                <li onClick={() => openMenu()}>
                  <a>
                    <span>Soprador</span>
                    <span>São Paulo</span>
                    <span>Setor 1</span>
                    <span>2%</span>
                  </a>
                </li>
              </WarningsList>
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
