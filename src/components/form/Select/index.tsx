import * as C from './styles';

interface SelectTypes {
    children: React.ReactNode,
    placeholder: string,
};

const Select = ({ children, placeholder }: SelectTypes) => {


    return (

        <C.Select
            placeholder={placeholder}
        >
            {children}
        </C.Select>
    );
}

export default Select;