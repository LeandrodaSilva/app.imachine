import {Button, Modal} from "react-bootstrap";
import {
  BarChartTwoTone,
  ExitToAppTwoTone,
  MenuTwoTone,
  MultilineChartTwoTone,
  PieChartTwoTone, SettingsTwoTone,
  SpeedTwoTone
} from "@material-ui/icons";
import Link from "next/link";
import {closeMenu} from "../../redux/actions/menuActions";
import {connect} from "react-redux";
import {MouseEventHandler} from "react";

interface MenuProps {
  isOpen: boolean,
  closeMenu: MouseEventHandler,
}

function Menu(props: MenuProps) {
  const {
    isOpen,
    closeMenu,
  } = props;

  return (
    <div className="container">
      <Modal className="modal left" show={isOpen} onHide={closeMenu} animation={false}>
        <div className="menu-header">
          <Button variant="outline-light" onClick={closeMenu}>
            <MenuTwoTone />
          </Button>
          <h6>Lycra</h6>
          <Button variant="outline-light" onClick={closeMenu}>
            <ExitToAppTwoTone />
          </Button>
        </div>
        <Modal.Body>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Lycra
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Paulinia
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Classica
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Blower
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Blower L.O.A</li>
                            <li className="list-group-item">Blower L.A</li>
                            <li className="list-group-item">Motor L.A</li>
                            <li className="list-group-item">Motor L.O.A</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </Modal.Body>
        <ul className="list-group">
          <Link href="/"><a onClick={closeMenu} className="list-group-item list-group-item-action"><SpeedTwoTone /> Dashboard</a></Link>
          <Link href="/"><a onClick={closeMenu} className="list-group-item list-group-item-action disabled"><MultilineChartTwoTone /> Gráfico dos sensores</a></Link>
          <Link href="/"><a onClick={closeMenu} className="list-group-item list-group-item-action disabled"><PieChartTwoTone /> Gráfico de previsibilidade</a></Link>
          <Link href="/"><a onClick={closeMenu} className="list-group-item list-group-item-action disabled"><BarChartTwoTone /> Gráfico DHT</a></Link>
          <Link href="/settings"><a onClick={closeMenu} className="list-group-item list-group-item-action"><SettingsTwoTone /> Configurações do sistema</a></Link>
        </ul>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = {
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
