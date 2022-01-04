import "./App.css";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");
  const [lang, setLang] = useState("");

  const handleSpeech2Text = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.interimResults = false;
    recognition.start();
    recognition.onresult = (e) => {
      const content = e.results[0][0].transcript;
      setContent(content);
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleSpeech2Text}>Start</button>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en-IN">English India</option>
          <option value="en-US">English US</option>
          <option value="hi-IN">Hindi</option>
        </select>
        <div style={{ marginTop: 20 }}>{content}</div>
      </header>
    </div>
  );
}

export default App;
