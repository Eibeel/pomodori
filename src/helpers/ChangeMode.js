const ChangeMode = ({ 
  setActive,
  setMode,
  setSecondsTime,
  minuteFocus,
  minuteShortBreak,
  minuteLongBreak
}) => {
  const handleChange = (e) => {
    setActive(false);
    setMode(e.target.id);
    
    switch (e.target.id) {
      case 'short':
        setSecondsTime(minuteShortBreak * 60);
        break;
      case 'long':
        setSecondsTime(minuteLongBreak * 60)
        break;
      default:
        setSecondsTime(minuteFocus * 60)
    }
  };


  return(
    <>
    <button onClick={handleChange} id='Short'>SHORT</button>
    
    <button onClick={handleChange} id='Long'>LONG</button>
    </>
  )
};

export default ChangeMode;
