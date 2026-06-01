// Funções utilitárias
const obterElemento = (id) => document.getElementById(id); /* Função anônima para obter valores, de forma "genérica id" */

export const valorNegativo = (valor) => valor < 0;  /* verifica se o valor do input não é negativo */

export const atualizarInterface = (gastosPorCateg) => {

    const categorias = gastosPorCateg.categorias;
    
    categorias.forEach(({nome, valor}) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${valor}`    
        });

        const elementoTotal = obterElemento("Total");
        elementoTotal.textContent = `Total: R$ ${gastosPorCateg.obterTotal()}`
}