import * as C from './styles';

interface Props {
    children: string,
    type: any,
    onClick?: (e: any) => void,
};


const Button = ({ type, children }: Props) => {
    return (
        <C.Button type={type} > {children}</C.Button>
    );
}

export default Button;