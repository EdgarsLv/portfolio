import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 60px 70px;
  @media (min-width: 100px) and (max-width: 991px) {
    padding: 70px 30px;
  }
`;

const H1 = styled.h1.attrs((props) => ({
  content: props.content,
}))`
  position: relative;
  font-family: "Kaushan Script";
  font-size: 42px;
  margin-bottom: 0.5rem;
  color: var(--primary-txt);
  transition: all 0.2s ease-in;
  z-index: 2;
  &::after {
    content: "${(props) => props.content}";
    /* content: "about"; */
    position: absolute;
    color: var(--title);
    text-transform: uppercase;
    left: -5px;
    top: 12px;
    z-index: -1;
  }
  @media (max-width: 991px) {
    font-size: 35px;
  }
`;
const Title = (props) => {
  return (
    <Div>
      <H1 content={props.content}>{props.title}</H1>
    </Div>
  );
};

export default Title;
