import {closeMenu} from "../../redux/actions/sidebarRightActions";
import {connect} from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.45);
  height: 100vh;

  &.open {
    form {
      width: 30vw;
      transition: width ease-in 1s;
    }
  }

  &.close {
    form {
      width: 0;
      transition: width ease-in .4s;
    }
  }

  form {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgb(39, 43, 65);
    height: 100vh;
    color: white;

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

const Form = styled.form`
  
`

function SidebarRight(props) {
  const {
    isOpen,
    children,
    closeMenu
  } = props;

  return (
    isOpen &&
    <Container onClick={closeMenu} className={isOpen ? "open" : "close"}>
      <Form>
        <button onClick={closeMenu}>x</button>
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
