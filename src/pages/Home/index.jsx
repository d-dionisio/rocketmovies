import { Container, Create } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Notes } from "../../components/Notes";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Meus filmes</h1>
          <Create to="/new">
            <FiPlus />
            Adicionar filme
          </Create>
        </header>

        <Notes
          data={{
            title: "Interestellar",
            description:
              "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
            tags: [
              { id: "1", name: "Ficção científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
        <Notes
          data={{
            title: "Interestellar",
            description:
              "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
            tags: [
              { id: "1", name: "Ficção científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
      </main>
    </Container>
  );
}
