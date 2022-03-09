import * as C from './styles';

interface Props {
    value: any,
    onChange: (e: any) => void,
    placeholder: string
};


const Input = ({ value, onChange, placeholder }: Props) => {
    return (
        <C.Input value={value} onChange={onChange} placeholder={placeholder} />
    );
}

export default Input;