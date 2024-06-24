import React, { useState, useEffect } from "react";
import "./App.css"; // Add your CSS styles here

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setQuote({ text: data.slip.advice });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">- {quote.author}</p>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote.text}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
