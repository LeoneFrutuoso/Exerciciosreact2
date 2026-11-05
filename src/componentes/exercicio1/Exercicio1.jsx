import React, { useState } from "react";
import "./App.css";


function BotaoContador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>
        Contador é: {contador}
      </button>
    </div>
  );
}
