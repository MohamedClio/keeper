import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((singleNote) => (
        <Note
          title={singleNote.title}
          content={singleNote.content.substring(0, 150)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
