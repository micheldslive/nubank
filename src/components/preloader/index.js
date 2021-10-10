import { Component } from "react";
import {
  PreloaderMain,
  PreloaderContainer,
  NuLogo,
} from "assets/styles/preloader";

export default class Preloader extends Component {
  render() {
    return (
      <PreloaderContainer>
        <PreloaderMain>
          <NuLogo width="156" height="85" />
        </PreloaderMain>
      </PreloaderContainer>
    );
  }
}
