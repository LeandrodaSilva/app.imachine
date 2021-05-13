import Page from "../../components/page";
import Layout from "../../components/layout";
import styled from "styled-components";
import Card from "../../components/card";
import React, { FC, useEffect, useState } from "react";
import Imachine from "../../services/imachine";
import { UserList } from "../../types";
import {
  AddTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  RemoveTwoTone,
  SaveTwoTone,
} from "@material-ui/icons";
import { Button, TextField } from "@material-ui/core";
import SidebarRight from "../../components/sidebarRight";
import { openMenu } from "../../redux/actions/sidebarRightActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TableLoading from "../../components/loadingTable";

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 10px;

  > button {
    color: black;
    margin: 3px;
  }
`;

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

const Table = styled.table`
  width: 100%;
  padding-left: 10px;
  margin: 20px;
  min-height: 100px;

  thead {
    font-weight: "bold";
    font-size: 1.1em;
    opacity: 0.7;
  }

  tbody {
    tr {
      /* display: flex; */
      /* align-items: center; */
      /* justify-content: space-between; */
      border-bottom: 1px solid rgba(189, 189, 189, 0.2);
      width: available;
      padding: 4px;

      &:nth-child(even) {
        background-color: #eeecec;
      }

      td {
        text-align: center;
        button {
          margin-right: 3px;
        }
      }

      /* &:hover {
      cursor: pointer;
      background-color: rgba(180, 180, 180, 0.2);
    } */
    }
  }
`;

const Dot = styled.span`
  padding-right: 10px;
`;

const TableActionButton = styled.button`
  background-color: white;
`;

const Usuarios: FC<any> = (props) => {
  const { openMenu } = props;
  const [mounted, setMounted] = useState(false);
  const [users, setUsers] = useState<Array<UserList | []>>([]);
  const [formValues, setFormValues] = useState<any>({
    user: "",
    email: "",
    permission: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      Imachine.Users.list().then((resp) => {
        console.log(resp);
        setUsers(resp);
      });
    }
  }, [mounted]);

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
            onClick={() => {
              Swal.fire({
                title: "Atenção!",
                text: "Deseja remover o usuário: " + user.user + "?",
                icon: "warning",
                confirmButtonText: "Sim, remover!",
                confirmButtonColor: "#d30000",
                cancelButtonText: "Não",
                showCancelButton: true,
              });
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
            <ButtonsGroup>
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
            </ButtonsGroup>
            <Card title="">
              <Table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    {/* atributo de username não disponível no endpoint */}
                    {/* <th>Usuário</th>  */}
                    <th>E-mail</th>
                    <th>Permissão</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>{users.map(renderUser)}</tbody>
              </Table>
            </Card>
          </Row>
        </Content>
      </Page>

      <SidebarRight color="light">
        <WarningView>
          <WarningViewHeader>
            <h2>Usuário</h2>
            <span></span>
          </WarningViewHeader>
        </WarningView>
        <WarningViewBody>
          {/* <form action=""> */}
          <div className="form-group">
            <FormControl fullWidth>
              <TextField
                id="nome"
                label="Nome"
                variant="standard"
                fullWidth
                size="small"
                value={formValues.user}
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
            <ButtonsGroup>
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
          {/* </form> */}
        </WarningViewBody>
      </SidebarRight>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
});

const mapDispatchToProps = {
  openMenu: openMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
