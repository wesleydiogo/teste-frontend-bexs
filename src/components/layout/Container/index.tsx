import * as C from './styles';

interface Props {
    children: any,
};

const Container = ({ children }: Props) => {
    return (
        <C.Container>
            {children}
        </C.Container>
    );
}
export default Container;