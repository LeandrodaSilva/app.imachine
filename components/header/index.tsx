import { MenuTwoTone } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import { toggleMenu } from "../../redux/actions/menuActions";
import { connect } from "react-redux";
import { FC, MouseEventHandler } from "react";
import Link from "next/link";
import styled from "styled-components";
import { User } from "../../types";
import HeaderUserBox from "../headerUserBox";
import styles from "./styles.module.scss";

interface HeaderTypes {
  user: User;
  isOpen: boolean;
  toggleMenu: MouseEventHandler;
}

const Header: FC<HeaderTypes> = (props) => {
  const { user, toggleMenu } = props;

  return (
    <div className={styles.container}>
      <nav className={styles.navLeft}>
        <Button
          className={styles.menuButton}
          variant="outline-light"
          onClick={toggleMenu}
        >
          <MenuTwoTone />
        </Button>
        <Link href="/">
          <p className={styles.logo}>iMachine</p>
        </Link>
      </nav>

      <nav className={styles.navRight}>
        <HeaderUserBox />
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
  isOpen: state.SidebarLeftComponent.isOpen,
});

const mapDispatchToProps = {
  toggleMenu: toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
