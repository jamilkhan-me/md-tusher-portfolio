import React from "react";
import Header from "./components/Header";
import Work from "./components/Work";
import Writing from "./components/Writing";

const App = () => {
  return (
    <div class="w-full px-20 bg-metal text-white">
      <Header />
      <Work />
      <Writing />
    </div>
  );
};

export default App;
