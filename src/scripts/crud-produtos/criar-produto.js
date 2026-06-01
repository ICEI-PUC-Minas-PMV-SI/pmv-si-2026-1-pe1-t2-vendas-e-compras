var CHAVE_PRODUTOS = 'swapstore_produtos';

function criarProduto(nome, preco, descricao, imagemData, quantidade) {
  var id_usuario = localStorage.getItem('swapstore_usuario_logado');
  
  if (!nome || !preco || !id_usuario) {
    return null;
  }
  
  var produtosJSON = localStorage.getItem(CHAVE_PRODUTOS);
  var produtos = produtosJSON ? JSON.parse(produtosJSON) : [];
  
  var novoId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
  
  var novoProduto = {
    id_produto: novoId,
    id_usuario: id_usuario,
    nome: nome,
    preco: parseFloat(preco),
    descricao: descricao || '',
    imagem: imagemData || '',
    status: 'disponivel',
    quantidade: quantidade ? parseInt(quantidade) : 1,
    criado_em: new Date().toISOString(),
    atualizado_em: new Date().toISOString()
  };
  
  produtos.push(novoProduto);
  localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(produtos));
  
  return novoProduto;
}
