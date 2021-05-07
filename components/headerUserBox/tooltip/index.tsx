import styled from "styled-components";
import { AccountCircleTwoTone, ExitToApp } from "@material-ui/icons";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Imachine from "../../../services/imachine";
import { useRouter } from "next/router";
import { withStyles } from "@material-ui/core";
import { green, purple, common } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: common.white,
    backgroundColor: "transparent",
  },
}))(Button);

const Container = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 20px;

  &:hover {
    > span {
      visibility: visible;
    }
  }
`;

const Body = styled.span`
  visibility: hidden;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  padding: 10px;
  border-radius: 6px;

  position: absolute;
  z-index: 2;

  width: 120px;
  top: 110%;
  left: 60%;
  margin-left: -110px;

  &:after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 550%;
    margin-left: 25px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`;

const UserButton = styled(Button)`
  background-color: transparent;
`;

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

    Imachine.users
      .logout()
      .then((resp) => {
        localStorage.removeItem("session");
        router.push("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>
        <ColorButton
          aria-describedby={id}
          startIcon={<AccountCircleTwoTone color="inherit" />}
          onClick={handleClick}
        ></ColorButton>
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
              <ListItem button onClick={doLogout}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
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
