export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value);
  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity("O usuário não é maior de idade");
  }
}

function validaIdade(data) {
  const hoje = new Date();
  const maioridade = new Date(data.getFullYear() + 18, data.getMonth(), data.getDate());
  return hoje >= maioridade;
}
