function listarTodosUsuarios() {
  var CHAVE_USUARIOS = 'swapstore_usuarios';
  var usuariosJSON = localStorage.getItem(CHAVE_USUARIOS);

  if (!usuariosJSON) {
    return [];
  }

  try {
    var usuarios = JSON.parse(usuariosJSON);
    return Array.isArray(usuarios) ? usuarios : [];
  } catch (erroAoConverter) {
    return [];
  }
}
