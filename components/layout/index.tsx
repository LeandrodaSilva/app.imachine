import Header from "../header";
import Sidebar from "../sidebar";
import styles from "./styles.module.scss"

function Layout(props) {
  const {
    children
  } = props;

  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar>
        {children}
      </Sidebar>
    </div>
  )
}

export default Layout
