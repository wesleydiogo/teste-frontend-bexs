import * as C from './styles';
import InputMask from 'react-input-mask';

interface InputTypes {
    name: string,
    mask: string,
    value: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    type?: string,
    placeholder: string
}

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '');
const onlyText = (str: string) => str.replace(/[0-9]/g, '');

const Input = ({ name, mask, value, onChange, type, placeholder }: InputTypes) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange({
            ...e,
            currentTarget: {
                ...e.currentTarget,
                name,
                value: onlyNumbers(e.currentTarget.value)
            }
        });
    }

    const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 10;
        let value = e.currentTarget.value;
        value = value.replace(/[^0-9]/g, '');
        value = value.replace(/^(\d{4})(\d)/, ' ')
        e.currentTarget.value = value;
    }

    return (
        // <InputMask className='card__input'
        //     name={name}
        //     mask={mask}
        //     value={value}
        //     onChange={handleChange}
        //     placeholder={placeholder}
        // />


        <C.Input
            // onKeyUp={handleKeyUp}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
}

export default Input;