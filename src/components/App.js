import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About  image="" about="About this blog" />
    </div>
  );
}

export default App;
