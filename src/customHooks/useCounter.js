import { useEffect, useState } from "react";

const useCounter = (number, time, start = 0) => {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev + number);
    }, time);

    return () => {
      clearInterval(timer);
    };
  }, [number, time, start]);

  return counter;
};

export default useCounter;