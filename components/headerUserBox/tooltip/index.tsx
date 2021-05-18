import { AccountCircleTwoTone, ExitToApp } from "@material-ui/icons";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Imachine from "../../../services/imachine";
import { useRouter } from "next/router";
import Avatar from "@material-ui/core/Avatar";
import styles from "./styles.module.scss";

function Tooltip(props: { title?: any; children?: any }) {
  const { title, children } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const doLogout = (evt) => {
    evt.preventDefault();

    Imachine.interceptor()
      .Users.logout()
      .then((resp) => {
        localStorage.removeItem("session");
        router.push("/login");
      })
      .catch((error) => {
        localStorage.removeItem("session");
        router.push("/login");
      });
  };

  return (
    <>
      <div>
        <Button aria-describedby={id} onClick={handleClick}>
          <Avatar className={styles.color}>
            <AccountCircleTwoTone />
          </Avatar>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography>
            <List component="nav" aria-label="user userbox">
              <ListItem button onClick={(evt) => router.push("/configuracoes")}>
                <ListItemText primary="Configurações" />
              </ListItem>
              <ListItem button onClick={doLogout}>
                <ListItemText primary="Sair" />
              </ListItem>
            </List>
          </Typography>
        </Popover>
      </div>
    </>
  );
}

export default Tooltip;
