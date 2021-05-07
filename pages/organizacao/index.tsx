import Page from "../../components/page";
import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { useState } from "react";
import styled from "styled-components";
import Card from "../../components/card";
import Button from "@material-ui/core/Button";
import {
  BuildTwoTone,
  BusinessTwoTone,
  Delete,
  Edit,
  EmojiEmotionsTwoTone,
  LocalConvenienceStoreTwoTone,
  PriorityHigh,
  VisibilityTwoTone,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nested2: {
    paddingLeft: theme.spacing(8),
  },
  nested3: {
    paddingLeft: theme.spacing(12),
  },
}));

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 40px;
`;

const Content = styled.div`
  height: auto;
  display: block;

  nav {
    width: 100%;
  }
`;

function Settings(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openCampinas, setOpenCampinas] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Layout>
      <Page title="Organização">
        <Content>
          <Row>
            <Card title="">
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Todas as suas organizações
                  </ListSubheader>
                }
                className={classes.root}
              >
                <ListItem
                  button
                  onClick={() => {
                    setOpenCampinas(!openCampinas);
                  }}
                >
                  <ListItemIcon>
                    <BusinessTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="Campinas" />
                  {openCampinas ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openCampinas} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.nested}
                      onClick={() => {
                        setOpen2(!open2);
                      }}
                    >
                      <ListItemIcon>
                        <LocalConvenienceStoreTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Setor 1" />
                      {open2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={open2} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem
                          button
                          className={classes.nested2}
                          onClick={() => {
                            setOpen3(!open3);
                          }}
                        >
                          <ListItemIcon>
                            <BuildTwoTone />
                          </ListItemIcon>
                          <ListItemText primary="Soprador" />
                          {open3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                        <Collapse in={open3} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItem button className={classes.nested3}>
                              <ListItemIcon>
                                <PriorityHigh />
                              </ListItemIcon>
                              <ListItemText primary="Mancal dianteiro motor" />
                              <span>
                                <Button
                                  startIcon={<VisibilityTwoTone />}
                                  // variant="outlined"
                                />
                                <Button
                                  startIcon={<Edit />}
                                  // variant="outlined"
                                />
                                <Button
                                  color="secondary"
                                  startIcon={<Delete />}
                                  // variant="outlined"
                                />
                              </span>
                            </ListItem>

                            <ListItem button className={classes.nested3}>
                              <ListItemIcon>
                                <PriorityHigh />
                              </ListItemIcon>
                              <ListItemText primary="Mancal traseiro motor" />
                              <span>
                                <Button
                                  startIcon={<VisibilityTwoTone />}
                                  // variant="outlined"
                                />
                                <Button
                                  startIcon={<Edit />}
                                  // variant="outlined"
                                />
                                <Button
                                  color="secondary"
                                  startIcon={<Delete />}
                                  // variant="outlined"
                                />
                              </span>
                            </ListItem>
                          </List>
                        </Collapse>

                        <ListItem button className={classes.nested2}>
                          <ListItemIcon>
                            <BuildTwoTone />
                          </ListItemIcon>
                          <ListItemText primary="Soprador" />
                        </ListItem>
                      </List>
                    </Collapse>

                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <LocalConvenienceStoreTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Setor 2" />
                    </ListItem>
                  </List>
                </Collapse>

                <ListItem button onClick={handleClick}>
                  <ListItemIcon>
                    <BusinessTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="Bauru" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <LocalConvenienceStoreTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Card>
          </Row>
        </Content>
      </Page>
    </Layout>
  );
}

export default Settings;
