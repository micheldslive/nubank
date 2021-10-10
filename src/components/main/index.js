import React, { Component } from "react";
import GlobalStyle from "assets/styles/global";
import Preloader from "components/preloader";
import Header from "components/header";
import Home from "pages/home";
import NotFound from "pages/404";
import Footer from "components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "assets/styles/main";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Preloader />
        <Header />
        <Layout />
        <HelmetProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </HelmetProvider>
        <Footer />
      </Router>
    );
  }
}
