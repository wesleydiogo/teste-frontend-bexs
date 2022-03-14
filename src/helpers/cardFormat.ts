import { BANDEIRAS } from "./CONSTANTS";

export const handleNumber = (e: React.FormEvent<HTMLInputElement>) => {
  // remove all non digit characters
  var value: string = e.currentTarget.value.replace(/\D/g, '');
  var formattedValue;
  var maxLength;

  // BANDEIRAS.forEach((bandeira, index) => {
  //   console.log(`${index}: ${bandeira}`);
  // })
  
  BANDEIRAS.forEach((bandeira) => {
    if (value.match(bandeira.regexNumberPattern)) {
      console.log(`A bandeira do cartão é ${bandeira.bandeira}.`);
      
      e.currentTarget.maxLength = bandeira.maxLength;
      return formattedValue = value.replace(bandeira.regexNumberFormat, '$1 $2 ');
    } else {
      e.currentTarget.maxLength = 19;
      
      return formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    }
  })

  // if (value.match(BANDEIRAS.visa)) {
  //   console.log("VISAS");
  //   formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
  //   maxLength = 16
  // } else if (value.match(BANDEIRAS.elo)) {
  //   console.log("ELO");
  // } else if (value.match(BANDEIRAS.americanExpress)) { // american express, 15 digitos
  //   console.log("AMERICAN EXPRESS");
  //   formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
  //   maxLength = 17;
  // } else if (value.match(BANDEIRAS.dinersClub)) { // diner's club, 14 digitos
  //   console.log("DINER'S CLUB");
  //   formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
  //   maxLength = 16;
  // } else if (value.match(/^\d{0,16}$/)) { // regular cc number, 16 digitos
  //   // console.log("DINER'S CLUB");
  //   formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
  //   maxLength = 19;
  // }
  return formattedValue;
}
export const handleName = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 20;
  let value = e.currentTarget.value.replace(/[^a-záàâãéèêíïóôõöúçñ ]+$/i, '');

  return value;
}
export const handleValidade = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 5;
  let value: any = e.currentTarget.value;
  return value = value.replace(
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
export const handleCVV = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 3;
  let value: any = e.currentTarget.value;
  return value = value.replace(/^\D/g, '');
}