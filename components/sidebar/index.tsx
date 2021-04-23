import styles from "./styles.module.scss"
import Menu from "./menu";
import {closeMenu} from "../../redux/actions/menuActions";
import {connect} from "react-redux";

function Sidebar(props) {
  const {
    isOpen,
    children
  } = props;

  return (
    <div className={styles.container}>
      <div className={isOpen ? styles.open : styles.close}>
        <Menu />
      </div>
      <div className={styles.children}>
        {children}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
