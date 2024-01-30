import { Container, Header, Form, Avatar } from "./styles";
import { MdOutlineArrowBack } from "react-icons/md";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function Profile() {
  return (
    <Container>
      <Header>
        <Link to="/"><MdOutlineArrowBack/> Voltar</Link>
      </Header>

      <Form>
        <Avatar>
          <img src="https://github.com/d-dionisio.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        
        <Input icon={FiUser} placeholder="Nome" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="email" />
        <Input icon={FiLock} placeholder="Senha atual" type="password" />
        <Input icon={FiLock} placeholder="Nova senha" type="password" />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
