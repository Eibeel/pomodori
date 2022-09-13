import { useState, useEffect } from "react";

function App() {
  const [minuteFocus, setMinuteFocus] = useState(25)
  const [minuteLong, setMinuteLong] = useState(15)
  const [minuteShort, setMinuteShort] = useState(5)
  const [mode, setMode] = useState('Focus');
  const [secondsTime, setSecondsTime] = useState(minuteFocus * 60);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const iterator = setInterval(() => {
        setSecondsTime((seconds) => seconds - 1);
      }, 1000);

      if (secondsTime === 0) {
        clearInterval(iterator);
        setActive(false);
      }

      return () => clearInterval(iterator);
    }
  }, [active, secondsTime]);

  const handlePause = () => {
    setActive(false);
  };


  const handleReset = () => {
    setActive(false);
    setMode('Focus')
    setSecondsTime(minuteFocus * 60);
  };

  const handleModeShort = () => {
    setActive(false);
    setMode('Short Break')
    setSecondsTime(minuteShort * 60);
  };

  const handleModeLong = () => {
    setActive(false);
    setMode('Long Break')
    setSecondsTime(minuteLong * 60);
  };

  const formatMinutes = (seconds) => {
    return (`${Math.floor(seconds / 60)}: ${(seconds % 60 > 9) ? seconds % 60 : "0" + (seconds % 60)}`)
  }

  return (
    <div className="App">
      <button onClick={setActive}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleReset}>Focus</button>
      <button onClick={handleModeShort}>Short</button>
      <button onClick={handleModeLong}>Long</button>

      <h2>{formatMinutes(secondsTime)}</h2>
      <h2>{mode}</h2>
    </div>
  );
}

export default App;
