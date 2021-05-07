import { MenuTwoTone } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import { toggleMenu } from "../../redux/actions/menuActions";
import { connect } from "react-redux";
import { MouseEventHandler } from "react";
import Link from "next/link";
import styled from "styled-components";
import { User } from "../../types";
import HeaderUserBox from "../headerUserBox";

interface HeaderTypes {
  user: User;
  isOpen: boolean;
  toggleMenu: MouseEventHandler;
}

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #081b2f;
  color: white;
  height: 50px;
  padding-right: 10px;
  padding-left: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1;

  @media only screen and (min-width: 600px) {
    .menuButton {
      display: none;
    }
  }

  .flex {
    display: flex;
    padding: 3px;
  }

  .logo {
    font-size: 24px;
    margin-bottom: 0;

    &:hover {
      cursor: pointer;
    }

    &:first-letter {
      color: deepskyblue;
      font-weight: bold;
    }
  }

  .menuButton {
    border: none;
    margin-right: 4px;
    background-color: transparent;
    color: white;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  .userButton {
    border: none;
    margin-right: 4px;
    padding: 4px;
    background-color: #ffffff;
    color: #000000;
    width: 100%;
    border-radius: 6px;

    &:hover {
      cursor: pointer;
      background-color: rgba(117, 118, 124, 0.267);
      color: #000000;
    }
  }
`;

const NavRight = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NavLeft = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function Header(props: HeaderTypes) {
  const { user, toggleMenu } = props;

  return (
    <Container>
      <NavLeft>
        <Button
          className="menuButton"
          variant="outline-light"
          onClick={toggleMenu}
        >
          <MenuTwoTone />
        </Button>
        <Link href="/">
          <p className="logo">iMachine</p>
        </Link>
      </NavLeft>

      <NavRight>
        <HeaderUserBox />
      </NavRight>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
  isOpen: state.SidebarLeftComponent.isOpen,
});

const mapDispatchToProps = {
  toggleMenu: toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
