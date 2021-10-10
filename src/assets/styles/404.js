import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowButton } from "assets/images/arrow-b.svg";

export const MainError = styled.div`
  position: relative;
  padding: 64px;
  max-width: 512px;
`;

export const Container = styled.section``;

export const Error = styled.h1`
  font-size: 48px;
  position: relative;

  @media (max-width: 700px) {
    font-size: 32px;
  }
`;

export const ErrorText = styled.h2`
  font-size: 24px;
  padding-bottom: 32px;
`;

export const ListRow = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 22px;
`;

export const List = styled.li`
  font-size: 18px;
  font-family: Graphik-Regular;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--purple);

  &:after {
    content: "";
    width: 0px;
    height: 2px;
    display: block;
    background: var(--purple);
    transition: 300ms;
  }

  &:hover:after {
    width: 240px;
  }

  &:hover {
    color: var(--purple);
  }
`;

export const Arrow = styled(ArrowButton)`
  margin-top: -2px;
`;
