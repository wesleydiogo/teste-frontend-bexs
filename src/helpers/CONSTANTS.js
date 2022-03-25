export const BANDEIRAS = [{
        marca: 'Elo',
        tamanho: 16,
        cvvLength: 3,
        regexNumberPattern: /^(40117[8-9]|431274|438935|451416|457393|45763[1-2]|506(699|7[0-6][0-9]|77[0-8])|509\d{3}|504175|627780|636297|636368|65003[1-3]|6500(3[5-9]|4[0-9]|5[0-1])|6504(0[5-9]|[1-3][0-9])|650(4[8-9][0-9]|5[0-2][0-9]|53[0-8])|6505(4[1-9]|[5-8][0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|[6-7][0-9])|6550([0-1][0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
        regexNumberFormat: ''
    },
    {
        marca: 'Hipercard',
        tamanho: 19,
        cvvLength: 3,
        regexNumberPattern: /^606282|^3841(?:[0|4|6]{1})0/,
        regexNumberFormat: ''
    },
    {
        marca: 'DinersClub',
        tamanho: 16,
        cvvLength: 3,
        regexNumberPattern: /^3(0[0-5]|[68]\d)\d{11}$/,
        regexNumberFormat: ''
    },
    {
        marca: 'Amex',
        tamanho: 19,
        cvvLength: 4,
        regexNumberPattern: /^3[47][0-9]{13}$/,
        regexNumberFormat: "/^3[47]\d{0,13}$/, $1 $2"
    },
    { // COMEÇA COM 5
        marca: 'Mastercard',
        tamanho: 16,
        cvvLength: 3,
        regexNumberPattern: /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        regexNumberFormat: ''
    },
    { // COMEÇA COM 4
        marca: 'Visa',
        tamanho: 16,
        cvvLength: 3,
        regexNumberPattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
        regexNumberFormat: ''
    },
];