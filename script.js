async function buscaEndereco(Cep) {
      var mensagemErro = document.getElementById('erro')
      mensagemErro.innerHTML = '';
      try {
            var consultaCep = await fetch(`https://viacep.com.br/ws/${Cep}/json/`)
            var consultaCepConvertida = await consultaCep.json();
            if (consultaCepConvertida.erro) {
                  throw Error('CEP não existente!')
            }
            var cidade = document.getElementById('cidade')
            var logradouro = document.getElementById('endereco')
            var estado = document.getElementById('estado')
            var bairro = document.getElementById('bairro')

            cidade.value = consultaCepConvertida.localidade
            logradouro.value = consultaCepConvertida.logradouro
            estado.value = consultaCepConvertida.uf
            bairro.value = consultaCepConvertida.bairro

            return consultaCepConvertida
      } catch (error) {
            mensagemErro.innerHTML = `<p>Cep inválido, tente novamente!</p>`
      }
      
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value))
