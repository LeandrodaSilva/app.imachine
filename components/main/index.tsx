import {Button} from "react-bootstrap";
import {MenuTwoTone} from "@material-ui/icons";
import {openMenu} from "../../redux/actions/menuActions";
import {connect} from "react-redux";
import {MouseEventHandler} from "react";

interface MainProps {
  title: string,
  openMenu: MouseEventHandler,
  children?: Element
}

function Main(props: MainProps) {
  const {
    openMenu,
    children,
    title,
  } = props;

  return (
    <>
      <main className="container-fluid pt-3">
        <div className="card">
          <div className="card-header">
            <Button variant="outline-dark" onClick={openMenu}>
              <MenuTwoTone/>
            </Button>
            <span className="pl-3">{title}</span>
          </div>
          <div className="card-body">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = {
  openMenu: openMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
