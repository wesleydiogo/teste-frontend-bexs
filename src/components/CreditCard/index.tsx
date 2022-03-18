import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardType } from '../../types/card';
import './styles.css';

interface RootState {
    card: CardType,
};

interface Props {
    cardFlipped: boolean,
}

const CreditCard = ({ cardFlipped }: Props) => {
    const [bandeiraClassName, setBandeiraClassName] = useState<string>("card__bg-default");
    const card = useSelector((state: RootState) => state.card);    
    
    return (
        <div className={`card ${bandeiraClassName} ${!!cardFlipped ? 'is-flipped' : ''}`}>
            <div className="card__front-face">
                <div className='card__numero'>
                    {card.numero}
                </div>

                <div className='card__info__validade'>
                    <div className='card__nome'>
                        {card.nome}
                    </div>
                    <div className='card__validade'>
                        {card.validade}
                    </div>
                </div>
            </div>
            <span className="card__back-face">
                <div>{card.cvv}</div>
            </span>
        </div>
    );
};
export default CreditCard;