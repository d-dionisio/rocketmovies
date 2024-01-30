import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" type="text" />

      <Profile to="/profile">
        <div>
          <span>Douglas Dionísio</span>
          <a href="#">sair</a>
        </div>

        <img src="https://github.com/d-dionisio.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}