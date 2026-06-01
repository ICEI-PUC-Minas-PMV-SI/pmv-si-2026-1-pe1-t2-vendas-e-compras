function criarUsuario(usuario, senha, email) {
  var CHAVE_USUARIOS = 'swapstore_usuarios';
  
  if (!usuario || !senha || !email) {
    return null;
  }
  
  var usuariosJSON = localStorage.getItem(CHAVE_USUARIOS);
  var usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
  
  var emailNormalizado = email.toLowerCase().trim();
  
  var emailExiste = usuarios.some(function(usuarioDaLista) {
    return usuarioDaLista.email.toLowerCase().trim() === emailNormalizado;
  });
  
  if (emailExiste) {
    return null;
  }
  
  var novoId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
  
  var novoUsuario = {
    id: novoId,
    usuario: usuario,
    senha: senha,
    email: emailNormalizado,
    criadoEm: new Date().toISOString()
  };
  
  usuarios.push(novoUsuario);
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
  
  return novoUsuario;
}
