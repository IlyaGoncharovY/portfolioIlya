import styled from "styled-components";
import dgImage from "../assects/img/dg.jpeg";

export const Container = styled.div`
  height: 100vh;
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(${dgImage});

  &::-webkit-scrollbar {
    display: none;
  }
`
