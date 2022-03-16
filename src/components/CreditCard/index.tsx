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
    const selectCard = useSelector((state: RootState) => state.card);

    return (
        <div className={`card card__bg-visa ${!!cardFlipped ? 'is-flipped' : ''}`}>
            <div className="card__front-face">
                <div className='card__numero'>
                    {selectCard.numero}
                </div>

                <div className='card__info__validade'>
                    <div className='card__nome'>
                        {selectCard.nome}
                    </div>
                    <div className='card__validade'>
                        {selectCard.validade}
                    </div>
                </div>
            </div>
            <span className="card__back-face">
                <div>{selectCard.cvv}</div>
            </span>
        </div>
    );
};
export default CreditCard;