import styles from "./styles.module.scss";
import {Button, InputLabel, OutlinedInput} from "@material-ui/core";
import {useState} from "react";
import Imachine from "../../services/imachine";
import {connect} from "react-redux";
import {setUser, User} from "../../redux/actions/userActions";
import {useRouter} from "next/router";

interface LoginProps {
  user: User,
  setUser: Function
}

function Login(props: LoginProps) {
  const {
    user,
    setUser
  } = props;
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const doLogin = evt => {
    evt.preventDefault()

    Imachine.login(values.email, values.password)
      .then(resp => {
        const loggedUser = resp?.data?.results[0]?.data[0];
        setUser(loggedUser);
        localStorage.setItem('session', loggedUser.access_token);
        localStorage.setItem('user', JSON.stringify(loggedUser));
        router.push('/')
      })
      .catch(resp => console.error(resp))
  }

  return (
    <>
      <div className={styles.login}>
        <div className={styles.background}>
          <img className={styles.img} src="/img/background.png"  alt="logo"/>
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
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                />
              </div>

              <div>
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type="password"
                  value={values.password}
                  onChange={handleChange('password')}
                />
              </div>
            </fieldset>

            <Button style={{backgroundColor: "#272B41", color: "white"}}
                    onClick={doLogin}>Logar</Button>
          </form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
