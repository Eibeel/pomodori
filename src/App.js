import React from "react";
import { useState, useEffect } from "react";
import ChangeStatus from "./helpers/ChangeStatus";
import { formatMinutes } from "./helpers/formatMinutes"
import { GlobalStyle } from "./styleComponents/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styleComponents/theme";
import { TopBar } from "./layouts/TopBar";
import { Countdown } from "./layouts/Countdown";
import { Mode } from "./layouts/Mode";
import { TimerScreen } from "./layouts/TimerScreen";
import { Buttons } from "./layouts/Buttons";
import { IconoirProvider, PauseOutline, PlayOutline, Undo } from 'iconoir-react';
import { Wrapper } from "./layouts/Wrapper";


function App() {
  const minuteFocus = 25;
  const minuteShort = 5;
  const minuteLong = 15;
  const [mode, setMode] = useState('FOCUS');
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
    setActive(false)
    setSecondsTime(minuteFocus * 60)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
        <TopBar />
          <TimerScreen>
            <Countdown>{formatMinutes(secondsTime)}</Countdown>
            <Mode>{mode}</Mode>
            <ChangeStatus
              setActive={setActive}
              setSecondsTime={setSecondsTime}
              setMode={setMode}
              minuteFocus={minuteFocus}
              minuteShort={minuteShort}
              minuteLong={minuteLong}
            />
          </TimerScreen>

          <Buttons>
            <IconoirProvider iconProps={
              {color: '#adb5bd', width: '32px', height: '32px'}}>
              <PlayOutline className="buttonIcon" onClick={setActive} />
              <PauseOutline className="buttonIcon" onClick={handlePause} />
              <Undo className="buttonIcon" onClick={handleReset}/>
            </IconoirProvider>
          </Buttons>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
