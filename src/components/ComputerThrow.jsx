import "../App.css";

function ComputerThrow({ computerChoice, isAnimating }) {
  let imagePath = "/images/question-mark.PNG";

  if (isAnimating || computerChoice === null) {
    imagePath = "/images/question-mark.PNG";
  } else if (computerChoice === "rock") {
    imagePath = "/images/rock.PNG";
  } else if (computerChoice === "paper") {
    imagePath = "/images/paper.PNG";
  } else if (computerChoice === "scissors") {
    imagePath = "/images/scissors.PNG";
  }

  return (
    <section className="computer-section">
      <h2>Computer Choice</h2>
      <img
        src={imagePath}
        alt="computer throw"
        className={isAnimating ? "computer-image shuffle" : "computer-image"}
      />
    </section>
  );
}

export default ComputerThrow;