import ehUmCpf from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector('[data-formulario]');

const tipoDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
];

const mensagens = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    tooShort: "Por favor, preencha um nome válido."
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "Digite os 11 números do seu CPF."
  },
  telefone: {
    valueMissing: "O campo de telefone não pode estar vazio.",
    patternMismatch: "Por favor, insira um telefone válido."
  },
  cep: {
    valueMissing: "O campo de CEP não pode estar vazio.",
    patternMismatch: "Por favor, insira um CEP válido."
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido."
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar."
  },
  termos: {
    valueMissing: "Você deve aceitar nossos termos antes de continuar."
  }
};

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificaCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity('');

  if (campo.name === "cpf" && campo.value.length >= 11) {
    ehUmCpf(campo);
  }

  if (campo.name === "aniversario" && campo.value !== "") {
    ehMaiorDeIdade(campo);
  }

  tipoDeErro.forEach(erro => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
    }
  });

  const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
  const validadorDeInput = campo.checkValidity();

 if(!validadorDeInput){
        mensagemErro.textContent = mensagem;
    }else{
        mensagemErro.textContent = "";
    }
}
