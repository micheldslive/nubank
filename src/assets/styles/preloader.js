import styled from "styled-components";
import { ReactComponent as NuLogoSVG } from "assets/images/nu.svg";

export const PreloaderContent = styled.div``;

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-color: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: bg-out 1s 6s linear forwards;
  opacity: 1;
  z-index: 11;

  @keyframes bg-out {
    0% {
      opacity: 1;
      display: flex;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const PreloaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10%;
`;

export const NuLogo = styled(NuLogoSVG)`
  path {
    fill: transparent;
    stroke-width: 0.6;
    stroke: white;
    animation: nu-animate 4s 1s linear forwards;
    stroke-dasharray: 480;
    stroke-dashoffset: 500;

    @keyframes nu-animate {
      0% {
        stroke-dashoffset: 500;
      }
      50% {
        stroke-dashoffset: 416;
      }
      90% {
        stroke-dashoffset: 250;
        fill: transparent;
      }
      100% {
        stroke-dashoffset: 0;
        fill: white;
      }
    }
  }
`;
