import Layout from "../../components/layout";
import Page from "../../components/page";
import { setUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { User } from "../../types";
import { openMenu } from "../../redux/actions/sidebarRightActions";
import Card from "../../components/card";
import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core";
import styles from "./styles.module.scss";

function Index(props: { user: User }) {
  const { user } = props;
  const [mounted, setMounted] = useState(false);
  const [formValues, setFormValues] = useState({
    image: "",
    password: "",
    user: "",
  });

  const handleChange = (evt) => {
    setFormValues({
      ...formValues,
      ...{ [evt.target.name]: evt.target.value },
    });
  };

  return (
    <>
      <Layout>
        <Page title={"Perfil"}>
          <div className={styles.content}>
            <div className={styles.row}>
              <Card title="Informações Pessoais">
                <form>
                  <div className="form-group">
                    <FormControl fullWidth>
                      <TextField
                        id="nome"
                        label="Nome"
                        variant="standard"
                        fullWidth
                        size="small"
                        value={formValues.user}
                        name="user"
                        disabled
                        onChange={handleChange}
                      />
                    </FormControl>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Page>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.UserObject.user,
});

const mapDispatchToProps = {
  setUser,
  openMenu: openMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
