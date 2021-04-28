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

  .children {
    overflow-y: scroll;
    width: 100%;
  }

  .open {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    //background-color: #272B41;
    color: black;
    width: 300px;
    height: calc(100vh - 50px);
    padding: 1em;
    transition: width ease-in .1s;
  }

  .close {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    //background-color: #272B41;
    color: black;
    width: 60px;
    height: calc(100vh - 50px);
    padding: 5px;
    transition: width ease-in .1s;
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

      .item {
        display: flex;
        align-items: start;
        justify-content: flex-start;
        width: 100%;
        border-radius: 4px;
        padding: 10px 4px;
        color: #343952;

        &:hover {
          cursor: pointer;
          background-color: rgba(54, 59, 88, 0.1);
          color: black;
        }

        svg {
          margin-right: 5px;
        }
      }
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
