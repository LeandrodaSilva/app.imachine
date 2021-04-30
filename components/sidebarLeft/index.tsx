import Menu from "./menu";
import {closeMenu} from "../../redux/actions/menuActions";
import {connect} from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 50px;
  width: 100%;
  height: 100%;
  background-color: #282c41;    

  .children {
    overflow-y: scroll;
    width: 100%;
  }

  .open {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    color: black;
    width: 280px;
    max-width: 280px;
    min-width: 280px;
    height: 100%;
    padding: 15px 15px 55px;
    transition: width ease .1s;
    z-index: 998;
  }

  .close {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    //background-color: #272B41;
    color: black;
    width: 0;
    padding: 0;
    transition: width ease-out .1s;
    .menu {
      .list {
        .item {
          justify-content: center;

          svg {
            margin-right: 0;
            width: 100%;
          }

          span {
            display: none;
          }
        }
      }
    }
  }

  .menu {
    width: 100%;
    .list {
      list-style: none;
      width: 100%;
      padding-left: 0;
    }
  }
`

function Sidebar(props) {
  const {
    isOpen,
    children
  } = props;

  return (
    <Container>
      <div className={isOpen ? "open" : "close"}>
        <Menu />
      </div>
      <div className="children">
        {children}
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
