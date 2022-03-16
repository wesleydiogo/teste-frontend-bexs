import { useEffect, useState } from 'react';
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
    const [flagClassName, setFlagClassName] = useState<string>("card__bg-default");
    const card = useSelector((state: RootState) => state.card);

    // REFATORAR ESTE CODIGO EM BREVE
    useEffect(() => {
        if (card.flag) {
            setFlagClassName(`card__bg-${card.flag}`);
        } else {
            return setFlagClassName("card__bg-default");
        }
    }, [card.flag])

    return (
        <div className={`card ${flagClassName} ${!!cardFlipped ? 'is-flipped' : ''}`}>
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