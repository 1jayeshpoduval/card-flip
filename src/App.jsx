import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  const [flipState, setFlipState] = useState(false);
  const cardFlip = () => {
    setFlipState(!flipState);
  };

  return (
    <section className="w-screen h-screen bg-almost-black">
      <div className="flex flex-col items-center justify-center w-90% h-full max-w-screen-2xl mx-auto u-d-flex u-align-center">
        <Card flipped={flipState} />
        <div
          className="bg-btn-primary font-Eudoxus sans px-10 py-2 text-white rounded-full cursor-pointer hover:bg-btn-hover transition-colors"
          onClick={cardFlip}
        >
          FLIP
        </div>
      </div>
    </section>
  );
}

export default App;
