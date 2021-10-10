import { Component } from "react";
import { Links } from "services/header";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { NavLink } from "react-router-dom";
import {
  Container,
  HeaderContent,
  List,
  Logo,
  Navigation,
  MenuLink,
  Arrow,
  Buttons,
  SignUp,
  Submenu,
  SubmenuContainer,
  Burger,
  Bullets,
  ListContainer,
  SubmenuRow,
  SubmenuCol,
  SubmenuTitle,
  SubmenuLink,
  LogoLink,
  Login,
  LoginArrow,
} from "assets/styles/header";

class Hamburger extends Component {
  render() {
    return (
      <Burger open={this.props.open} onClick={() => this.props.openClick()}>
        <Bullets />
        <Bullets />
      </Burger>
    );
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, button: false };
    this.openClick = this.openClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount = () => {
    onscroll = () => {
      this.setState({ button: window.scrollY > 150 });
    };
  };

  openClick = () => {
    this.setState({ open: !this.state.open });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  render() {
    const open = this.state.open;
    const button = this.state.button;
    open ? disableBodyScroll(document) : enableBodyScroll(document);

    return (
      <HeaderContent open={open}>
        <Container>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <Navigation open={open}>
            <ListContainer>
              {Links.map((link) => 
                <List key={link.name}>
                  {link.isSubmenu ? 
                    <MenuLink>
                      {link.name} {link.isSubmenu ? <Arrow /> : "" }
                    </MenuLink>
                   : 
                    <MenuLink as={NavLink} exact to={link.to} onClick={this.closeMenu} activeClassName="active">
                      {link.name}
                    </MenuLink>
                  }
                  {link.isSubmenu ? 
                    <Submenu>
                      <SubmenuContainer>
                        <SubmenuRow>
                          {link.to.map((sub) => 
                            <SubmenuCol key={sub.title} lg={4} sm={6}>
                              <SubmenuTitle>{sub.title}</SubmenuTitle>
                              {sub.to.map((sublink) => 
                                <SubmenuLink key={sublink.title} to={sublink.to}>
                                  {sublink.title}
                                </SubmenuLink>
                              )}
                            </SubmenuCol>
                          )}
                        </SubmenuRow>
                      </SubmenuContainer>
                    </Submenu>
                   : "" }
                </List>
              )}
              <List><Login mobile={true ? true : undefined}>Login <LoginArrow/></Login></List>
            </ListContainer>
          </Navigation>
          <Buttons>
            <SignUp to="/cadastrar" button={button ? button : undefined}>
              Quero ser Nubank
            </SignUp>
            <Login mobile={true ? false : undefined}>Login <LoginArrow/></Login>
            <Hamburger open={open} openClick={this.openClick} />
          </Buttons>
        </Container>
      </HeaderContent>
    );
  }
}