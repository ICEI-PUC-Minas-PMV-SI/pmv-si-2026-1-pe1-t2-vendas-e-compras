function removerTodosUsuarios() {
  var CHAVE_USUARIOS = 'swapstore_usuarios';
  var usuariosJSON = localStorage.getItem(CHAVE_USUARIOS);

  if (!usuariosJSON) {
    return false;
  }

  localStorage.removeItem(CHAVE_USUARIOS);
  return true;
}
