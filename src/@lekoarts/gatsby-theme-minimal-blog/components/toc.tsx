import React from "react";
import styled from "styled-components";

const Toc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  z-index: 1000;
  background-color: white;
  padding: 1rem;
  li {
    line-height: 1rem;
    margin-top: 1rem;

    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;
const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`;

export { Toc, InnerScroll };
