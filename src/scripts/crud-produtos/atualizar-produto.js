function atualizarProduto(id_produto, novosDados) {
  var CHAVE_PRODUTOS = 'swapstore_produtos';
  var id_usuario = localStorage.getItem('swapstore_usuario_logado');
  
  if (!id_produto || !id_usuario) {
    return null;
  }
  
  var produtosJSON = localStorage.getItem(CHAVE_PRODUTOS);
  var produtos = produtosJSON ? JSON.parse(produtosJSON) : [];
  
  var indiceProduto = produtos.findIndex(function(produto) {
    return produto.id_produto === id_produto;
  });
  
  if (indiceProduto === -1) {
    return null;
  }
  
  if (produtos[indiceProduto].id_usuario !== id_usuario) {
    return null;
  }
  
  produtos[indiceProduto] = Object.assign(produtos[indiceProduto], novosDados, {
    id_produto: id_produto,
    id_usuario: id_usuario,
    atualizado_em: new Date().toISOString()
  });
  
  localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(produtos));
  
  return produtos[indiceProduto];
}
