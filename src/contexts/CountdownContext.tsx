import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

const fixedMinutes = 25;
let countdownTimeout: NodeJS.Timeout; // after clicking on the button "Abandonar ciclo" it still run 1 second more, to avoid that use it.

export function CountdownProvider({ children }: CountdownProviderProps) {
  // const contextData = useContext(ChallengesContext);
  // console.log(contextData);
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(fixedMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(fixedMinutes * 60); // set to 25 minutes again
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      // console.log("finalizou");
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
