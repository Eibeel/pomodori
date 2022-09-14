import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-color: ${({ theme }) => theme.colors.bgColor};
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
}

#title{
    color: ${({ theme }) => theme.colors.altColor};
    font-size: 22px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: ${({ theme }) => theme.font.weightBold};
}

.buttonIcon{
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 200ms;
}

.buttonIcon:active{
    background-color: #273043;
}
`