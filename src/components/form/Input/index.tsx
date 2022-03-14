import * as C from './styles';
import {
    handleNumber,
    handleName,
    handleCVV,
    handleValidade,
} from '../../../helpers/cardFormat';
import React from 'react';

interface InputTypes {
    name: 'numero' | 'nome' | 'validade' | 'cvv' | 'parcela',
    mask?: string,
    value: string | number,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    onFocus?: () => void,
    onBlur?: () => void,
    type?: string,
    placeholder: string
};

const formatValue = (e: React.FormEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
        case 'numero':
            return handleNumber(e);
        case 'nome':
            return handleName(e);
        case 'validade':
            return handleValidade(e);
        case 'cvv':
            return handleCVV(e);
        case 'parcelas':
            return e.currentTarget.name.replace(/[0-9]/g, '');
        default:
            return e.currentTarget.name
    }
}

const Input = ({ name, value, onChange, onFocus, onBlur, type, placeholder }: InputTypes) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange({
            ...e,
            currentTarget: {
                ...e.currentTarget,
                name,
                value: formatValue(e)
            }
        });
    }

    return (
        <C.Input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
        />
    );
}

export default Input;