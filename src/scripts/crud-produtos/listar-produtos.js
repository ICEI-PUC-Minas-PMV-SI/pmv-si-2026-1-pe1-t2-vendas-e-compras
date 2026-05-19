function listarProdutos() {
  var CHAVE_PRODUTOS = 'swapstore_produtos';
  var produtosJSON = localStorage.getItem(CHAVE_PRODUTOS);

  if (!produtosJSON) {
    return [];
  }

  try {
    var produtos = JSON.parse(produtosJSON);
    var produtosDisponiveis = produtos.filter(function(produto) {
      return produto.status === 'disponivel';
    });
    return Array.isArray(produtosDisponiveis) ? produtosDisponiveis : [];
  } catch (erro) {
    return [];
  }
}

function listarProdutosPorUsuario(id_usuario) {
  var CHAVE_PRODUTOS = 'swapstore_produtos';
  var produtosJSON = localStorage.getItem(CHAVE_PRODUTOS);

  if (!produtosJSON) {
    return [];
  }

  try {
    var produtos = JSON.parse(produtosJSON);
    var produtosDoUsuario = produtos.filter(function(produto) {
      return produto.id_usuario === id_usuario;
    });
    return Array.isArray(produtosDoUsuario) ? produtosDoUsuario : [];
  } catch (erro) {
    return [];
  }
}

function listarTodosProdutos() {
  var CHAVE_PRODUTOS = 'swapstore_produtos';
  var produtosJSON = localStorage.getItem(CHAVE_PRODUTOS);

  if (!produtosJSON) {
    return [];
  }

  try {
    var produtos = JSON.parse(produtosJSON);
    return Array.isArray(produtos) ? produtos : [];
  } catch (erro) {
    return [];
  }
}
