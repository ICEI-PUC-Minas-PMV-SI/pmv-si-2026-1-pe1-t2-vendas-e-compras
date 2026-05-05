function atualizarUsuario(usuario, senha, novosDados) {
  var CHAVE_USUARIOS = 'swapstore_usuarios';
  
  var id = listarUsuarios(usuario, senha);
  
  if (!id) {
    return null;
  }
  
  var usuariosJSON = localStorage.getItem(CHAVE_USUARIOS);
  var usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
  
  var indiceUsuario = usuarios.findIndex(function(usuarioDaLista) {
    return usuarioDaLista.id === id;
  });
  
  if (indiceUsuario === -1) {
    return null;
  }
  
  if (novosDados.email) {
    var emailNormalizado = novosDados.email.toLowerCase().trim();
    var emailJaExiste = usuarios.some(function(usuarioDaLista) {
      return usuarioDaLista.id !== id && usuarioDaLista.email.toLowerCase().trim() === emailNormalizado;
    });
    
    if (emailJaExiste) {
      return null;
    }
    
    novosDados.email = emailNormalizado;
  }
  
  usuarios[indiceUsuario] = Object.assign(usuarios[indiceUsuario], novosDados, {
    id: id,
    atualizadoEm: new Date().toISOString()
  });
  
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
  
  return usuarios[indiceUsuario];
}
