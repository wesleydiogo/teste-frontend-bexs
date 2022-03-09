import { useState } from 'react';
import { Button, CreditCard, Input } from '../../components';
import * as C from './styles';


const AddCard = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardExpireDate, setCardExpireDate] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardInstallments, setCardInstallments] = useState<number>();


    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log("Clicou");

    }

    return (
        <C.Container>
            <C.Sidebar>
                <div>
                    Alterar forma de pagamento
                </div>
                <CreditCard />
            </C.Sidebar>
            <C.Content>
                {/* STEPS COMPONENT */}
                <C.Form onSubmit={handleSubmit}>
                    <Input
                        value={cardNumber}
                        onChange={e => setCardNumber(e.target.value)}
                        placeholder='Número do cartão'
                    />
                    <Input
                        value={cardName}
                        onChange={e => setCardName(e.target.value)}
                        placeholder='Nome (igual ao cartão)'
                    />
                    <div className='card__expireData__CVV'>
                        <Input
                            value={cardExpireDate}
                            onChange={e => setCardExpireDate(e.target.value)}
                            placeholder='Validade'
                        />
                        <Input
                            value={cardCVV}
                            onChange={e => setCardCVV(e.target.value)}
                            placeholder='CVV'
                        />
                    </div>
                    <Input
                        value={cardInstallments}
                        onChange={e => setCardInstallments(e.target.value)}
                        placeholder='Número de parcelas'
                    />
                    <Button type="submit">
                        CONTINUAR
                    </Button>
                </C.Form>
            </C.Content>
        </C.Container>
    );
};
export default AddCard;