import './styles.css';

interface Props {
    children: any,
};

const Container = ({ children }: Props) => {
    return (
        <main>
            {children}
        </main>
    );
}
export default Container;