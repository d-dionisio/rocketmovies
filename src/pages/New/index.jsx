import { Container, Form, Title, TextArea, Section, Note } from "./styles";
import { Header } from "../../components/Header";
import { MdOutlineArrowBack } from "react-icons/md";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Link to="/">
            <MdOutlineArrowBack /> Voltar
          </Link>
          <h1>Novo Filme</h1>

          <Title>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </Title>

          <TextArea placeholder="Observações" />

          <Section>
            <h2>Marcadores</h2>
            <Note>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </Note>
          </Section>

          <div className="btn">
            <Button className="btnDelete" title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
