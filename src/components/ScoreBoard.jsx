import "../App.css";

function ScoreBoard({ wins, losses, ties }) {
  return (
    <section className="score-section">
      <h2>Score Board</h2>
      <div className="score-board">
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
        <p>Ties: {ties}</p>
      </div>
    </section>
  );
}

export default ScoreBoard;