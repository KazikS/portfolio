"use strict";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed: number;
  enabled?: boolean;
};

/**
 *
 * @param text - строка которая должна быть "напечатана"
 * @param speed - скорость печати строки в мс
 * @param enabled - флаг включения печати текста
 * @returns
 */
export const useTypedText = ({ text, speed, enabled }: Props) => {
  const [symbolNumber, setSymbolNumber] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const intervalId = setInterval(() => {
      setSymbolNumber((prev) => {
        if (prev <= text.length) {
          return prev + 1;
        }
        clearInterval(intervalId);
        return prev;
      });
    }, speed);
    return () => clearInterval(intervalId);
  }, [enabled]);

  const displayedText = text.slice(0, symbolNumber);

  return {
    text: displayedText,
    isDone: symbolNumber >= text.length,
  };
};
