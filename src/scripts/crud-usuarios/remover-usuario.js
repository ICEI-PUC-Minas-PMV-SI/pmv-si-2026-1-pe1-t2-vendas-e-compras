function removerUsuario(usuario, senha) {
  var CHAVE_USUARIOS = 'swapstore_usuarios';
  
  var id = listarUsuarios(usuario, senha);
  
  if (!id) {
    return false;
  }
  
  var usuariosJSON = localStorage.getItem(CHAVE_USUARIOS);
  var usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
  
  var usuariosFiltrados = usuarios.filter(function(usuarioDaLista) {
    return usuarioDaLista.id !== id;
  });
  
  if (usuariosFiltrados.length === usuarios.length) {
    return false;
  }
  
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuariosFiltrados));
  
  return true;
}
