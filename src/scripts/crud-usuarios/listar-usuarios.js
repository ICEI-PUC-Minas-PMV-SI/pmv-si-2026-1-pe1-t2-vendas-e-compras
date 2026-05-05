function listarUsuarios(usuario, senha) {
  var CHAVE_USUARIOS = 'swapstore_usuarios';
  
  if (!usuario || !senha) {
    return null;
  }
  
  var usuariosJSON = localStorage.getItem(CHAVE_USUARIOS);
  var usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
  
  var usuarioEncontrado = usuarios.find(function(usuarioDaLista) {
    return usuarioDaLista.usuario === usuario && usuarioDaLista.senha === senha;
  });
  
  return usuarioEncontrado ? usuarioEncontrado.id : null;
}
