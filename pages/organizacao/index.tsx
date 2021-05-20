import Page from "../../components/page";
import Layout from "../../components/layout";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { FC, useState } from "react";
import Card from "../../components/card";
import Button from "@material-ui/core/Button";
import SidebarRight from "../../components/sidebarRight";
import { openMenu } from "../../redux/actions/sidebarRightActions";
import { connect } from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
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
  LocalConvenienceStoreTwoTone,
  NavigateBeforeTwoTone,
  SaveTwoTone,
} from "@material-ui/icons";
import {
  FormControl,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Content from "../../components/content";
import Column from "../../components/column";
import styles from "./styles.module.scss";

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

const ButtonsGroup: FC = (props) => {
  const { children } = props;
  return <div className={styles.buttonsGroup}>{children}</div>;
};

const UnidadeImage: FC = (props) => {
  const { children } = props;
  return <div className={styles.unidadeImage}>{children}</div>;
};

const View: FC<{ title: string }> = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className={styles.view}>
        <div className={styles.viewHeader}>
          <h2>{title}</h2>
          <span></span>
        </div>
      </div>
      <div className={styles.viewBody}>{children}</div>
    </>
  );
};

const Organizacao: FC<any> = (props) => {
  const { openMenu } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openCampinas, setOpenCampinas] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
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
          <div className={styles.view}>
            <div className={styles.viewHeader}>
              <h2>Adicionar Unidade</h2>
              <span></span>
            </div>
          </div>

          <div className={styles.viewBody}>
            <div className={styles.formGroup}>
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

            <div className={styles.formGroup}>
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

            <div className={styles.formGroup}>
              <ButtonsGroup>
                <Button
                  component="button"
                  color="default"
                  startIcon={<NavigateBeforeTwoTone />}
                  onClick={resetStateOfSidebarMenuRight}
                >
                  Voltar
                </Button>
                <Button
                  component="button"
                  color="primary"
                  variant="outlined"
                  startIcon={<SaveTwoTone />}
                >
                  Salvar
                </Button>
              </ButtonsGroup>
            </div>
          </div>
        </>
      );
    }

    if (selectedView === "setor") {
      return (
        <View title="Adicionar Setor">
          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
            <ButtonsGroup>
              <Button
                component="button"
                color="default"
                startIcon={<NavigateBeforeTwoTone />}
                onClick={resetStateOfSidebarMenuRight}
              >
                Voltar
              </Button>
              <Button
                component="button"
                color="primary"
                variant="outlined"
                startIcon={<SaveTwoTone />}
              >
                Salvar
              </Button>
            </ButtonsGroup>
          </div>
        </View>
      );
    }

    if (selectedView === "maquina") {
      return (
        <View title="Adicionar Máquina">
          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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
        </View>
      );
    }

    if (selectedView === "sensor") {
      return (
        <View title="Adicionar Sensor">
          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
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

          <div className={styles.formGroup}>
            <ButtonsGroup>
              <Button
                component="button"
                color="default"
                startIcon={<NavigateBeforeTwoTone />}
                onClick={resetStateOfSidebarMenuRight}
              >
                Voltar
              </Button>
              <Button
                component="button"
                color="primary"
                variant="outlined"
                startIcon={<SaveTwoTone />}
              >
                Salvar
              </Button>
            </ButtonsGroup>
          </div>
        </View>
      );
    }

    return (
      <View title="Adicionar">
        <div className={styles.formGroup}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={(evt) => setSelectedView("unidade")}>
              <ListItemAvatar>
                <Avatar>
                  <Icon>business</Icon>
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
      </View>
    );
  };

  return (
    <>
      <Layout>
        <Page title="Organização">
          <Content>
            <Column>
              <ButtonsGroup>
                <Button
                  component="button"
                  color="primary"
                  startIcon={<Icon>add</Icon>}
                  variant="outlined"
                  onClick={() => {
                    resetStateOfSidebarMenuRight();
                    openMenu();
                  }}
                >
                  Adicionar
                </Button>
              </ButtonsGroup>
              <Card title="">
                <div className={styles.tree}>
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
                        <Icon>business</Icon>
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
                        <Icon>business</Icon>
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
                </div>
              </Card>
            </Column>
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
