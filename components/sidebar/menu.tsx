import Link from "next/link";
import styles from "./styles.module.scss"
import {SettingsTwoTone, SpeedTwoTone} from "@material-ui/icons";


function Menu(props) {
  return (
    <div >
      <nav className={styles.menu}>
        <ol className={styles.list}>
          <Link href="/"><li className={styles.item}><SpeedTwoTone /> <span>Dashboard</span></li></Link>
          <Link href="/settings"><li className={styles.item}><SettingsTwoTone /> <span>Configurações do sistema</span></li></Link>
        </ol>
      </nav>
    </div>
  )
}

export default Menu
