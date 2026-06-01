export class Categoria {
    // campos privados
    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }
    // Uso de Get para acessar propriedades privadas
    get nome() {
        return this.#nome;
    }

    get valor() {
        return this.#valor;
    }
    // Manipulação do estado
    adicionarValor(valor){
        this.#valor += parseFloat(valor); // garante que o valor seja float
    }
}

export class ListaGastosGategoria {
    #categorias;
    // Rest Operator "..." para permitir receber quantas categorias forem necessárias, sem uma quantidade fixa
    constructor(...categorias){
        this.#categorias = categorias;
    }
    get categorias() {
        return this.#categorias;
    } 
       
    obterCategoriaPorNome(nome) {
        // Programação funcional
        return this.#categorias.find((categoria) => categoria.nome == nome); // O find() percorre o array procurando o primeiro item que atende a uma condição
    }

    obterTotal() {
        // Redução de dados com Reduce (não é subtração, é porque ele “reduz” vários itens para um único valor)
        return this.categorias.reduce((total, categoria) => total + categoria.valor, 0) // "total" (primeiro valor) é o acumulador, "categoria" (segundo valor) é item atual do array, e "0" no final é valor inicial do acumulador
    }
}