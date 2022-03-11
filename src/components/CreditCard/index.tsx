import { useSelector } from 'react-redux';
import { CardType } from '../../types/card';
import './styles.css';

interface RootState {
    card: CardType,
};

const CreditCard: React.FC = () => {
    const selectCard = useSelector((state: RootState) => state.card);

    return (
        <div className='card'>
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
    );
};
export default CreditCard;