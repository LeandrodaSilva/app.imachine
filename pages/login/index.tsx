import styles from "./styles.module.scss";
import { Button, InputLabel, OutlinedInput } from "@material-ui/core";
import { useState } from "react";
import Imachine from "../../services/imachine";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { useRouter } from "next/router";
import styled from "styled-components";
import { User } from "../../types";
import { FormControl, MenuItem, TextField } from "@material-ui/core";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { purple, blueGrey } from "@material-ui/core/colors";

const PrimaryButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    "&:hover": {
      backgroundColor: blueGrey[700],
    },
  },
}))(Button);

interface LoginProps {
  user: User;
  setUser: Function;
}

const Error = styled.div`
  color: red;
  padding-bottom: 10px;
`;

function Login(props: LoginProps) {
  const { user, setUser } = props;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const doLogin = async (evt) => {
    evt.preventDefault();

    if (!values.email) {
      setErrors({ message: "Campo de e-mail obrigatório" });
      return;
    }

    if (!values.password) {
      setErrors({ message: "Campo de senha obrigatório" });
      return;
    }

    setErrors({ message: "" });
    setIsLoading(true);

    Imachine.interceptor()
      .Users.login(values.email, values.password)
      .then((resp) => {
        const loggedUser = resp?.data?.results[0]?.data[0];
        setUser(loggedUser);
        localStorage.setItem("session", loggedUser.access_token);
        localStorage.setItem("user", JSON.stringify(loggedUser));
        router.push("/");
      })
      .catch((err) => {
        setIsLoading(false);

        if (err.response) {
          switch (err?.response?.data?.results[0]?.message) {
            case "The username or password is incorrect.":
              setErrors({ message: "E-mail ou senha incorretos." });
              break;
            default:
              setErrors({ message: err?.response?.data?.results[0]?.message });
          }
        }
      });
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.background}>
          <img className={styles.img} src="/img/background.png" alt="logo" />
          <div className={styles.logo}>
            <img src="/img/icon-techplus.svg" alt="logo" />
          </div>
        </div>

        <div className={styles.loginContainer}>
          <h1>iMachine</h1>
          <form method="post">
            <fieldset>
              <div>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    label="E-Mail"
                    variant="standard"
                    fullWidth
                    size="small"
                    value={values.email}
                    required
                    onChange={handleChange("email")}
                  />
                </FormControl>
              </div>

              <div>
                <FormControl fullWidth>
                  <TextField
                    id="senha"
                    label="Senha"
                    type="password"
                    variant="standard"
                    fullWidth
                    size="small"
                    value={values.password}
                    required
                    onChange={handleChange("password")}
                  />
                </FormControl>
              </div>
            </fieldset>

            {errors && (
              <Error>
                <span>{errors.message}</span>
              </Error>
            )}

            <PrimaryButton
              variant="contained"
              onClick={doLogin}
              disabled={isLoading}
            >
              {isLoading ? "Carregando..." : "Logar"}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
