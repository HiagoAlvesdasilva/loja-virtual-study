export default function ehUmCep(campo) {
    const cep = campo.value.replace(/\D/g, '');
  
    if (cep.length !== 8) {
      campo.setCustomValidity('CEP inválido.');
    } else {
      campo.setCustomValidity('');
    }
  }
  