import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormGroup,
  FormInput,
  FormTitle,
  HomeCol,
  HomeContent,
  HomeRow,
  HomeSubtitle,
  HomeTitle,
  FormLabel,
  ArrowButton,
  CardContent,
  CardImage,
  HoldCards,
  CardTitle,
  CardSubtitle,
} from "assets/styles/home";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.cpf = React.createRef();
    this.state = { valid: false };
  }

  onKeyUp = () => {
    this.cpf.current.value !== ""
      ? this.setState({ valid: true })
      : this.setState({ valid: false });
  };

  render() {
    const valid = this.state.valid;

    return (
      <>
        <Helmet>
          <title>Nubank - Finalmente você no controle do seu dinheiro</title>
          <meta
            name="description"
            content="Nubank - Finalmente você no controle do seu dinheiro."
          />
        </Helmet>
        <HomeContent>
          <Container>
            <HomeRow>
              <HomeCol lg={8} sm={12}>
                <HomeTitle>
                  Simples, transparente e inovador: conheça o Nubank.
                </HomeTitle>
                <HomeSubtitle>
                  Faça como outros 40 milhões de brasileiros e veja como é
                  prático e fácil estar no controle da sua vida financeira com o
                  Nubank.
                </HomeSubtitle>
              </HomeCol>
              <HomeCol lg={4} sm={12}>
                <Form>
                  <FormContent>
                    <FormTitle>
                      Peça sua conta e cartão de crédito do Nubank
                    </FormTitle>
                    <FormGroup>
                      <FormInput ref={this.cpf} type="text" onKeyUp={this.onKeyUp} />
                      <FormLabel valid={valid}>
                        Digite seu CPF
                      </FormLabel>
                    </FormGroup>
                    <FormButton>
                      Continuar <ArrowButton />
                    </FormButton>
                  </FormContent>
                </Form>
              </HomeCol>
            </HomeRow>
          </Container>
        </HomeContent>
        <CardContent>
          <Container>
            <HomeRow>
              <HomeCol lg={7} sm={12}>
                <CardTitle>Cartão de Crédito</CardTitle>
                <CardSubtitle>
                  Pode chamar ele de roxinho. Além disso, pode chamar ele de
                  moderno, gratuito e prático também.
                </CardSubtitle>
              </HomeCol>
              <HomeCol lg={5} sm={12}>
                <CardImage src={HoldCards} />
              </HomeCol>
            </HomeRow>
          </Container>
        </CardContent>
      </>
    );
  }
}