import { Avatar, Box, Button, Container, TextField } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import Copyright from "../../components/Copyright";
import "./index.css";

interface IloginView { }

const LoginView: React.FC<IloginView> = (props: IloginView) => {
 
 
  const [view, setView] = useState({
    user: '',
    password: ''
  });

  const handleInputChange = (event: any) => {
    setView({
      ...view,
      [event.target.name]: event.target.value
    })
  }


  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(view.user + ' ' + view.password)
  }


  return (
    <Container className="Box">
      <Avatar className="AvatarLogin">

      </Avatar>
      <div className="BoxLogin">
        <form onSubmit={onSubmit}>
          <TextField fullWidth label="Usuário" onChange={handleInputChange} name="user" variant="outlined" margin="normal" required autoFocus></TextField>
          <TextField fullWidth label="Senha" onChange={handleInputChange} name="password" variant="outlined" margin="normal" required type="password"></TextField>
          <div className="ButtonLogin">
            <Button fullWidth type="submit" variant='contained' color='primary' >Entrar</Button>
          </div>
        </form>
      </div>
      <Box mt={8}>
        <Copyright defaultValue={'System Login'} />
      </Box>
    </Container>

  );
};

export default LoginView;
