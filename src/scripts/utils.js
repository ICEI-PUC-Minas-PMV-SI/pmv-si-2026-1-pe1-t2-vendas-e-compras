function formatarMoedaBR(valorNumerico) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valorNumerico || 0);
}

function aplicarMascaraMoeda(input) {
  if (!input) return;
  input.addEventListener('input', function() {
    var apenasDigitos = input.value.replace(/\D/g, '');
    if (!apenasDigitos) {
      input.value = '';
      return;
    }
    var valor = parseInt(apenasDigitos, 10) / 100;
    input.value = formatarMoedaBR(valor);
  });
}

function lerPrecoComoNumero(valorTexto) {
  var digitos = String(valorTexto || '').replace(/\D/g, '');
  if (!digitos) return 0;
  return parseInt(digitos, 10) / 100;
}
