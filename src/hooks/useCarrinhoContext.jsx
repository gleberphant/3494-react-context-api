import { useContext } from "react"
import { CarrinhoContext } from "../context/CarrinhoContext"

export function useCarrinhoContext() {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)

    const adicionarProduto = function (novoProduto) {
        const index = carrinho.findIndex((item) => item.id === novoProduto.id);

        if (index === -1) {
            setCarrinho([...carrinho, { ...novoProduto, quantidade: 1 }]);
        } else {
            const carrinhoAtualizado = [...carrinho];
            carrinhoAtualizado[index] = { ...carrinhoAtualizado[index], quantidade: carrinhoAtualizado[index].quantidade + 1 };
            setCarrinho(carrinhoAtualizado);
        }

    }

    const removerProduto = function (id) {

        const carrinhoAtualizado = carrinho.reduce((acumulador, item) => {
        
            if (item.id !== id ) acumulador.push(item)
            else if (item.quantidade > 1) acumulador.push({ ...item, quantidade: item.quantidade - 1 });
                  
            return acumulador;
        }, []);

        setCarrinho(carrinhoAtualizado);
    }


    const removerProdutoCarrinho = function (id) {

        const carrinhoAtualizado = carrinho.filter((item) => item.id != id)
        setCarrinho(carrinhoAtualizado)

    }

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho
    }
}