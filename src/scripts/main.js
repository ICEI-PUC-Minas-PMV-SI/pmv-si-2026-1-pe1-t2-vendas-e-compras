inicializarPaginacaoPaginas();

document.addEventListener('DOMContentLoaded', function() {
  atualizarNomePerfil();
  aplicarAvatarPerfil();
});

function atualizarNomePerfil() {
  var idUsuarioLogado = localStorage.getItem('swapstore_usuario_logado');
  var nomePerfil = document.querySelector('.profile-name');

  if (!nomePerfil) {
    return;
  }

  if (!idUsuarioLogado) {
    nomePerfil.textContent = 'Name';
    return;
  }

  var usuariosJSON = localStorage.getItem('swapstore_usuarios');
  var usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
  var usuarioEncontrado = usuarios.find(function(usuarioDaLista) {
    return usuarioDaLista.id === idUsuarioLogado;
  });

  nomePerfil.textContent = usuarioEncontrado ? usuarioEncontrado.usuario : 'Name';
}
function aplicarAvatarPerfil() {
  var idUsuarioLogado = localStorage.getItem('swapstore_usuario_logado');
  var avatarElem = document.querySelector('.profile-avatar');
  if (!avatarElem) return;
  if (!idUsuarioLogado) {
    avatarElem.style.backgroundImage = '';
    return;
  }
  var usuariosJSON = localStorage.getItem('swapstore_usuarios');
  var usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
  var usuarioEncontrado = usuarios.find(function(u) { return u.id === idUsuarioLogado; });
  if (usuarioEncontrado && usuarioEncontrado.avatar) {
    var base = window.location.pathname.indexOf('/pages/') !== -1 ? '../assets/images/' : 'assets/images/';
    avatarElem.style.backgroundImage = 'url("' + base + usuarioEncontrado.avatar + '")';
    avatarElem.style.backgroundSize = 'cover';
    avatarElem.style.backgroundPosition = 'center';
  } else {
    avatarElem.style.backgroundImage = '';
  }
}