import "../App.css";

function ResultDisplay({ result }) {
  if (!result) {
    return null;
  }

  return (
    <section className="result-section">
      <h2>Result</h2>
      <p className="result-text">{result}</p>
    </section>
  );
}

export default ResultDisplay;