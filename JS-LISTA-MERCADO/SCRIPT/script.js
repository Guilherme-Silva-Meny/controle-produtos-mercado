// Array para armazenar produtos
let produtos = [];
let total = 0; // Variável para armazenar o valor total dos produtos

// Elementos de manipulação do DOM
const produtoInput = document.getElementById("produto"); // Captura o campo de entrada de nome do produto
const valorInput = document.getElementById("valor"); // Captura o campo de entrada do valor do produto
const tabela = document.getElementById("tabelaProdutos"); // Captura o elemento da tabela onde os produtos serão exibidos
const tbody = tabela.querySelector("tbody"); // Captura o corpo da tabela onde as linhas de produtos serão inseridas
const totalElement = document.getElementById("total"); // Captura o elemento onde será exibido o valor total

// Função para adicionar um produto ao array e atualizar a tabela
document.getElementById("adicionar").addEventListener("click", function() {
    const nomeProduto = produtoInput.value; // Obtém o valor do campo de nome do produto
    const valorProduto = parseFloat(valorInput.value); // Obtém o valor do campo e converte para número

    // Verifica se o nome do produto foi preenchido, se o valor é numérico e positivo
    if (nomeProduto && !isNaN(valorProduto) && valorProduto > 0) {
        // Adiciona o produto (nome e valor) ao array de produtos
        produtos.push({ nome: nomeProduto, valor: valorProduto });

        // Atualiza o valor total
        total += valorProduto;

        // Limpa os campos de entrada do produto
        produtoInput.value = "";
        valorInput.value = "";

        // Atualiza o total exibido
        totalElement.textContent = "R$ " + total.toFixed(2);
    } else {
        // Exibe um alerta se os dados inseridos foram inválidos
        alert ("Por favor, insira um nome de produto válido e um valor positivo.");
    }
});

// Função para exibir a tabela com os produtos
document.getElementById("visualizarTabela").addEventListener("click", function() {
    // Limpar o conteúdo atual da tabela para evitar duplicações
    tbody.innerHTML = "";

    // Itera sobre o array de produtos e adiciona uma linha para cada produto na tabela
    produtos.forEach(function(produto) {
        let linha = document.createElement("tr"); // Criar uma nova linha na tabela
        let nomeCell = document.createElement("td"); // Criar uma célula para o nome do produto
        let valorCell = document.createElement("td"); // Criar uma célula para o valor do produto

        // Definindo o texto das células
        nomeCell.textContent = produto.nome; // Supondo que o produto tenha uma propriedade 'nome'
        valorCell.textContent = produto.valor.toFixed(2); // Supondo que o produto tenha uma propriedade 'valor'

        // Adiciona as células à linha
        linha.appendChild(nomeCell);
        linha.appendChild(valorCell);

        // Adiciona a linha ao corpo da tabela
        tbody.appendChild(linha);
    });

    // Atualiza o valor total no rodapé da tabela, formatado com duas casas decimais
    totalElement.textContent = "R$ " + total.toFixed(2);

    // Remove a classe "oculto" da tabela para que ela seja exibida
    tabela.classList.remove("oculto");
});
