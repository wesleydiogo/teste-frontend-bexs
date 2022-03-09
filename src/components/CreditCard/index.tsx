import * as C from './styles';


const CreditCard: React.FC = ({ children }) => {
    return (
        <C.Container>
            <C.CardNumber>
                ****   ****   ****   ****
            </C.CardNumber>

            <C.CardName>
                <div>
                    NOME DO TITULAR
                </div>
                <div>
                    00/00
                </div>
            </C.CardName>
        </C.Container>
    );
};
export default CreditCard;