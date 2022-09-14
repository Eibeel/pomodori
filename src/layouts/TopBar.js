// import github from "../assets/github.svg"
import styled from "styled-components";
import { GitHub } from "iconoir-react";

const TopBarStyle = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgColor};
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 12px 16px;

  @media (min-width: 1440px) {
    column-gap: 38rem;
    justify-content: center;
  }
`

export const TopBar = () => {
  return (
    <TopBarStyle>
      <span id="title">Pomodori</span>
      <a href="https://github.com/Eibeel/pomodori-react-app">
        <GitHub color="#667080" strokeWidth={2} height={28} width={28}/>
      </a>
    </TopBarStyle>
  );
};
