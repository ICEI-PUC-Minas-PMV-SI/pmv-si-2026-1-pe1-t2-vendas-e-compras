document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const usuario = document.getElementById('usuarioL').value;
            const senha = document.getElementById('senhaL').value;

            const lista = JSON.parse(localStorage.getItem('swapstore_usuarios')) || [];
            const usuarioLogado = lista.find(u => u.usuario === usuario && u.senha === senha);

            if (usuarioLogado) {
                localStorage.setItem('logado', usuario);
                alert('Login bem-sucedido.');
                window.location.href = 'index.html';
            } else {
                alert('Usuário ou senha inválidos.');
            }
        });
    }
});