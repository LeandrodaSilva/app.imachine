import Link from "next/link";
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
      <nav className="menu">
        <ol className="list">
          <Link href="/"><li className="item"><SpeedTwoTone /> <span>Dashboard</span></li></Link>
          <Link href="/empresas"><li className="item"><BusinessTwoTone /> <span>Empresas</span></li></Link>
          <Link href="/unidades"><li className="item"><LocationCity /> <span>Unidades</span></li></Link>
          <Link href="/areas"><li className="item"><Explore /> <span>Áreas</span></li></Link>
          <Link href="/equipamentos"><li className="item"><Build /> <span>Equipamentos</span></li></Link>
          <Link href="/locais"><li className="item"><LocalConvenienceStoreTwoTone /> <span>Locais</span></li></Link>
          <Link href="/sensores"><li className="item"><BarChartTwoTone /> <span>Gráfico dos sensores</span></li></Link>
          <Link href="/configuracoes"><li className="item"><SettingsTwoTone /> <span>Configurações do sistema</span></li></Link>
        </ol>
      </nav>
    </div>
  )
}

export default Menu
