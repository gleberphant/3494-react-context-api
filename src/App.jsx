import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";
import { CarrinhoContext } from "./context/CarrinhoContext";

function App() {
  const [carrinho, setCarrinho] = useState([])

  return (
    <BrowserRouter>
      <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
