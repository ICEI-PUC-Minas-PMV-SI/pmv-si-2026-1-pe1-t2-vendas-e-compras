var CHAVE_CARRINHO = 'swapstore_carrinho';

function obterCarrinho() {
  var json = localStorage.getItem(CHAVE_CARRINHO);
  return json ? JSON.parse(json) : [];
}

function adicionarAoCarrinho(produto, quantidade) {
  var carrinho = obterCarrinho();
  var encontrado = false;
  for (var i = 0; i < carrinho.length; i++) {
    if (carrinho[i].id_produto === produto.id_produto) {
      carrinho[i].quantidade += quantidade;
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    carrinho.push({
      id_produto: produto.id_produto,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem || '',
      quantidade: quantidade,
      id_usuario_vendedor: produto.id_usuario
    });
  }
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}

function removerDoCarrinho(idProduto) {
  var carrinho = obterCarrinho();
  var novo = [];
  for (var i = 0; i < carrinho.length; i++) {
    if (carrinho[i].id_produto !== idProduto) {
      novo.push(carrinho[i]);
    }
  }
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(novo));
}

function atualizarQuantidadeCarrinho(idProduto, quantidade) {
  if (quantidade <= 0) {
    removerDoCarrinho(idProduto);
    return;
  }
  var carrinho = obterCarrinho();
  for (var i = 0; i < carrinho.length; i++) {
    if (carrinho[i].id_produto === idProduto) {
      carrinho[i].quantidade = quantidade;
      break;
    }
  }
  localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
}

function limparCarrinho() {
  localStorage.removeItem(CHAVE_CARRINHO);
}
