import * as C from './styles';
import {
    hadleNumber,
    handleCVV,
    handleValidade,
} from '../../../helpers/cardFormat';
import React from 'react';

interface InputTypes {
    name: 'numero' | 'nome' | 'validade' | 'cvv' | 'parcela',
    mask?: string,
    value: string | number,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    type?: string,
    placeholder: string
};

const formatValue = (e: React.FormEvent<HTMLInputElement>, inputName: string, inputValue: string) => {
    switch (inputName) {
        case 'numero':
            return hadleNumber(e, inputValue)
        case 'nome':
            return inputValue.replace(/[0-9]/g, '');
        case 'validade':
            return handleValidade(e);
        case 'cvv':
            return handleCVV(e);
        case 'parcelas':
            return inputValue.replace(/[0-9]/g, '');
        default:
            return inputValue

    }
}

const Input = ({ name, value, onChange, type, placeholder }: InputTypes) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange({
            ...e,
            currentTarget: {
                ...e.currentTarget,
                name,
                value: formatValue(
                    e,
                    e.currentTarget.name,
                    e.currentTarget.value
                )
            }
        });
    }

    return (


        <C.Input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
}

export default Input;