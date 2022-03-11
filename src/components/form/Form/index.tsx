import React from 'react';
import './styles.css';

interface InputTypes {
    children: React.ReactNode,
    onSubmit: (e: React.SyntheticEvent) => any
};

const Form = ({ children, onSubmit }: InputTypes) => {

    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
}

export default Form;