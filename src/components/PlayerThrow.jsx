import "../App.css";

function PlayerThrow({ selectedChoice, onSelect, isAnimating }) {
  const handleClick = (choice) => {
    if (isAnimating) {
      return;
    }

    onSelect(choice);
  };

  return (
    <section>
      <h2>Your Choice</h2>

      <img
        src="/images/rock.PNG"
        alt="Rock"
        onClick={() => handleClick("rock")}
        className={selectedChoice === "rock" ? "selected" : ""}
      />

      <img
        src="/images/paper.PNG"
        alt="Paper"
        onClick={() => handleClick("paper")}
        className={selectedChoice === "paper" ? "selected" : ""}
      />

      <img
        src="/images/scissors.PNG"
        alt="Scissors"
        onClick={() => handleClick("scissors")}
        className={selectedChoice === "scissors" ? "selected" : ""}
      />
    </section>
  );
}

export default PlayerThrow;