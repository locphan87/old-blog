import React from "react";
import styled from "styled-components";

const Toc = styled.ul`
  background-color: #f9f6f7;
  color: ${(props) => {
    console.log(props);
    return "red";
  }};
  padding: 1.5rem;
  list-style: none;
  h2 {
    margin: 0;
  }
  li {
    line-height: 1rem;
    margin-top: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export { Toc };
