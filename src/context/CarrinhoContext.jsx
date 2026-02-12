import { createContext, useReducer, useState, useMemo, useEffect } from "react";
import { reducerCarrinho } from "../reducer/carrinhoReducer";
export const CarrinhoContext = createContext();

//CarrinhoContext.displayName = "ContextoCarrinho"

export default function CarrinhoContextProvider({ children }) {
  const [carrinho, dispatchCarrinho] = useReducer(reducerCarrinho, []);

  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);

  const { totalTemp, quantidadeTemp } = useMemo(
    () =>
      carrinho.reduce(
        (acumulador, item) => ({
          quantidadeTemp: acumulador.quantidadeTemp + item.quantidade,
          totalTemp: acumulador.totalTemp + item.preco * item.quantidade,
        }),
        { totalTemp: 0.0, quantidadeTemp: 0 },
      ),
    [carrinho],
  );

  useEffect(() => {
    setValorTotalCarrinho(totalTemp);
    setQuantidadeProdutos(quantidadeTemp);
  }, [carrinho]);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatchCarrinho,
        valorTotalCarrinho,
        setValorTotalCarrinho,
        quantidadeProdutos,
        setQuantidadeProdutos,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
