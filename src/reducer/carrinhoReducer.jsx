export function reducerCarrinho(carrinho, { tipo, payload }) {
  switch (tipo) {
    case "ADICIONAR_PRODUTO":
      const novoProduto = payload;
      const index = carrinho.findIndex((item) => item.id === novoProduto.id);

      if (index < 0) {
        return [...carrinho, { ...novoProduto, quantidade: 1 }];
      } else {
        const carrinhoAtualizado = [...carrinho];
        carrinhoAtualizado[index] = {
          ...carrinhoAtualizado[index],
          quantidade: carrinhoAtualizado[index].quantidade + 1,
        };

        return carrinhoAtualizado;
      }

    case "REMOVER_PRODUTO":
      return carrinho.reduce((acumulador, item) => {
        if (item.id !== payload) acumulador.push(item);
        else if (item.quantidade > 1)
          acumulador.push({ ...item, quantidade: item.quantidade - 1 });

        return acumulador;
      }, []);

    case "REMOVER_CARRINHO":
      return carrinho.filter((item) => item.id != payload);

    default:
      return carrinho;
  }
}
