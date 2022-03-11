import './styles.css';

interface Props {
    children: any,
    className?: string
};

const Content = ({ children, className }: Props) => {
    return (
        <article className={className}>
            {children}
        </article>
    );
}
export default Content;