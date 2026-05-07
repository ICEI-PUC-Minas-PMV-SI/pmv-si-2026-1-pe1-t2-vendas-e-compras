var estaEmModoRegistro = false;

document.addEventListener('DOMContentLoaded', function() {
  var formulario = document.getElementById('formulario');
  var botaoRegistrar = document.querySelector('button[type="button"]');
  var containerEmail = document.getElementById('email-container');
  
  verificarLogin();
  
  if (botaoRegistrar) {
    botaoRegistrar.addEventListener('click', function(e) {
      e.preventDefault();
      alternarModoRegistro();
    });
  }
  
  if (formulario) {
    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (estaEmModoRegistro) {
        realizarRegistro();
      } else {
        realizarLogin();
      }
    });
  }
});

function verificarLogin() {
  var usuarioLogado = localStorage.getItem('swapstore_usuario_logado');
  if (usuarioLogado) {
    window.location.href = '../index.html';
  }
}

function alternarModoRegistro() {
  estaEmModoRegistro = !estaEmModoRegistro;
  
  var inputUsuario = document.getElementById('usuarioL');
  var inputSenha = document.getElementById('senhaL');
  var containerEmail = document.getElementById('email-container');
  var botaoLogin = document.querySelector('button[type="submit"]');
  var botaoRegistrar = document.querySelector('button[type="button"]');
  
  if (estaEmModoRegistro) {
    if (containerEmail) {
      containerEmail.style.display = 'block';
    }
    botaoLogin.textContent = 'Registrar';
    botaoRegistrar.textContent = 'Voltar';
  } else {
    if (containerEmail) {
      containerEmail.style.display = 'none';
    }
    botaoLogin.textContent = 'Login';
    botaoRegistrar.textContent = 'Registrar-se';
    limparMensagens();
  }
  
  limparCampos();
  limparMensagens();
}

function realizarRegistro() {
  var usuario = document.getElementById('usuarioL').value.trim();
  var senha = document.getElementById('senhaL').value.trim();
  var email = document.getElementById('emailL').value.trim();
  
  if (!usuario || !senha || !email) {
    exibirMensagem('Por favor, preencha todos os campos!', 'erro');
    return;
  }
  
  if (!validarEmail(email)) {
    exibirMensagem('Por favor, insira um email válido!', 'erro');
    return;
  }
  
  var usuarioCriado = criarUsuario(usuario, senha, email);
  
  if (usuarioCriado) {
    exibirMensagem('Usuário criado com sucesso! Redirecionando...', 'sucesso');
    
    setTimeout(function() {
      estaEmModoRegistro = false;
      alternarModoRegistro();
      limparCampos();
    }, 2000);
  } else {
    exibirMensagem('Email já cadastrado ou erro ao criar usuário!', 'erro');
  }
}

function realizarLogin() {
  var usuario = document.getElementById('usuarioL').value.trim();
  var senha = document.getElementById('senhaL').value.trim();
  
  if (!usuario || !senha) {
    exibirMensagem('Por favor, preencha todos os campos!', 'erro');
    return;
  }
  
  var usuarioEncontrado = buscaUsuario(usuario, senha);
  
  if (usuarioEncontrado) {
    localStorage.setItem('swapstore_usuario_logado', usuarioEncontrado);
    exibirMensagem('Login realizado com sucesso! Redirecionando...', 'sucesso');
    
    setTimeout(function() {
      window.location.href = '../index.html';
    }, 1500);
  } else {
    exibirMensagem('Usuário ou senha incorretos!', 'erro');
  }
}

function exibirMensagem(mensagem, tipo) {
  var containerMensagem = document.getElementById('mensagem-container');
  
  if (!containerMensagem) {
    containerMensagem = document.createElement('div');
    containerMensagem.id = 'mensagem-container';
    var formulario = document.getElementById('formulario');
    formulario.parentNode.insertBefore(containerMensagem, formulario);
  }
  
  containerMensagem.textContent = mensagem;
  containerMensagem.className = 'mensagem ' + tipo;
  containerMensagem.style.display = 'block';
}

function limparMensagens() {
  var containerMensagem = document.getElementById('mensagem-container');
  if (containerMensagem) {
    containerMensagem.style.display = 'none';
  }
}

function limparCampos() {
  document.getElementById('usuarioL').value = '';
  document.getElementById('senhaL').value = '';
  var emailInput = document.getElementById('emailL');
  if (emailInput) {
    emailInput.value = '';
  }
}

function validarEmail(email) {
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}
