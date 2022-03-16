import React, { useState } from 'react';
import { Button, Content, CreditCard, Form, Header, Input, Select } from '../../components';
import { CardIcon, ChevronIcon } from '../../assets/svg';
import { CardType } from '../../types/card';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/addCard/action';

const AddCard = () => {
    const [creditCard, setCreditCard] = useState<CardType>({
        numero: '',
        flag: '',
        nome: '',
        validade: '',
        cvv: '',
        parcelas: 0,
    });
    const [cardFlipped, setCardFlipped] = useState<boolean>(false);
    const dispatch = useDispatch();
    const selectCard = useSelector<any>(state => state.card)

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCreditCard({
            ...creditCard,
            [e.currentTarget.name]: e.currentTarget.value
        });
        dispatch(addCard({ [e.currentTarget.name]: e.currentTarget.value }));
    }
    
    console.log(selectCard);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }
    
    return (
        <>
            <Header>
                <div className='card__changePay'>
                    <div>
                        <ChevronIcon />
                    </div>
                    <div>
                        Alterar forma de pagamento
                    </div>
                </div>
                <div className='card__title'>
                    <div>
                        <CardIcon />
                    </div>
                    <p>Adicione um novo cartão de crédito</p>
                </div>
                <CreditCard cardFlipped={cardFlipped} />
            </Header>
            <Content>
                {/* STEPS COMPONENT */}
                <Form onSubmit={handleSubmit}>
                    <Input
                        name='numero'
                        value={creditCard.numero}
                        onChange={(handleChange)}
                        placeholder='Número do cartão'
                    />
                    <Input
                        name='nome'
                        value={creditCard.nome}
                        onChange={handleChange}
                        placeholder='Nome (igual ao cartão)'
                    />
                    <div className='card__expireData__CVV'>
                        <Input
                            name='validade'
                            value={creditCard.validade}
                            onChange={handleChange}
                            placeholder='Validade'
                        />
                        <Input
                            name='cvv'
                            value={creditCard.cvv}
                            onChange={handleChange}
                            onFocus={() => { setCardFlipped(true) }}
                            onBlur={() => { setCardFlipped(false) }}
                            placeholder='CVV'
                        />
                    </div>
                    {/* Refatorar em breve ↓ */}
                    <Select placeholder=''>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Select>
                    <Button type="submit">
                        CONTINUAR
                    </Button>
                </Form>
            </Content>
        </>
    );
};
export default AddCard;