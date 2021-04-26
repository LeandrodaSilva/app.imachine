import Link from "next/link";
import styles from "./styles.module.scss"
import {
  BarChartTwoTone, Build,
  BusinessTwoTone,
  Explore, LocalConvenienceStoreTwoTone,
  LocationCity,
  SettingsTwoTone,
  SpeedTwoTone
} from "@material-ui/icons";


function Menu(props) {
  return (
    <div >
      <nav className={styles.menu}>
        <ol className={styles.list}>
          <Link href="/"><li className={styles.item}><SpeedTwoTone /> <span>Dashboard</span></li></Link>
          <Link href="/empresas"><li className={styles.item}><BusinessTwoTone /> <span>Empresas</span></li></Link>
          <Link href="/unidades"><li className={styles.item}><LocationCity /> <span>Unidades</span></li></Link>
          <Link href="/areas"><li className={styles.item}><Explore /> <span>Áreas</span></li></Link>
          <Link href="/equipamentos"><li className={styles.item}><Build /> <span>Equipamentos</span></li></Link>
          <Link href="/locais"><li className={styles.item}><LocalConvenienceStoreTwoTone /> <span>Locais</span></li></Link>
          <Link href="/sensores"><li className={styles.item}><BarChartTwoTone /> <span>Gráfico dos sensores</span></li></Link>
          <Link href="/configuracoes"><li className={styles.item}><SettingsTwoTone /> <span>Configurações do sistema</span></li></Link>
        </ol>
      </nav>
    </div>
  )
}

export default Menu
