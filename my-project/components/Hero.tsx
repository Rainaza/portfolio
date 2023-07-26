import React from "react";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

export const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Kamil", "Dzirba", "Gej"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
        
      <h1>
        <span>{text}</span>
      </h1>
    </div>
  );
};
