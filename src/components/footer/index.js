import { Component } from "react";
import { FooterLinks } from "services/footer";
import {
  Container,
  FooterContent,
  FooterRow,
  FooterCol,
  ColTitle,
  ColLink,
  FooterAnimation,
  FooterMain,
  CopyMain,
  CopyContent,
  CopyLogo,
  CopyText,
  RS,
  RSLink,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "assets/styles/footer";

export default class Footer extends Component {
  render() {
    return (
      <FooterContent>
        <FooterAnimation />
        <FooterMain>
          <Container>
            <FooterRow>
              {FooterLinks.map((links) => 
                <FooterCol key={links.title} lg={4} sm={6}>
                  <ColTitle>{links.title}</ColTitle>
                  {links.to.map((link) => 
                    <ColLink key={link.title} to={link.to}>
                      {link.title}
                    </ColLink>
                  )}
                </FooterCol>
              )}
            </FooterRow>
          </Container>
        </FooterMain>
        <CopyMain>
          <Container>
            <FooterRow>
              <FooterCol lg={8} sm={6}>
                <CopyContent>
                  <CopyLogo />
                  <CopyText>
                    © 2021 Nu Pagamentos S.A - Instituição de Pagamento.
                    18.236.120/0001-58, Rua Capote Valente, 39 - São Paulo, SP -
                    05409-000
                  </CopyText>
                </CopyContent>
              </FooterCol>
              <FooterCol lg={4} sm={6}>
                <RS>
                  <RSLink href="https://www.facebook.com/nubank" target="_blank">
                    <Facebook />
                  </RSLink>
                  <RSLink href="https://www.facebook.com/nubank" target="_blank">
                    <Instagram />
                  </RSLink>
                  <RSLink href="https://www.facebook.com/nubank" target="_blank">
                    <Linkedin />
                  </RSLink>
                  <RSLink href="https://www.facebook.com/nubank" target="_blank">
                    <Youtube />
                  </RSLink>
                  <RSLink href="https://www.facebook.com/nubank" target="_blank">
                    <Twitter />
                  </RSLink>
                </RS>
              </FooterCol>
            </FooterRow>
          </Container>
        </CopyMain>
      </FooterContent>
    );
  }
}
