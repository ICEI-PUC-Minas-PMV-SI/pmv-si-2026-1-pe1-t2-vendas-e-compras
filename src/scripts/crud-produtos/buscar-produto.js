var CHAVE_PRODUTOS = 'swapstore_produtos';

function buscarProduto(id_produto) {
  if (!id_produto) {
    return null;
  }
  
  var produtosJSON = localStorage.getItem(CHAVE_PRODUTOS);
  var produtos = produtosJSON ? JSON.parse(produtosJSON) : [];
  
  var produtoEncontrado = produtos.find(function(produto) {
    return produto.id_produto === id_produto;
  });
  
  return produtoEncontrado ? produtoEncontrado : null;
}
