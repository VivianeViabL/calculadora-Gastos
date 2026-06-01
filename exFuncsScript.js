import { Categoria, ListaGastosGategoria } from "./classes.js"; //Tecnica de modularização Ecma
import { valorNegativo, atualizarInterface } from "./utils.js";

// POO

const gastosPorCateg = new ListaGastosGategoria(
    new Categoria("Alimentação"), // "chama" a classe Categoria
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros"),
)

// DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    if(valorNegativo(valorInformado)){
        alert("O valor não pode ser negativo");
        return;
    }

    const categoria = gastosPorCateg.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);

    atualizarInterface(gastosPorCateg);
    formulario.reset(); // como se fosse um "limpar dados" de formulario
})



