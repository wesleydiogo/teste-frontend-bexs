import React, { useState } from 'react';
import { Button, CreditCard, Input } from '../../components';
import * as C from './styles';

import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/addCard/action.js';

interface Card {
    number: string,
    name: string,
    dateExpire: string,
    cvv: string,
    parc: number,
};

const AddCard = () => {
    const [creditCard, setCreditCard] = useState<Card>({} as Card);
    const dispatch = useDispatch();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(addCard({ ...creditCard, [e.currentTarget.name]: e.currentTarget.name }));

        setCreditCard({
            ...creditCard,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

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
                        name='number'
                        mask='9999 9999 9999 9999'
                        value={creditCard.number}
                        onChange={handleChange}
                        placeholder='Número do cartão'

                        type='text'
                    />
                    {/* <Input
                        type='text'
                        name='name'
                        value={creditCard.name}
                        onChange={handleChange}
                        placeholder='Nome (igual ao cartão)'
                    />
                    <div className='card__expireData__CVV'>
                        <Input
                            type='text'
                            name='dateExpire'
                            value={creditCard.dateExpire}
                            onChange={handleChange}
                            placeholder='Validade'
                        />
                        <Input
                            type='text'
                            name='cvv'
                            value={creditCard.cvv}
                            onChange={handleChange}
                            placeholder='CVV'
                        />
                    </div>
                    <Input
                        value={creditCard.parc}
                        name='parc'
                        onChange={handleChange}
                        placeholder='Número de parcelas'
                    /> */}
                    <Button type="submit">
                        CONTINUAR
                    </Button>
                </C.Form>
            </C.Content>
        </C.Container>
    );
};
export default AddCard;