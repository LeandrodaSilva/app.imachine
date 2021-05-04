import {Button} from "react-bootstrap";
import {toggleMenu} from "../../redux/actions/menuActions";
import {connect} from "react-redux";
import Imachine from "../../services/imachine";
import {useRouter} from "next/router";
import Tooltip from "./tooltip";

function HeaderUserBox(props) {
  const {
    user,
    isOpen,
  } = props
  const router = useRouter()

  const doLogout = evt => {
    evt.preventDefault();

    Imachine.logout()
      .then(resp => {
        localStorage.removeItem('session')
        router.push('/login')
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      {
        user &&
        <Tooltip title={user.user}>
          <Button className="userButton"
                  variant="outline-light"
                  onClick={doLogout}>
            Sair
          </Button>
        </Tooltip>
      }
    </>
  )
}

const mapStateToProps = state => ({
  user: state.UserObject.user,
  isOpen: state.SidebarLeftComponent.isOpen,
});

const mapDispatchToProps = {
  toggleMenu: toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserBox)
