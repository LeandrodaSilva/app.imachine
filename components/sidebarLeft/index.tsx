import { closeMenu } from "../../redux/actions/menuActions";
import { connect } from "react-redux";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import {
  BusinessTwoTone,
  HomeTwoTone,
  PersonTwoTone,
} from "@material-ui/icons";
import Link from "next/link";

function Sidebar(props) {
  const router = useRouter();
  const { isOpen, children, closeMenu } = props;

  return (
    <>
      <div
        className={
          isOpen ? `${styles.container} ${styles.block}` : styles.container
        }
      >
        <nav className={styles.menu}>
          <ol className={styles.list}>
            <a href="/">
              <div
                className={
                  router.pathname === "/"
                    ? `${styles.borderGradient} ${styles.active}`
                    : styles.borderGradient
                }
              >
                <li className={styles.item}>
                  <div className={styles.icon}>
                    <HomeTwoTone />
                  </div>{" "}
                  <span>Dashboard</span>
                </li>
              </div>
            </a>

            <Link href="/organizacao">
              <div
                className={
                  router.pathname === "/organizacao"
                    ? `${styles.borderGradient} ${styles.active}`
                    : styles.borderGradient
                }
              >
                <li className={styles.item}>
                  <div className={styles.icon}>
                    <BusinessTwoTone />
                  </div>{" "}
                  <span>Organização</span>
                </li>
              </div>
            </Link>

            <a href="/usuarios">
              <div
                className={
                  router.pathname === "/usuarios"
                    ? `${styles.borderGradient} ${styles.active}`
                    : styles.borderGradient
                }
              >
                <li className={styles.item}>
                  <div className={styles.icon}>
                    <PersonTwoTone />
                  </div>{" "}
                  <span>Usuários</span>
                </li>
              </div>
            </a>
          </ol>
        </nav>
      </div>
      {isOpen && <div className={styles.dimmer} onClick={closeMenu} />}
      <div className={styles.children}>{children}</div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.SidebarLeftComponent.isOpen,
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
