import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export function useCarrinhoContext() {
  const {
    carrinho,
    dispatchCarrinho,
    valorTotalCarrinho,
    quantidadeProdutos,
  } = useContext(CarrinhoContext);

  const adicionarProduto = function (novoProduto) {
    dispatchCarrinho({
      tipo: "ADICIONAR_PRODUTO",
      payload: novoProduto,
    });
  };

  const removerProduto = function (id) {
    dispatchCarrinho({
      tipo: "REMOVER_PRODUTO",
      payload: id,
    });
  };

  const removerProdutoCarrinho = function (id) {
    dispatchCarrinho({
      tipo: "REMOVER_CARRINHO",
      payload: id,
    });
  };

  return {
    carrinho,
    valorTotalCarrinho,
    quantidadeProdutos,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
  };
}
