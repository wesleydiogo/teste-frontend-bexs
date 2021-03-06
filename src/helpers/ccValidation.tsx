import { BANDEIRAS } from "./CONSTANTS";

export const handleNumber = (e: React.FormEvent<HTMLInputElement>, setCard: (bandeira: string, cvvLength: number) => void) => {
  let inputValue: string = e.currentTarget.value.replace(/\D/g, '');
  e.currentTarget.maxLength = 19

  let valid = false; // Validação do algoritmo Luhn
  let identified = false; // Identificação de bandeira

  let sum = 0;
  let shouldDouble = false;

  // Algoritmo de Luhn - Identificando se o número do cartão é válido
  for (let i = inputValue.length - 1; i >= 0; i--) {
    let digit = parseInt(inputValue.charAt(i));

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  valid = (sum % 10) === 0;

  // Padrões RegEx - Verificando se o número corresponde alguma bandeira
  BANDEIRAS.forEach((bandeira) => {
    let regex = bandeira.regexNumberPattern;

    if (regex.test(inputValue)) {
      setCard(bandeira.marca, bandeira.cvvLength);

      identified = true;

      valid && identified && console.log(`Cartão ${bandeira.marca} válido.`);
      !valid && identified && console.log(`Cartão ${bandeira.marca} inválido.`);
      !valid && !identified && console.log(`Número de cartão inválido.`);
    }
  });

  return inputValue;
}

export const handleName = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 32;
  let inputValue = e.currentTarget.value.replace(/[0-9]|[*]/gi, '');

  return inputValue.toUpperCase();
}
export const handleValidade = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 5;
  let inputValue: any = e.currentTarget.value;
  return inputValue = inputValue.replace(
    /[^0-9]/g, '' // To allow only numbers
  ).replace(
    /^([2-9])$/g, '0$1' // To handle 3 > 03
  ).replace(
    /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
  ).replace(
    /^0{1,}/g, '0' // To handle 00 > 0
  ).replace(
    /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
  );
}
export const handleCVV = (e: React.FormEvent<HTMLInputElement>, cvvLength: number) => {

  e.currentTarget.maxLength = cvvLength;
  let inputValue: any = e.currentTarget.value;
  return inputValue = inputValue.replace(/^\D/g, '');
}