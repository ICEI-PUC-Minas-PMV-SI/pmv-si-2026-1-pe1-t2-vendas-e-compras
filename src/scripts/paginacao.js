function inicializarPaginacaoPaginas() {
  var botaoMenu = document.getElementById('botaoMenu');
  var navegacaoPrincipal = document.getElementById('navegacaoPrincipal');
  var linksNavegacao = document.querySelectorAll('.nav-link');
  var linkPerfil = document.getElementById('linkPerfil');
  var paginaAtual = document.body.getAttribute('data-pagina');

  if (botaoMenu && navegacaoPrincipal) {
    botaoMenu.addEventListener('click', function () {
      var menuEstaAberto = navegacaoPrincipal.classList.toggle('is-open');
      botaoMenu.setAttribute('aria-expanded', String(menuEstaAberto));
    });
  }

  linksNavegacao.forEach(function (linkNavegacao) {
    var paginaDoLink = linkNavegacao.getAttribute('data-pagina-link');
    linkNavegacao.classList.toggle('is-active', paginaDoLink === paginaAtual);

    linkNavegacao.addEventListener('click', function () {
      if (navegacaoPrincipal && navegacaoPrincipal.classList.contains('is-open')) {
        navegacaoPrincipal.classList.remove('is-open');
        if (botaoMenu) {
          botaoMenu.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  if (linkPerfil) {
    linkPerfil.classList.toggle('is-active', paginaAtual === 'perfil');
  }
}
