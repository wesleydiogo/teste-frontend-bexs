import './styles.css';

interface Props {
    children: string,
    type: any,
    onClick?: (e: any) => void,
};


const Button = ({ type, children }: Props) => {
    return (
        <button type={type}>
            {children}
        </button>
    );
}

export default Button;