import {useRouter} from "next/router";
import styles from "./styles.module.scss";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from "@material-ui/core";
import {useState} from "react";
import {AccountBox, Visibility, VisibilityOff} from "@material-ui/icons";

function Login(props) {
  const router = useRouter()
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.background}>
          <img src="/img/background.png"  alt="logo"/>
          <div className={styles.logo}>
            <img src="/img/icon-techplus.svg"  alt="logo"/>
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
                  type="text"
                  value="Lycra"
                  onChange={handleChange('password')}
                />
              </div>

              <div>
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                />
              </div>
            </fieldset>

            <Button style={{backgroundColor: "#272B41", color: "white"}}
                    onClick={event => router.push("/")}>Logar</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
