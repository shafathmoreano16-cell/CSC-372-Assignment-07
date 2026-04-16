import { useEffect, useState } from "react";
import "./App.css";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState("");

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);

  const choices = ["rock", "paper", "scissors"];

  const handlePlayerChoice = (choice) => {
    if (isAnimating) {
      return;
    }

    setPlayerChoice(choice);
    setComputerChoice(null);
    setResult("");
    setIsAnimating(true);
  };

  const handleReset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setIsAnimating(false);
    setWins(0);
    setLosses(0);
    setTies(0);
  };

  useEffect(() => {
    if (!isAnimating) {
      return;
    }

    const shuffleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      setComputerChoice(choices[randomIndex]);
    }, 500);

    const stopAnimation = setTimeout(() => {
      clearInterval(shuffleInterval);

      const finalIndex = Math.floor(Math.random() * choices.length);
      const finalChoice = choices[finalIndex];

      setComputerChoice(finalChoice);
      setIsAnimating(false);

      if (playerChoice === finalChoice) {
        setResult("It's a Tie!");
        setTies((prevTies) => prevTies + 1);
      } else if (
        (playerChoice === "rock" && finalChoice === "scissors") ||
        (playerChoice === "paper" && finalChoice === "rock") ||
        (playerChoice === "scissors" && finalChoice === "paper")
      ) {
        setResult("You Win!");
        setWins((prevWins) => prevWins + 1);
      } else {
        setResult("You Lose!");
        setLosses((prevLosses) => prevLosses + 1);
      }
    }, 3000);

    return () => {
      clearInterval(shuffleInterval);
      clearTimeout(stopAnimation);
    };
  }, [isAnimating, playerChoice]);

  return (
    <main className="app">
      <h1>Rock Paper Scissors</h1>

      <PlayerThrow
        selectedChoice={playerChoice}
        onSelect={handlePlayerChoice}
        isAnimating={isAnimating}
      />

      <ComputerThrow
        computerChoice={computerChoice}
        isAnimating={isAnimating}
      />

      <ResultDisplay result={result} />

      <ScoreBoard wins={wins} losses={losses} ties={ties} />

      <ResetButton onReset={handleReset} />
    </main>
  );
}

export default App;