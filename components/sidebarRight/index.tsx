import { closeMenu } from "../../redux/actions/sidebarRightActions";
import { connect } from "react-redux";
import styled from "styled-components";
import { CloseTwoTone } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  min-width: 0;
  max-width: 0;
  background-color: transparent;
  height: 100%;
  min-height: 100%;
  overflow: hidden;

  &.open {
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    form {
      z-index: 1052;
      width: 400px;
      min-width: 400px;
      max-width: 400px;
      transform: translate(-0, 0);

      > button {
        transform: rotate(0deg);
        transition: all ease-in-out 0.5s;
      }
    }
  }

  &.close {
    width: 0;
    min-width: 0;
    max-width: 0;

    form {
      width: 0;
      min-width: 0;
      max-width: 0;
    }
  }

  form {
    transition: all ease-in-out 0.5s;
    -webkit-transition: all ease-in-out 0.5s;
    -moz-transition: all ease-in-out 0.5s;
    display: flex;
    position: absolute;
    top: 0;
    background-color: rgb(39, 43, 65);
    height: 100%;
    color: white;
    width: 0;
    right: 0;
    min-width: 0;
    max-width: 0;

    > button {
      position: absolute;
      top: 10px;
      right: 10px;
      color: rgba(255, 255, 255, 0.64);
      background-color: transparent;
      border: none;
      transform: rotate(45deg);
      transition: all ease-in-out 0.5s;
    }

    .children {
      overflow-y: scroll;
      width: 100%;
      margin-top: 60px;
      margin-left: 10px;
      margin-right: 10px;
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
`;

const Dimmer = styled.div`
  width: 100vw;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1051;
`;

const Form = styled.form``;

function SidebarRight(props) {
  const { isOpen, children, closeMenu } = props;

  return (
    <Container className={isOpen ? "open" : "close"}>
      {isOpen && <Dimmer onClick={closeMenu} />}
      <Form>
        <button type="button" onClick={closeMenu}>
          <CloseTwoTone />
        </button>
        <div className="children">{children}</div>
      </Form>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.SidebarRightComponent.isOpen,
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);
