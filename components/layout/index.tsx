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
        <main>teste</main>
      </Sidebar>
    </div>
  )
}

export default Layout
