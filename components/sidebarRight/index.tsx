import { closeMenu } from "../../redux/actions/sidebarRightActions";
import { connect } from "react-redux";
import styled from "styled-components";
import { CloseTwoTone } from "@material-ui/icons";
import { FC, MouseEventHandler } from "react";

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  background-color: transparent;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  color: ${(props) => (props.color === "light" ? "black" : "white")};

  @media only screen and (max-width: 600px) {
    &.open {
      form {
        width: 95vw !important;
      }
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    &.open {
      form {
        width: 60% !important;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    &.open {
      form {
        width: 400px !important;
      }
    }
  }

  @media only screen and (min-width: 1201px) {
    &.open {
      form {
        width: 30% !important;
      }
    }
  }

  &.open {
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    form {
      z-index: 1052;
      //width: 30%;
      //min-width: 30%;
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

    form {
      width: 0;
      min-width: 0;
    }
  }

  form {
    transition: all ease-in-out 0.5s;
    -webkit-transition: all ease-in-out 0.5s;
    -moz-transition: all ease-in-out 0.5s;
    display: flex;
    position: absolute;
    top: 0;
    background-color: ${(props) =>
      props.color === "light" ? "white" : "#081b2f"};
    height: 100%;
    color: ${(props) => (props.color === "light" ? "black" : "white")};
    right: 0;

    > button {
      position: absolute;
      top: 10px;
      right: 10px;
      color: ${(props) => (props.color === "light" ? "black" : "white")};
      background-color: transparent;
      border: none;
      transform: rotate(45deg);
      transition: all ease-in-out 0.5s;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    .children {
      opacity: 0;
      overflow-y: scroll;
      width: 0;
      height: 0;
      margin-top: 60px;
      margin-left: 10px;
      margin-right: 10px;
      transition: opacity ease-in-out 1s;

      div {
        transform: scale(0);
        transition: all ease-in-out 0.7s;
      }

      &.visible {
        opacity: 1;
        width: 100%;
        height: 100%;

        div {
          transform: scale(1);
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
          color: #081b2f;

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

interface SideBarProps {
  color?: "light" | "dark";
  isOpen?: boolean;
  closeMenu?: MouseEventHandler<HTMLButtonElement>;
  children?: any;
}

const SidebarRight: FC<SideBarProps> = (props) => {
  const { isOpen, children, closeMenu, color } = props;

  return (
    <Container className={isOpen ? "open" : "close"} color={color}>
      {isOpen && <Dimmer onClick={closeMenu} />}
      <Form>
        <button type="button" onClick={closeMenu}>
          <CloseTwoTone />
        </button>
        <div className={isOpen ? "children visible" : "children"}>
          <div>{children}</div>
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.SidebarRightComponent.isOpen,
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);
