import Page from "../../components/page";
import Layout from "../../components/layout";
import Card from "../../components/card";
import React, { FC, useEffect, useState } from "react";
import Imachine from "../../services/imachine";
import { UserList } from "../../types";
import {
  AddTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  SaveTwoTone,
} from "@material-ui/icons";
import { Button, TextField } from "@material-ui/core";
import SidebarRight from "../../components/sidebarRight";
import { closeMenu, openMenu } from "../../redux/actions/sidebarRightActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./styles.module.scss";
import Content from "../../components/content";
import { Row } from "react-bootstrap";

const Usuarios: FC<any> = (props) => {
  const { openMenu, closeMenu } = props;
  const [mounted, setMounted] = useState(false);
  const [users, setUsers] = useState<Array<UserList | []>>([]);
  const [requireUpdate, setRequireUpdate] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState<any>({
    user_id: 0,
    user: "",
    email: "",
    permission: "",
  });

  const saveUserChanges = (evt) => {
    // Imachine.Users.update({
    //   user_id: formValues.user_id,
    //   user: formValues.user,
    // }).then((resp) => {
    //   console.log(resp);
    // });

    if (isLoading) return;

    setIsLoading(true);

    Imachine.Users.updatepermission({
      user_id: formValues.user_id,
      permission_level: formValues.permission,
    }).then((resp) => {
      setRequireUpdate(true);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && requireUpdate) {
      setRequireUpdate(false);
      Imachine.Users.list().then((resp) => {
        setUsers(resp);
        closeMenu();
      });
    }
  }, [mounted, requireUpdate]);

  const renderUser = (user: UserList, i: number) => {
    let permission = "";

    switch (user.permission_level) {
      case 1:
        permission = "Editor";
        break;
      case 2:
        permission = "Administrador";
        break;
      default:
        permission = "";
    }

    return (
      <tr key={i}>
        <td>{user.user}</td>
        <td>{user.email}</td>
        <td>{permission}</td>
        <td>
          <Button
            component="button"
            color="primary"
            onClick={() => {
              setFormValues({
                user_id: user.id,
                user: user.user,
                email: user.email,
                permission: user.permission_level,
              });
              openMenu();
            }}
            size="small"
            variant="outlined"
          >
            <EditTwoTone />
          </Button>
          <Button
            component="button"
            color="secondary"
            size="small"
            variant="outlined"
            disabled={isLoading}
            onClick={() => {
              Swal.fire({
                title: "Atenção!",
                text: "Deseja remover o usuário: " + user.user + "?",
                icon: "warning",
                confirmButtonText: "Sim, remover!",
                confirmButtonColor: "#d30000",
                cancelButtonText: "Não",
                showCancelButton: true,
                showLoaderOnConfirm: true,
                preConfirm: () =>
                  new Promise((resolve, reject) =>
                    Imachine.Users.delete(user.id).then(resolve).catch(reject)
                  ),
              }).then(() => setRequireUpdate(true));
            }}
          >
            <DeleteTwoTone />
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Layout>
      <Page title="Configuração de Usuários">
        <Content>
          <Row>
            <div className={styles.buttonsGroup}>
              <Button
                component="button"
                color="primary"
                startIcon={<AddTwoTone />}
                // size="small"
                variant="outlined"
                onClick={() => {
                  setFormValues({
                    user: "",
                    email: "",
                    permission: "",
                  });
                  openMenu();
                }}
              >
                Adicionar
              </Button>
            </div>
            <Card title="">
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Permissão</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>{users.map(renderUser)}</tbody>
              </table>
            </Card>
          </Row>
        </Content>
      </Page>

      <SidebarRight color="light">
        <div className={styles.userView}>
          <div className={styles.userViewHeader}>
            <h2>Usuário</h2>
            <span></span>
          </div>
        </div>
        <div className={styles.userViewBody}>
          <div className="form-group">
            <FormControl fullWidth>
              <TextField
                id="nome"
                label="Nome"
                variant="standard"
                fullWidth
                size="small"
                value={formValues.user}
                disabled
                onChange={(evt) =>
                  setFormValues({
                    ...formValues,
                    ...{ user: evt.target.value },
                  })
                }
              />
            </FormControl>
          </div>

          <div className="form-group">
            <FormControl fullWidth>
              <TextField
                id="email"
                label="E-Mail"
                variant="standard"
                fullWidth
                size="small"
                value={formValues.email}
                disabled
                onChange={(evt) =>
                  setFormValues({
                    ...formValues,
                    ...{ email: evt.target.value },
                  })
                }
              />
            </FormControl>
          </div>

          <div className="form-group">
            <FormControl variant="standard" fullWidth size="small">
              <InputLabel htmlFor="permission_level">Permissão</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formValues.permission}
                onChange={(evt) =>
                  setFormValues({
                    ...formValues,
                    ...{ permission: evt.target.value },
                  })
                }
              >
                <MenuItem value={1}>Editor</MenuItem>
                <MenuItem value={2}>Administrador</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="form-group">
            <div className={styles.buttonsGroup}>
              <Button
                component="button"
                color="primary"
                variant="outlined"
                startIcon={<SaveTwoTone />}
                onClick={saveUserChanges}
                disabled={isLoading}
              >
                {isLoading ? "Carregando..." : "Salvar"}
              </Button>
            </div>
          </div>
        </div>
      </SidebarRight>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
});

const mapDispatchToProps = {
  openMenu: openMenu,
  closeMenu: closeMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
