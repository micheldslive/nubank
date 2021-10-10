import styled, { keyframes } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as LogoSVG } from "assets/images/nu.svg";
import { ReactComponent as ArrowSVG } from "assets/images/arrow.svg";
import { ReactComponent as LoginArrow } from "assets/images/arrow-l.svg";

export { LoginArrow };

export const HeaderContent = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ open }) => (open ? "100%" : "")};
  background-color: white;
  border-bottom: 1px solid #ddd;
  transition: all 0.1s linear;
  z-index: 1;
`;

export const Container = styled.section`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LetterOne = keyframes`
    0% { transform: translate3d(0, 0, 0) rotate(0deg); }
    20%, 50% { transform: translate3d(0, 0, 0) rotate(0deg); }
    60%, 100% { transform: translate3d(22px, 0.6px, 0) rotate(180deg); }
`;

const LetterTwo = keyframes`
    0% { transform: translate3d(0, 0, 0) rotate(0deg); }
    20%, 50% { transform: translate3d(0, 0, 0) rotate(0deg); }
    60%, 100% { transform: translate3d(-22px, -0.6px, 0) rotate(180deg); }
`;

export const LogoLink = styled(Link)`
  position: relative;
  display: grid;
  background-color: white;
  z-index: 6;

  svg path {
    transform-origin: center center;
    transform-box: fill-box;
    fill: var(--purple);
  }

  svg path:nth-child(1) {
    animation: ${LetterOne} 7s ease infinite alternate;
  }

  svg path:nth-child(2) {
    animation: ${LetterTwo} 7s ease infinite alternate;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 44px;
  height: 24px;
  z-index: 1;
`;

export const MenuLink = styled.a`
  position: relative;
  padding: 16px 0;
  display: flex;
  cursor: pointer;
  align-items: center;

  @media (max-width: 1180px) {
    border-bottom: 1px solid #ddd;
  }

  @media (min-width: 1181px) {
    &.active::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 20%;
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 10px;
      color: black;
      background-color: var(--purple);
      transition: all 0.2s linear;
    }
  }

  &:hover,
  & svg path {
    color: black;
    fill: black;
  }

  @media (min-width: 769px) and (max-width: 1180px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Navigation = styled.nav`
  z-index: 0;

  @media (max-width: 1180px) {
   
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 110%;
    background: white;
    z-index: 5;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;

    ${({ open }) => open &&
      `
      visibility: visible;
      opacity: 1;
      transition: all 0.2s linear;
    `}
  }

  @media (min-width: 1181px) {
    &:hover li:hover > div {
      visibility: visible;
      transform: translateY(-1%);
      border-bottom: 1px solid #ddd;
    }

    &:hover li > a,
    &:hover li > a svg path {
      transition: all 0.2s;
      color: #bbb;
      fill: #bbb;
    }

    &:hover li > a:hover,
    &:hover li > a:hover svg path {
      transition: all 0.2s;
      color: black;
      fill: black;
    }

    &:hover a:hover svg {
      transform: rotateZ(-180deg);
    }
  }
`;

export const ListContainer = styled.div`
  list-style: none;

  @media (min-width: 1181px) {
    display: inline-flex;
  }

  @media (max-width: 1180px) {
    height: 80%;
    overflow: auto;
  }
`;

export const List = styled.li`
  padding: 0 15px;

  @media (max-width: 1180px) {
    &:hover div {
      height: 100%;
      visibility: visible;
      padding: 20px 0;
    }

    &:hover svg {
      transform: rotateZ(-180deg);
    }
  }

  @media (min-width: 1181px) {
    &:nth-child(1):before {
      content: "";
      height: 56px;
      position: absolute;
      left: 0;
      right: 0;
      background-color: white;
      z-index: -1;
    }
  }

  @media (min-width: 768px) and (max-width: 1180px) {
    display: block;
  }
`;

export const Arrow = styled(ArrowSVG)`
  transition: all 0.4s ease;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const SignUp = styled(NavLink)`
  visibility: ${({ button }) => (button ? "" : "hidden")};
  opacity: ${({ button }) => (button ? "" : "0")};
  background: linear-gradient(
    220.94deg,
    var(--purple2) 14.43%,
    var(--purple) 85.28%
  );
  border-radius: 30px;
  text-decoration: none;
  padding: 8px 30px;
  color: white;
  z-index: 4;
  transition: 0.3s ease;
  box-shadow: 0px 17px 17px rgba(204, 204, 204, 0.04),
    0px 5.125px 5.125px rgba(204, 204, 204, 0.0260636),
    0px 2.12866px 2.12866px rgba(204, 204, 204, 0.02),
    0px 0.769896px 0.769896px rgba(204, 204, 204, 0.0139364);

  @media (max-width: 768px) {
    position: fixed;
    width: 80%;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
  }

  &:hover {
    box-shadow: 0px 17px 17px rgba(169, 80, 196, 0.13),
      0px 5.125px 5.125px rgba(169, 80, 196, 0.0847066),
      0px 2.12866px 2.12866px rgba(169, 80, 196, 0.065),
      0px 0.769896px 0.769896px rgba(169, 80, 196, 0.0452935);
    transform: scale(1.02);
    opacity: 0.9;
    color: white;
  }
`;

export const Login = styled.a`
  z-index: 5;
  cursor: pointer;

  ${({ mobile }) => mobile ? `

  @media (max-width: 1180px) {
    padding: 16px 0;
  }
  
  @media (min-width: 1181px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1180px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  & svg path {
    fill: black;
  }

  color: black;
  ` : `

  @media (max-width: 1180px) {
    display: none;
  }

  font-size: 18px;
  color: var(--purple);
  margin-left: 15px;
  
  &:after {
    background: var(--purple);
  }
  
  & svg path {
    fill: var(--purple);
  }
  `}

  &:after {
    content: "";
    width: 0px;
    height: 2px;
    margin-top: 2px;
    display: block;
    transition: 300ms;
  }

  &:hover:after {
    width: 50px;
  }

  &:hover {
    color: var(--purple);
  }
`;

export const Submenu = styled.div`
  @media (max-width: 1180px) {
    height: 0;
    visibility: hidden;
    transition: all 0.2s linear;
  }
  @media (min-width: 1181px) {
    transition: all 0.5s ease 0.1s;
    transform: translate3d(0px, -99%, 0px);
    visibility: hidden;
    height: auto;
    padding: 64px 0;
    position: absolute;
    z-index: -2;
    background-color: rgb(255, 255, 255);
    width: 100%;
    left: 0px;
  }
`;

export const SubmenuContainer = styled.section``;

export const Burger = styled.button`
  @media (min-width: 1181px) {
    display: none;
  }

  @media (max-width: 1180px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 19px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding-left: 15px;
    z-index: 10;

    &:focus {
      outline: none;
    }

    span {
      width: 16px;
      height: 2px;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
export const Bullets = styled.span``;

export const SubmenuRow = styled(Row)``;

export const SubmenuCol = styled(Col)`
  padding: 0;
`;

export const SubmenuTitle = styled.p`
  font-family: Graphik-Regular;
  letter-spacing: -0.16px;
  font-size: 18px;
  line-height: 1.32;
  color: white;
  color: black;
`;

export const SubmenuLink = styled(Link)`
  display: block;
  font-family: Graphik-Medium;
  font-size: 24px;
  line-height: 52px;
  color: black;

  &:hover {
    color: var(--purple3);
  }
`;
