inicializarPaginacaoPaginas();

document.addEventListener('DOMContentLoaded', function() {
  atualizarNomePerfil();
  aplicarAvatarPerfil();
  inicializarSinhoNotif();
});

function obterNotificacoesAtivas(idUsuario) {
  var historico = JSON.parse(localStorage.getItem('swapstore_historico') || '[]');
  var produtos = JSON.parse(localStorage.getItem('swapstore_produtos') || '[]');
  var avaliacoes = JSON.parse(localStorage.getItem('swapstore_avaliacoes') || '{}');
  var descartadas = JSON.parse(localStorage.getItem('swapstore_notif_descartadas') || '[]');

  var mapaVendedor = {};
  var mapaNome = {};
  produtos.forEach(function(p) {
    mapaVendedor[p.id_produto] = p.id_usuario;
    mapaNome[p.id_produto] = p.nome;
  });

  var notifs = [];

  historico.forEach(function(compra) {
    compra.itens.forEach(function(item) {
      if ((item.id_usuario_vendedor || mapaVendedor[item.id_produto]) === idUsuario) {
        var nid = compra.id_compra + '_' + item.id_produto;
        if (descartadas.indexOf(nid) === -1) {
          notifs.push({ id: nid, tipo: 'venda', nome: item.nome, data: compra.data, quantidade: item.quantidade });
        }
      }
    });
  });

  Object.keys(avaliacoes).forEach(function(idProduto) {
    if (mapaVendedor[idProduto] !== idUsuario) return;
    avaliacoes[idProduto].forEach(function(a) {
      if (a.id_usuario === idUsuario) return;
      var nid = 'avaliacao_' + idProduto + '_' + a.id_usuario + '_' + a.id_compra;
      if (descartadas.indexOf(nid) === -1) {
        notifs.push({ id: nid, tipo: 'avaliacao', nomeProduto: mapaNome[idProduto] || 'produto', avaliador: a.nome, nota: a.nota });
      }
    });
  });

  return notifs;
}

function inicializarSinhoNotif() {
  var idUsuario = localStorage.getItem('swapstore_usuario_logado');
  if (!idUsuario) return;

  var profileBox = document.querySelector('.profile-box');
  if (!profileBox || document.getElementById('btnNotifSino')) return;

  var wrapper = document.createElement('div');
  wrapper.className = 'header-actions';
  profileBox.parentNode.insertBefore(wrapper, profileBox);

  var bellBtn = document.createElement('button');
  bellBtn.id = 'btnNotifSino';
  bellBtn.className = 'btn-notif';
  bellBtn.setAttribute('aria-label', 'Notificações');
  bellBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>' +
      '<path d="M13.73 21a2 2 0 0 1-3.46 0"/>' +
    '</svg>' +
    '<span class="notif-badge" id="badgeVendas" style="display:none"></span>';

  var popover = document.createElement('div');
  popover.id = 'notifPopover';
  popover.className = 'notif-popover';
  popover.setAttribute('aria-hidden', 'true');
  popover.innerHTML =
    '<div class="notif-popover-header">' +
      '<strong>Notificações</strong>' +
      '<button class="btn-notif-limpar-todos" id="btnLimparTodosNotif">Limpar todos</button>' +
    '</div>' +
    '<div class="notif-lista" id="notifLista"></div>';

  wrapper.appendChild(bellBtn);
  wrapper.appendChild(popover);
  wrapper.appendChild(profileBox);

  bellBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = popover.classList.contains('open');
    if (isOpen) {
      popover.classList.remove('open');
      popover.setAttribute('aria-hidden', 'true');
    } else {
      renderizarNotificacoes();
      popover.classList.add('open');
      popover.setAttribute('aria-hidden', 'false');
    }
  });

  popover.addEventListener('click', function(e) { e.stopPropagation(); });

  document.addEventListener('click', function(e) {
    if (!wrapper.contains(e.target)) {
      popover.classList.remove('open');
      popover.setAttribute('aria-hidden', 'true');
    }
  });

  popover.querySelector('#btnLimparTodosNotif').addEventListener('click', function() {
    var notifs = obterNotificacoesAtivas(idUsuario);
    var descartadas = JSON.parse(localStorage.getItem('swapstore_notif_descartadas') || '[]');
    notifs.forEach(function(n) {
      if (descartadas.indexOf(n.id) === -1) descartadas.push(n.id);
    });
    localStorage.setItem('swapstore_notif_descartadas', JSON.stringify(descartadas));
    renderizarNotificacoes();
    atualizarBadgeVendas();
  });

  atualizarBadgeVendas();
}

function renderizarNotificacoes() {
  var idUsuario = localStorage.getItem('swapstore_usuario_logado');
  var lista = document.getElementById('notifLista');
  if (!lista || !idUsuario) return;

  var notifs = obterNotificacoesAtivas(idUsuario);
  lista.innerHTML = '';

  if (!notifs.length) {
    lista.innerHTML = '<p class="notif-vazia">Nenhuma notificação</p>';
    return;
  }

  notifs.slice().reverse().forEach(function(n) {
    var el = document.createElement('div');
    el.className = 'notif-item';

    var texto;
    if (n.tipo === 'venda') {
      var dataStr = new Date(n.data).toLocaleDateString('pt-BR');
      texto = 'Compra de <strong>' + n.nome + '</strong> × ' + n.quantidade + ' realizada em ' + dataStr;
    } else {
      var estrelas = '';
      for (var i = 0; i < n.nota; i++) estrelas += '★';
      texto = '<strong>' + n.avaliador + '</strong> avaliou <strong>' + n.nomeProduto + '</strong> com ' + '<span class="notif-estrelas">' + estrelas + '</span>';
    }

    el.innerHTML =
      '<span class="notif-texto">' + texto + '</span>' +
      '<button class="notif-item-x" data-nid="' + n.id + '" aria-label="Descartar">×</button>';
    lista.appendChild(el);
  });

  lista.querySelectorAll('.notif-item-x').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var nid = this.getAttribute('data-nid');
      var desc = JSON.parse(localStorage.getItem('swapstore_notif_descartadas') || '[]');
      if (desc.indexOf(nid) === -1) desc.push(nid);
      localStorage.setItem('swapstore_notif_descartadas', JSON.stringify(desc));
      renderizarNotificacoes();
      atualizarBadgeVendas();
    });
  });
}

function atualizarBadgeVendas() {
  var idUsuario = localStorage.getItem('swapstore_usuario_logado');
  var badge = document.getElementById('badgeVendas');
  if (!badge || !idUsuario) return;

  var count = obterNotificacoesAtivas(idUsuario).length;

  if (count > 0) {
    badge.textContent = count > 9 ? '9+' : String(count);
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function atualizarNomePerfil() {
  var idUsuarioLogado = localStorage.getItem('swapstore_usuario_logado');
  var nomePerfil = document.querySelector('.profile-name');
  if (!nomePerfil) return;
  if (!idUsuarioLogado) { nomePerfil.textContent = 'Name'; return; }
  var usuarios = JSON.parse(localStorage.getItem('swapstore_usuarios') || '[]');
  var encontrado = usuarios.find(function(u) { return u.id === idUsuarioLogado; });
  nomePerfil.textContent = encontrado ? encontrado.usuario : 'Name';
}

function aplicarAvatarPerfil() {
  var idUsuarioLogado = localStorage.getItem('swapstore_usuario_logado');
  var avatarElem = document.querySelector('.profile-avatar');
  if (!avatarElem) return;
  if (!idUsuarioLogado) { avatarElem.style.backgroundImage = ''; return; }
  var usuarios = JSON.parse(localStorage.getItem('swapstore_usuarios') || '[]');
  var encontrado = usuarios.find(function(u) { return u.id === idUsuarioLogado; });
  if (encontrado && encontrado.avatar) {
    var base = window.location.pathname.indexOf('/pages/') !== -1 ? '../assets/images/' : 'assets/images/';
    avatarElem.style.backgroundImage = 'url("' + base + encontrado.avatar + '")';
    avatarElem.style.backgroundSize = 'cover';
    avatarElem.style.backgroundPosition = 'center';
  } else {
    avatarElem.style.backgroundImage = '';
  }
}
