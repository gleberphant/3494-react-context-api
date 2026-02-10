import React, { useContext } from "react";
import Produto from "./Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { CarrinhoContext } from "@/context/CarrinhoContext";

const Produtos = () => {

  const { carrinho, setCarrinho } = useContext(CarrinhoContext)

  const removerProduto = function (id) {
    novoCarrinho = carrinho.map(
      (item) => {
        if (item.id != id) return item
        else if (item.quantidade > 1) {
          item.quantidade -= 1
          return item
        }
      })
    setCarrinho(novoCarrinho)

  }


  const adicionarProduto = function (novoProduto) {
    let temProduto = false

    const novoCarrinho = carrinho.map((item) => {
      if (item.id === novoProduto.id) {
        item.quantidade += 1
        temProduto = true
      }

      return item
    })

    if (temProduto) {
      setCarrinho(novoCarrinho)
    } else {
      novoProduto.quantidade = 1
      setCarrinho([...novoCarrinho, novoProduto])
    }
  }

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
