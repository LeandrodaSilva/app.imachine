import Header from "../header";
import Sidebar from "../sidebarLeft";
import styled from "styled-components";

const Container = styled.div`
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

function Layout(props) {
  const {
    children
  } = props;

  return (
    <Container>
      <Header />
      <Sidebar>
        {children}
      </Sidebar>
    </Container>
  )
}

export default Layout
