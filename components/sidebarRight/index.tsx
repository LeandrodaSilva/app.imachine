import {closeMenu} from "../../redux/actions/sidebarRightActions";
import {connect} from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  width: 30vw;
  background-color: transparent;
  height: 100vh;
  transition: opacity ease-in-out 0.5s;
  opacity: 0;

  &.open {
    opacity: 1;
    form {
      right: 0;
      transform: translate(-0vw, 0);
    }
  }

  &.close {
    transform: translate(30vw, 0);
    form {
      right: -30vw;
      transform: translate(30vw, 0);
    }
  }

  form {
    transition: all ease-in-out 0.5s;
    display: flex;
    position: absolute;
    right: -30vw;
    top: 0;
    background-color: rgb(39, 43, 65);
    height: 100vh;
    color: white;
    width: 30vw;

    > button {
      position: absolute;
      top: 10px;
      right: 10px;
      color: rgba(255, 255, 255, 0.64);
      background-color: transparent;
      border: none;
    }

    .children {
      overflow-y: scroll;
      width: 100%;
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
  }
`

const Dimmer = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
`


const Form = styled.form`
  
`

function SidebarRight(props) {
  const {
    isOpen,
    children,
    closeMenu
  } = props;

  return (
    <Container onClick={closeMenu} className={isOpen ? "open" : "close"}>
      {isOpen && <Dimmer onClick={closeMenu}/>}
      <Form>
        <button type="button" onClick={closeMenu}>x</button>
        <div className="children">
          {children}
        </div>
      </Form>
    </Container>
  )
}

const mapStateToProps = state => ({
  isOpen: state.SidebarRight.isOpen
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);
