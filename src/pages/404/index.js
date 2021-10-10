import { Component } from "react";
import { Helmet } from "react-helmet-async";
import {
  MainError,
  Container,
  Error,
  ErrorText,
  Link,
  ListRow,
  List,
  Arrow,
} from "assets/styles/404";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Página não encontrada</title>
          <meta name="description" content="Página não encontrada." />
        </Helmet>
        <MainError>
          <Container>
            <Error>Ops!</Error>
            <ErrorText>
              Não conseguimos encontrar a página que você está procurando.
            </ErrorText>
            <ErrorText>
              Não se preocupe pois ela está em boa companhia com outras coisas
              que não existem no mundo do Nubank:
            </ErrorText>
            <ListRow>
              <List>Porta-giratória</List>
              <List>Boletos chegando pelo correio</List>
              <List>Pontos que já venceram</List>
              <List>Senhas pra falar com o gerente</List>
              <List>Tarifas escondidas</List>
            </ListRow>
            <Link to="/">
              Voltar para a página principal <Arrow />
            </Link>
          </Container>
        </MainError>
      </>
    );
  }
}
