function removerProduto(id_produto) {
  var CHAVE_PRODUTOS = 'swapstore_produtos';
  var id_usuario = localStorage.getItem('swapstore_usuario_logado');
  
  if (!id_produto || !id_usuario) {
    return false;
  }
  
  var produtosJSON = localStorage.getItem(CHAVE_PRODUTOS);
  var produtos = produtosJSON ? JSON.parse(produtosJSON) : [];
  
  var produto = produtos.find(function(p) {
    return p.id_produto === id_produto;
  });
  
  if (!produto || produto.id_usuario !== id_usuario) {
    return false;
  }
  
  var produtosFiltrados = produtos.filter(function(p) {
    return p.id_produto !== id_produto;
  });
  
  if (produtosFiltrados.length === produtos.length) {
    return false;
  }
  
  localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(produtosFiltrados));
  
  return true;
}
