import styled from "styled-components";

const ChangeStatusButton = styled.button`
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
    font-size: 15px;
    margin: auto 2px;
    padding: 6px 10px;
    color: ${({ theme }) => theme.colors.altColor};
    width: fit-content;
    height: fit-content;
    transition-duration: 200ms;


    &:focus{
      color: ${({ theme }) => theme.colors.textColor};
      background-color: #273043;
      font-weight: 500;
    }
`

const ChangeStatus = ({
  setActive,
  setMode,
  setSecondsTime,
  minuteFocus,
  minuteShort,
  minuteLong,
}) => {
  const handleChange = (e) => {
    setActive(false);
    setMode(e.target.innerText);

    switch (e.target.id) {
      case 'short':
        setSecondsTime(minuteShort * 60);
        break;
      case 'long':
        setSecondsTime(minuteLong * 60);
        break;
      default:
        setSecondsTime(minuteFocus * 60);
    }
  };


  return (
    <div>
      <ChangeStatusButton id="short" onClick={handleChange}>SHORT BREAK</ChangeStatusButton>
      <ChangeStatusButton onClick={handleChange}>FOCUS</ChangeStatusButton>
      <ChangeStatusButton id="long" onClick={handleChange}>LONG BREAK</ChangeStatusButton>
    </div>
  )
};

export default ChangeStatus;
