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
import React, { FC, useState } from "react";
import styled from "styled-components";
import Card from "../../components/card";
import Button from "@material-ui/core/Button";
import SidebarRight from "../../components/sidebarRight";
import { openMenu } from "../../redux/actions/sidebarRightActions";
import { connect } from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import {
  AddTwoTone,
  BarChartTwoTone,
  BuildTwoTone,
  BusinessTwoTone,
  ChevronRightTwoTone,
  Delete,
  Edit,
  EditTwoTone,
  EmojiEmotionsTwoTone,
  LocalConvenienceStoreTwoTone,
  NavigateBeforeTwoTone,
  PriorityHigh,
  SaveTwoTone,
  VisibilityTwoTone,
} from "@material-ui/icons";
import { FormControl, MenuItem, TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

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

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  > button {
    color: black;
    margin: 3px;
  }
`;

const WarningView = styled.div`
  padding: 0 5px;
`;

const WarningViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;

  h2,
  span {
    font-size: 28px;
    font-weight: lighter;
  }

  span {
    color: red;
  }
`;

const WarningViewBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;

  .form-group {
    width: 100%;
    padding-bottom: 20px;
  }
`;

const UnidadeImage = styled.div`
  height: 100px;
  width: 100px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WarningViewBodySensor = styled.div`
  color: white;
  padding-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .body {
    height: auto;
    border-radius: 8px;
    background-color: #2a2e44;
  }

  .footer {
    padding-top: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Organizacao: FC<any> = (props) => {
  const { openMenu } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [openCampinas, setOpenCampinas] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [dense, setDense] = useState(true);
  const [selectedView, setSelectedView] = useState("");
  const router = useRouter();

  const [imgBase64, setImgBase64] = useState<any>("");

  const [unidadeId, setUnidadeId] = useState<any>("");
  const [unidadeNome, setUnidadeNome] = useState<any>("");

  const [setorId, setSetorId] = useState<any>("");
  const [setorNome, setSetorNome] = useState<any>("");

  const [maquinaId, setMaquinaId] = useState<any>("");
  const [maquinaNome, setMaquinaNome] = useState<any>("");

  const [sensorNome, setSensorNome] = useState<any>("");
  const [sensorCodigo, setSensorCodigo] = useState<any>("");

  const handleClick = () => {
    setOpen(!open);
  };

  const resetStateOfSidebarMenuRight = () => {
    setSelectedView("");
    setImgBase64("");
    setUnidadeId("");
    setUnidadeNome("");
    setSetorId("");
    setSetorNome("");
    setMaquinaId("");
    setMaquinaNome("");
    setSensorNome("");
    setSensorCodigo("");
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const renderSelectedView = () => {
    if (selectedView === "unidade") {
      return (
        <>
          <WarningView>
            <WarningViewHeader>
              <h2>Adicionar Unidade</h2>
              <span></span>
            </WarningViewHeader>
          </WarningView>

          <WarningViewBody>
            <div className="form-group">
              {!imgBase64 ? (
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    accept="image/*"
                    onChange={(evt) =>
                      toBase64(evt.target.files[0]).then(
                        (base64: React.SetStateAction<string>) => {
                          console.log(base64);
                          setImgBase64(base64);
                        }
                      )
                    }
                  />

                  <Button
                    fullWidth
                    component="span"
                    color="primary"
                    variant="contained"
                    // size="small"
                    startIcon={<AddTwoTone />}
                    // onClick={() => openMenu()}
                  >
                    Selecionar a Imagem
                  </Button>
                </label>
              ) : (
                <>
                  <UnidadeImage>
                    <Image
                      src={imgBase64}
                      alt="Imagem da unidade"
                      layout="fill"
                      objectFit="cover"
                    />
                  </UnidadeImage>
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      accept="image/*"
                      onChange={(evt) =>
                        toBase64(evt.target.files[0]).then(
                          (base64: React.SetStateAction<string>) => {
                            console.log(base64);
                            setImgBase64(base64);
                          }
                        )
                      }
                    />

                    <Button
                      fullWidth
                      component="span"
                      color="primary"
                      variant="contained"
                      // size="small"
                      startIcon={<EditTwoTone />}
                      // onClick={() => openMenu()}
                    >
                      Alterar imagem
                    </Button>
                  </label>
                </>
              )}
            </div>

            <div className="form-group">
              <FormControl fullWidth>
                <TextField
                  id="nome"
                  label="Nome da Unidade"
                  variant="standard"
                  fullWidth
                  size="small"
                  value={unidadeNome}
                  onChange={(evt) => setUnidadeNome(evt.target.value)}
                />
              </FormControl>
            </div>

            <div className="form-group">
              <ButtonsGroup>
                <Button
                  component="button"
                  color="default"
                  // variant="outlined"
                  // size="small"
                  startIcon={<NavigateBeforeTwoTone />}
                  onClick={resetStateOfSidebarMenuRight}
                >
                  Voltar
                </Button>
                <Button
                  component="button"
                  color="primary"
                  variant="outlined"
                  // size="small"
                  startIcon={<SaveTwoTone />}
                  // onClick={() => openMenu()}
                >
                  Salvar
                </Button>
              </ButtonsGroup>
            </div>
          </WarningViewBody>
        </>
      );
    }

    if (selectedView === "setor") {
      return (
        <>
          <WarningView>
            <WarningViewHeader>
              <h2>Adicionar Setor</h2>
              <span></span>
            </WarningViewHeader>
          </WarningView>

          <WarningViewBody>
            <div className="form-group">
              <FormControl variant="standard" fullWidth size="small">
                <InputLabel htmlFor="unidade">Unidade</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={unidadeId}
                  onChange={(evt) => setUnidadeId(evt.target.value)}
                >
                  <MenuItem value={1}>Campinas</MenuItem>
                  <MenuItem value={2}>Bauru</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl fullWidth>
                <TextField
                  id="nome"
                  label="Nome do Setor"
                  variant="standard"
                  fullWidth
                  size="small"
                  value={setorNome}
                  onChange={(evt) => setSetorNome(evt.target.value)}
                />
              </FormControl>
            </div>
            <div className="form-group">
              <ButtonsGroup>
                <Button
                  component="button"
                  color="default"
                  // variant="outlined"
                  // size="small"
                  startIcon={<NavigateBeforeTwoTone />}
                  onClick={resetStateOfSidebarMenuRight}
                >
                  Voltar
                </Button>
                <Button
                  component="button"
                  color="primary"
                  variant="outlined"
                  // size="small"
                  startIcon={<SaveTwoTone />}
                  // onClick={() => openMenu()}
                >
                  Salvar
                </Button>
              </ButtonsGroup>
            </div>
          </WarningViewBody>
        </>
      );
    }

    if (selectedView === "maquina") {
      return (
        <>
          <WarningView>
            <WarningViewHeader>
              <h2>Adicionar Máquina</h2>
              <span></span>
            </WarningViewHeader>
          </WarningView>

          <WarningViewBody>
            <div className="form-group">
              {!imgBase64 ? (
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    accept="image/*"
                    onChange={(evt) =>
                      toBase64(evt.target.files[0]).then(
                        (base64: React.SetStateAction<string>) => {
                          console.log(base64);
                          setImgBase64(base64);
                        }
                      )
                    }
                  />

                  <Button
                    fullWidth
                    component="span"
                    color="primary"
                    variant="contained"
                    // size="small"
                    startIcon={<AddTwoTone />}
                    // onClick={() => openMenu()}
                  >
                    Selecionar a Imagem
                  </Button>
                </label>
              ) : (
                <>
                  <UnidadeImage>
                    <Image
                      src={imgBase64}
                      alt="Imagem da unidade"
                      layout="fill"
                      objectFit="cover"
                    />
                  </UnidadeImage>
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      accept="image/*"
                      onChange={(evt) =>
                        toBase64(evt.target.files[0]).then(
                          (base64: React.SetStateAction<string>) => {
                            console.log(base64);
                            setImgBase64(base64);
                          }
                        )
                      }
                    />

                    <Button
                      fullWidth
                      component="span"
                      color="primary"
                      variant="contained"
                      // size="small"
                      startIcon={<EditTwoTone />}
                      // onClick={() => openMenu()}
                    >
                      Alterar imagem
                    </Button>
                  </label>
                </>
              )}
            </div>

            <div className="form-group">
              <FormControl variant="standard" fullWidth size="small">
                <InputLabel htmlFor="unidade">Unidade</InputLabel>
                <Select
                  id="unidade"
                  value={unidadeId}
                  onChange={(evt) => setUnidadeId(evt.target.value)}
                >
                  <MenuItem value={1}>Campinas</MenuItem>
                  <MenuItem value={2}>Bauru</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl variant="standard" fullWidth size="small">
                <InputLabel htmlFor="setor">Setor</InputLabel>
                <Select
                  id="setor"
                  value={setorId}
                  onChange={(evt) => setSetorId(evt.target.value)}
                >
                  <MenuItem value={1}>Setor 1</MenuItem>
                  <MenuItem value={2}>Setor 2</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl fullWidth>
                <TextField
                  id="nome"
                  label="Nome da Máquina"
                  variant="standard"
                  fullWidth
                  size="small"
                  value={maquinaNome}
                  onChange={(evt) => setMaquinaNome(evt.target.value)}
                />
              </FormControl>
            </div>
            <div className="form-group">
              <ButtonsGroup>
                <Button
                  component="button"
                  color="default"
                  // variant="outlined"
                  // size="small"
                  startIcon={<NavigateBeforeTwoTone />}
                  onClick={resetStateOfSidebarMenuRight}
                >
                  Voltar
                </Button>
                <Button
                  component="button"
                  color="primary"
                  variant="outlined"
                  // size="small"
                  startIcon={<SaveTwoTone />}
                  // onClick={() => openMenu()}
                >
                  Salvar
                </Button>
              </ButtonsGroup>
            </div>
          </WarningViewBody>
        </>
      );
    }

    if (selectedView === "sensor") {
      return (
        <>
          <WarningView>
            <WarningViewHeader>
              <h2>Adicionar Sensor</h2>
              <span></span>
            </WarningViewHeader>
          </WarningView>

          <WarningViewBody>
            <div className="form-group">
              <FormControl variant="standard" fullWidth size="small">
                <InputLabel htmlFor="unidade">Unidade</InputLabel>
                <Select
                  id="unidade"
                  value={unidadeId}
                  onChange={(evt) => setUnidadeId(evt.target.value)}
                >
                  <MenuItem value={1}>Campinas</MenuItem>
                  <MenuItem value={2}>Bauru</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl variant="standard" fullWidth size="small">
                <InputLabel htmlFor="setor">Setor</InputLabel>
                <Select
                  id="setor"
                  value={setorId}
                  onChange={(evt) => setSetorId(evt.target.value)}
                >
                  <MenuItem value={1}>Setor 1</MenuItem>
                  <MenuItem value={2}>Setor 2</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl variant="standard" fullWidth size="small">
                <InputLabel htmlFor="maquina">Máquina</InputLabel>
                <Select
                  id="maquina"
                  value={maquinaId}
                  onChange={(evt) => setMaquinaId(evt.target.value)}
                >
                  <MenuItem value={1}>Mancal dianteiro motor</MenuItem>
                  <MenuItem value={2}>Mancal traseiro motor</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl fullWidth>
                <TextField
                  id="nome"
                  label="Nome do Sensor"
                  variant="standard"
                  fullWidth
                  size="small"
                  value={sensorNome}
                  onChange={(evt) => setSensorNome(evt.target.value)}
                />
              </FormControl>
            </div>

            <div className="form-group">
              <FormControl fullWidth>
                <TextField
                  id="serial"
                  label="Código Serial"
                  variant="standard"
                  fullWidth
                  size="small"
                  value={sensorCodigo}
                  onChange={(evt) => setSensorCodigo(evt.target.value)}
                />
              </FormControl>
            </div>

            <div className="form-group">
              <ButtonsGroup>
                <Button
                  component="button"
                  color="default"
                  // variant="outlined"
                  // size="small"
                  startIcon={<NavigateBeforeTwoTone />}
                  onClick={resetStateOfSidebarMenuRight}
                >
                  Voltar
                </Button>
                <Button
                  component="button"
                  color="primary"
                  variant="outlined"
                  // size="small"
                  startIcon={<SaveTwoTone />}
                  // onClick={() => openMenu()}
                >
                  Salvar
                </Button>
              </ButtonsGroup>
            </div>
          </WarningViewBody>
        </>
      );
    }

    return (
      <>
        <WarningView>
          <WarningViewHeader>
            <h2>Adicionar</h2>
            <span></span>
          </WarningViewHeader>
        </WarningView>

        <WarningViewBody>
          <div className="form-group">
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button onClick={(evt) => setSelectedView("unidade")}>
                <ListItemAvatar>
                  <Avatar>
                    <BusinessTwoTone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Unidade" />
                <ListItemIcon>
                  <ChevronRightTwoTone />
                </ListItemIcon>
              </ListItem>

              <ListItem button onClick={(evt) => setSelectedView("setor")}>
                <ListItemAvatar>
                  <Avatar>
                    <LocalConvenienceStoreTwoTone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Setor" />
                <ListItemIcon>
                  <ChevronRightTwoTone />
                </ListItemIcon>
              </ListItem>

              <ListItem button onClick={(evt) => setSelectedView("maquina")}>
                <ListItemAvatar>
                  <Avatar>
                    <BuildTwoTone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Máquina" />
                <ListItemIcon>
                  <ChevronRightTwoTone />
                </ListItemIcon>
              </ListItem>

              <ListItem button onClick={(evt) => setSelectedView("sensor")}>
                <ListItemAvatar>
                  <Avatar>
                    <BarChartTwoTone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Sensor" />
                <ListItemIcon>
                  <ChevronRightTwoTone />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </WarningViewBody>
      </>
    );
  };

  return (
    <>
      <Layout>
        <Page title="Organização">
          <Content>
            <Row>
              <ButtonsGroup>
                <Button
                  component="button"
                  color="primary"
                  startIcon={<AddTwoTone />}
                  // size="small"
                  variant="outlined"
                  onClick={() => {
                    // setFormValues({
                    //   user: "",
                    //   email: "",
                    //   permission: "",
                    // });
                    resetStateOfSidebarMenuRight();
                    openMenu();
                  }}
                >
                  Adicionar
                </Button>
              </ButtonsGroup>
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
                              <ListItem
                                button
                                className={classes.nested3}
                                onClick={(evt) => {
                                  router.push("/sensor/1");
                                }}
                              >
                                <ListItemIcon>
                                  <BarChartTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Mancal dianteiro motor" />
                                <span>
                                  <Button
                                    startIcon={<Edit />}
                                    // variant="outlined"
                                  />
                                  <Button
                                    color="secondary"
                                    startIcon={<Delete />}
                                    // variant="outlined"
                                    onClick={(evt) => {
                                      Swal.fire({
                                        title: "Atenção!",
                                        text: "Deseja remover este sensor?",
                                        icon: "warning",
                                        confirmButtonText: "Sim, remover!",
                                        confirmButtonColor: "#d30000",
                                        cancelButtonText: "Não",
                                        showCancelButton: true,
                                      });
                                    }}
                                  />
                                </span>
                              </ListItem>

                              <ListItem
                                button
                                className={classes.nested3}
                                onClick={(evt) => {
                                  router.push("/sensor/1");
                                }}
                              >
                                <ListItemIcon>
                                  <BarChartTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Mancal traseiro motor" />
                                <span>
                                  <Button
                                    startIcon={<Edit />}
                                    // variant="outlined"
                                  />
                                  <Button
                                    color="secondary"
                                    startIcon={<Delete />}
                                    // variant="outlined"
                                    onClick={(evt) => {
                                      Swal.fire({
                                        title: "Atenção!",
                                        text: "Deseja remover este sensor?",
                                        icon: "warning",
                                        confirmButtonText: "Sim, remover!",
                                        confirmButtonColor: "#d30000",
                                        cancelButtonText: "Não",
                                        showCancelButton: true,
                                      });
                                    }}
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

      <SidebarRight color="light">{renderSelectedView()}</SidebarRight>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
});

const mapDispatchToProps = {
  openMenu: openMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Organizacao);
