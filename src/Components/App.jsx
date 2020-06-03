import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function note(dict){
  return <Note key = {dict.key}
  title = {dict.title}
  para = {dict.content} />
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(note)}
      <Footer />
    </div>
  );
}

export default App;


