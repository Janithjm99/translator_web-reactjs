import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [outputLanguage, setOutputLanguage] = useState("DE"); // Default language is German
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    const inputLanguage = "en"; // Input is always English
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
      inputText
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const translation = data[0][0][0];
      setTranslatedText(translation);
    } catch (error) {
      console.error("Error translating text:", error);
      alert("Failed to translate text. Please try again later.");
    }
  };

  const isRtl = outputLanguage === "AR" || outputLanguage === "HE";

  return (
    <div className="App">
      <h1>Simple Translation App</h1>
      <div className="translator">
        <div>
          <label htmlFor="inputText">Input Text (English):</label>
          <textarea
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type here in English..."
          ></textarea>
        </div>

        <div>
          <label htmlFor="outputLanguage">Select Target Language:</label>
          <select
            id="outputLanguage"
            value={outputLanguage}
            onChange={(e) => setOutputLanguage(e.target.value)} // Updates outputLanguage correctly
          >
            <option value="DE">German</option>
            <option value="FR">French</option>
            <option value="ES">Spanish</option>
            <option value="IT">Italian</option>
            <option value="NL">Dutch</option>
            <option value="AR">Arabic</option>
            <option value="HE">Hebrew</option>
            <option value="RU">Russian</option>
            <option value="TR">Turkish</option>
            <option value="PL">Polish</option>
            <option value="SK">Slovak</option>
            <option value="CS">Czech</option>
            <option value="SV">Swedish</option>
            <option value="NO">Norwegian</option>
            <option value="FI">Finnish</option>
            <option value="DA">Danish</option>
            <option value="SL">Slovenian</option>
            <option value="LT">Lithuanian</option>
            <option value="LV">Latvian</option>
            <option value="EL">Greek</option>
            <option value="BG">Bulgarian</option>
            <option value="HR">Croatian</option>
            <option value="HU">Hungarian</option>
            <option value="RO">Romanian</option>
            <option value="MK">Macedonian</option>
            <option value="SR">Serbian (Latin)</option>
            <option value="MO">Moldavian</option>
            <option value="BA">Bosnian</option>
            <option value="TW">Taiwan</option>
            <option value="SG">Singapore</option>
            <option value="TH">Thai</option>
            <option value="MY">Malay</option>
            <option value="ID">Indonesian</option>
            <option value="KO">Korean</option> {/* Korean Language */}
            <option value="ZH-CN">Chinese (Simplified)</option> {/* Chinese Language */}

          </select>
        </div>

        <button onClick={handleTranslate}>Translate</button>

        <div className="output">
          <label htmlFor="translatedText">Translation Result:</label>
          <textarea
            id="translatedText"
            value={translatedText}
            readOnly
            style={{
              direction: isRtl ? "rtl" : "ltr", // Adjust direction based on language
              textAlign: isRtl ? "right" : "left", // Align text based on language
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
