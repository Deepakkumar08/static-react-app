import React from "react";
import SearchBar from "./components/SearchBar";
import Transcription from "./components/Transcription";
import EmotionIndicator from "./components/EmotionIndicator";
import Tips from "./components/Tips";
import "./App.css";
import Icon from "./components/Icon";

function App() {
  return (
    <div className="app-container">
      {/* Header with search bar */}
      <SearchBar />

      {/* Transcription and Analysis Section */}
      <div className="transcription-section">
        <Icon></Icon>
        <Transcription />
        <EmotionIndicator />
        {/* <Tips /> */}
      </div>
    </div>
  );
}

export default App;
