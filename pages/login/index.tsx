import styles from "./styles.module.scss";
import { Button, InputLabel, OutlinedInput } from "@material-ui/core";
import { useState } from "react";
import Imachine from "../../services/imachine";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { useRouter } from "next/router";
import styled from "styled-components";
import { User } from "../../types";

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

    try {
      const resp = await Imachine.login(values.email, values.password);
      console.log(resp);
      if (resp.status === 200) {
        const loggedUser = resp?.data?.results[0]?.data[0];
        setUser(loggedUser);
        localStorage.setItem("session", loggedUser.access_token);
        localStorage.setItem("user", JSON.stringify(loggedUser));
        router.push("/");
      } else if (resp.status === 401) {
        setErrors({ message: "Usuário não autorizado" });
      } else {
        setErrors(resp);
        console.log("Erro ---- ", errors);
      }
    } catch (e) {
      setErrors({ message: "Usuário não autorizado" });
    }
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
                <InputLabel htmlFor="outlined-adornment">Usuário</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment"
                  type="email"
                  value={values.email}
                  required
                  onChange={handleChange("email")}
                />
              </div>

              <div>
                <InputLabel htmlFor="outlined-adornment-password">
                  Senha
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type="password"
                  value={values.password}
                  required
                  onChange={handleChange("password")}
                />
              </div>
            </fieldset>

            {errors && (
              <Error>
                <span>{errors.message}</span>
              </Error>
            )}

            <Button
              style={{ backgroundColor: "#272B41", color: "white" }}
              onClick={doLogin}
            >
              Logar
            </Button>
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
