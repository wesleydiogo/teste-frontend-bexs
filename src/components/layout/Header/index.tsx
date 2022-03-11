import './styles.css';

interface Props {
    children: any,
};

const Header = ({ children }: Props) => {
    return (
        <header>
            {children}
        </header>
    );
}
export default Header;