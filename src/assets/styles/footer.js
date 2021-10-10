import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as LogoSVG } from "assets/images/nu.svg";
import { ReactComponent as FaceSVG } from "assets/images/facebook.svg";
import { ReactComponent as InstaSVG } from "assets/images/instagram.svg";
import { ReactComponent as LinkedSVG } from "assets/images/linkedin.svg";
import { ReactComponent as YouTubeSVG } from "assets/images/youtube.svg";
import { ReactComponent as TwitterSVG } from "assets/images/twitter.svg";

export const FooterAnimation = styled.div`
  position: relative;
  height: 130px;
  z-index: -2;
`;

export const FooterContent = styled.footer`
  & ${FooterAnimation}::after, & ${FooterAnimation}::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -2;
    transition: clip-path 1s;
  }

  & ${FooterAnimation}::after {
    background-color: black;
  }

  & ${FooterAnimation}::before {
    background-color: var(--purple);
  }

  &:hover ${FooterAnimation}::before {
    clip-path: polygon(0 60%, 100% 0, 100% 100%, 0% 100%);
  }
  &:hover ${FooterAnimation}::after {
    clip-path: polygon(0 0, 100% 60%, 100% 100%, 0% 100%);
  }
`;

export const Container = styled.section``;

export const FooterMain = styled.div`
  background-color: black;
  padding-bottom: 96px;
`;

export const FooterRow = styled(Row)``;

export const FooterCol = styled(Col)`
  padding: 0;

  @media (max-width: 528px) {
    max-width: 250px;
    margin: 0 auto 40px auto;
  }
`;

export const ColTitle = styled.p`
  font-family: Graphik-Regular;
  letter-spacing: -0.16px;
  font-size: 18px;
  line-height: 1.32;
  color: white;
`;

export const ColLink = styled(Link)`
  display: block;
  font-family: Graphik-Medium;
  font-size: 18px;
  line-height: 32px;
  color: white;

  &:hover {
    color: var(--purple3);
  }
`;

export const CopyMain = styled.div`
  padding: 80px 0;
  background-color: black;
  border-top: 1px solid var(--black);
  display: flex;
  align-items: center;
`;

export const CopyContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const CopyLogo = styled(LogoSVG)`
  max-width: 44px;
  padding-right: 15px;

  @media (max-width: 768px) {
    padding-bottom: 15px;
  }

  & path {
    fill: white;
  }
`;

export const CopyText = styled.span`
  color: white;
`;

export const RS = styled.div`
  display: flex;
  -webkit-box-pack: end;

  @media (min-width: 769px) {
    justify-content: flex-end;
  }
`;

export const RSLink = styled.a`
  margin-left: 24px;

  svg path {
    fill: white;
  }
  &:hover svg path {
    fill: var(--purple3);
  }
`;

export const Facebook = styled(FaceSVG)``;

export const Instagram = styled(InstaSVG)``;

export const Linkedin = styled(LinkedSVG)``;

export const Youtube = styled(YouTubeSVG)``;

export const Twitter = styled(TwitterSVG)``;
