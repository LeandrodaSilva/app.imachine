import { Button } from "react-bootstrap";
import { toggleMenu } from "../../redux/actions/menuActions";
import { connect } from "react-redux";
import Imachine from "../../services/imachine";
import { useRouter } from "next/router";
import Tooltip from "./tooltip";

function HeaderUserBox(props) {
  const { user, isOpen } = props;
  const router = useRouter();

  const doLogout = async (evt) => {
    evt.preventDefault();

    Imachine
      .interceptor()
      .Users
      .logout()
      .then((resp) => {
        localStorage.removeItem("session");
        router.push("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {user && (
        <>
          <Tooltip title={user.user}></Tooltip>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
  isOpen: state.SidebarLeftComponent.isOpen,
});

const mapDispatchToProps = {
  toggleMenu: toggleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserBox);
