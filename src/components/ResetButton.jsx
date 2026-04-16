import "../App.css";

function ResetButton({ onReset }) {
  return (
    <section className="reset-section">
      <button onClick={onReset} className="reset-button">
        Reset Game
      </button>
    </section>
  );
}

export default ResetButton;