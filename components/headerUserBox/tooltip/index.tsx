import styled from "styled-components";
import { AccountCircleTwoTone, ExitToApp } from "@material-ui/icons";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Imachine from "../../../services/imachine";
import { useRouter } from "next/router";
import { withStyles } from "@material-ui/core";
import {
  green,
  purple,
  common,
  deepOrange,
  deepPurple,
} from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  color: {
    color: "black",
    backgroundColor: "white",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: common.white,
    backgroundColor: "transparent",
  },
}))(Button);

function Tooltip(props: { title?: any; children?: any }) {
  const { title, children } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const classes = useStyles();

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
        <ColorButton aria-describedby={id} onClick={handleClick}>
          <Avatar className={classes.color}>
            <AccountCircleTwoTone />
          </Avatar>
        </ColorButton>
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
