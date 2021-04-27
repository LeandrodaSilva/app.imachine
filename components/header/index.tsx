import {ExitToAppTwoTone, MenuTwoTone} from "@material-ui/icons";
import {Button} from "react-bootstrap";
import {toggleMenu} from "../../redux/actions/menuActions";
import {connect} from "react-redux";
import {MouseEventHandler} from "react";
import Link from "next/link"
import {useRouter} from "next/router";
import styled from "styled-components";

interface HeaderTypes {
  isOpen: boolean,
  toggleMenu: MouseEventHandler,
}

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: rgb(39, 43, 65);
  color: white;
  height: 50px;
  padding-right: 10px;
  padding-left: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

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

    &:hover {
      background-color: #343952;
      color: white;
    }
  }
`

function Header(props: HeaderTypes) {
  const {
    toggleMenu
  } = props;
  const router = useRouter();

  return (
    <Container>
      <div className="flex">
        <Button className="menuButton" variant="outline-light" onClick={toggleMenu}>
          <MenuTwoTone />
        </Button>
        <Link href="/"><p className="logo">iMachine</p></Link>
      </div>

      <div className="flex">
        <Button className="menuButton"
                variant="outline-light"
                onClick={event => router.push('/login')}>
          <ExitToAppTwoTone />
        </Button>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = {
  toggleMenu: toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
