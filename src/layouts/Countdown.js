import styled from "styled-components";

export const Countdown = styled.div`
    align-items: center;
    background-color: ${({theme}) => theme.colors.bgColor};
    border: solid 8px ${({theme}) => theme.colors.modeFocusColor};
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    font-family: 'Roboto Mono', monospace;
    font-size: 40px;
    height: 224px;
    justify-content: center;
    width: 224px;
`;