import { useState } from 'react';
import * as C from './styles';


const CreditCard: React.FC = () => {
    const [creditCardNumber, setCreditCardNumber] = useState("****   ****   ****   ****");
    const [creditCardName, setCreditCardName] = useState("NOME DO TITULAR");
    const [creditCardDate, setCreditCardDate] = useState("00/00");

    return (
        <C.Container>
            <div className='card__number'>
                {creditCardNumber}
            </div>

            <div className='card__info__date'>
                <div className='card__name'>
                    {creditCardName}
                </div>
                <div className='card__date'>
                    {creditCardDate}
                </div>
            </div>
        </C.Container>
    );
};
export default CreditCard;