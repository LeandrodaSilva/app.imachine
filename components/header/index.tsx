import styles from "./styles.module.scss"
import {ExitToAppTwoTone, MenuTwoTone} from "@material-ui/icons";
import {Button} from "react-bootstrap";
import {toggleMenu} from "../../redux/actions/menuActions";
import {connect} from "react-redux";
import {MouseEventHandler} from "react";
import Link from "next/link"
import {useRouter} from "next/router";

interface HeaderTypes {
  isOpen: boolean,
  toggleMenu: MouseEventHandler,
}

function Header(props: HeaderTypes) {
  const {
    toggleMenu
  } = props;
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.flex}>
        <Button className={styles.menuButton} variant="outline-light" onClick={toggleMenu}>
          <MenuTwoTone />
        </Button>
        <Link href="/"><p className={styles.logo}>iMachine</p></Link>
      </div>

      <div className={styles.flex}>
        <Button className={styles.menuButton}
                variant="outline-light"
                onClick={event => router.push('/login')}>
          <ExitToAppTwoTone />
        </Button>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = {
  toggleMenu: toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
