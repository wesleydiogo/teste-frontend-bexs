export const BANDEIRAS = [{ // COMEÇA COM 4
        bandeira: 'Visa',
        maxLength: 16,
        maxCVV: 3,
        regexNumberPattern: /^4[0-9]{15}$/,
        regexNumberFormat: ''
    },
    { // COMEÇA COM 5
        bandeira: 'Mastercard',
        maxLength: 16,
        maxCVV: 3,
        regexNumberPattern: /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
        regexNumberFormat: ''
    },
    {
        bandeira: 'Elo',
        maxLength: 16,
        maxCVV: 3,
        regexNumberPattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|50(9[0-9][0-9][0-9])|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|05([7-9])|06([0-9])|07([0-9])|08([0-9])|4([0-3][0-9]|8[5-9]|9[0-9])|5([0-9][0-9]|3[0-8])|9([0-6][0-9]|7[0-8])|7([0-2][0-9])|541|700|720|727|901)|65165([2-9])|6516([6-7][0-9])|65500([0-9])|6550([0-5][0-9])|655021|65505([6-7])|6516([8-9][0-9])|65170([0-4]))/,
        regexNumberFormat: ''
    },
    {
        bandeira: 'Hipercard',
        maxLength: 19,
        maxCVV: 3,
        regexNumberPattern: /^606282|^3841(?:[0|4|6]{1})0/,
        regexNumberFormat: ''
    },
    {
        bandeira: 'AmericanExpress',
        maxLength: 19,
        maxCVV: 3,
        regexNumberPattern: /^3[47]\d{0,13}$/,
        regexNumberFormat: "/^3[47]\d{0,13}$/, $1 $2"
    },
    {
        bandeira: 'DinersClub',
        maxLength: 16,
        maxCVV: 3,
        regexNumberPattern: /(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/,
        regexNumberFormat: ''
    },
    {
        bandeira: 'Amex',
        maxLength: 15,
        maxCVV: 4,
        regexNumberPattern: /^3[47][0-9]{13}$/,
        regexNumberFormat: ''
    },
    {
        bandeira: 'Discover',
        maxLength: 16,
        maxCVV: 4,
        regexNumberPattern: /^6(?:011|5[0-9]{2})[0-9]{12}/,
        regexNumberFormat: ''
    },
    {
        bandeira: 'JCB',
        maxLength: 16,
        maxCVV: 3,
        regexNumberPattern: /^(?:2131|1800|35\d{3})\d{11}/,
        regexNumberFormat: ''
    },
    {
        bandeira: 'Aura',
        maxLength: 16,
        maxCVV: 3,
        regexNumberPattern: /^((?!504175))^((?!5067))(^50[0-9])/,
        regexNumberFormat: ''
    },
    // {
    //     bandeira: 'Banese Card',
    //     maxLength: 19,
    //     maxCVV: 3,
    //     regex: /^636117/
    // },
    // {
    //     bandeira: 'Cabal',
    //     maxLength: 19,
    //     maxCVV: 3,
    //     regex: /(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400)/
    // },
    // {
    //     bandeira: 'Fort Brasil',
    //     maxLength: 19,
    //     maxCVV: 3,
    //     regex: /^628167/
    // },
    // {
    //     bandeira: 'GrandCard',
    //     maxLength: 19,
    //     maxCVV: 3,
    //     regex: /^605032/
    // },
    // {
    //     bandeira: 'Personal Card',
    //     maxLength: 19,
    //     maxCVV: 3,
    //     regex: /^636085/
    // },
    // {
    //     bandeira: 'Sorocred',
    //     maxLength: 19,
    //     maxCVV: 3,
    //     regex: /^627892|^636414/
    // },
    // {
    //     bandeira: 'Valecard',
    //     maxLength: 19,
    //     maxCVV: 3,
    //     regex: /^606444|^606458|^606482/
    // },
];