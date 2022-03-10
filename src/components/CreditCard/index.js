import { useSelector } from 'react-redux';
import * as C from './styles';


const CreditCard = () => {
    const getCardData = useSelector(state => state.cardDataCurrent);
    
    return (
        <C.Container>
            <div className='card__number'>
                {getCardData.number}
            </div>

            <div className='card__info__date'>
                <div className='card__name'>
                    {getCardData.name}
                </div>
                <div className='card__date'>
                    {getCardData.dateExpire}
                </div>
            </div>
        </C.Container>
    );
};
export default CreditCard;