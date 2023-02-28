import React, { useState } from 'react'

export const Payment = () => {

    const [name, setName] = useState('Nombre como aparece en la tarjeta');
    const [cardNumber, setCardNumber] = useState('Número');
    const [expirationDate, setExpirationDate] = useState('MM/AA');
    const [CVVNumber, setCVVNumber] = useState('CVV');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Your information was submitted successfully");
    };

    return (
        <div className='payment-container'>
            <h4 className='payment__title'>Selecciona <strong>tu método de pago</strong></h4>
            <div className='payment__items'>
                <span className='payment__item'>Tarjeta</span>
                <span className='payment__item'>Wallet</span>
                <span className='payment__item'>Establecimientos</span>
            </div>
            <form className='payment-form' onSubmit={handleSubmit}>
                <fieldset className='payment-form__fields'>
                    <label htmlFor="clientname">
                        Nombre de tarjetahabiente
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="clientname"
                            name="clientname"
                            value={ name }
                            className='payment-form__input'
                        />
                    </label>
                </fieldset>
                <fieldset className='payment-form__fields'>
                    <span>Información de tarjeta</span>
                    <input
                        onChange={(e) => setCardNumber(e.target.value)}
                        type="text"
                        id="cardnumber"
                        name="cardnumber"
                        value={ cardNumber }
                        className='payment-form__input'
                    />
                    <input
                        onChange={(e) => setExpirationDate(e.target.value)}
                        type="text"
                        id="expirationdate"
                        name="expirationdate"
                        value={ expirationDate }
                        className='payment-form__input'
                    />
                    <input
                        onChange={(e) => setCVVNumber(e.target.value)}
                        type="text"
                        id="cvvnumber"
                        name="cvvnumber"
                        value={ CVVNumber }
                        className='payment-form__input'
                    />
                </fieldset>
                <label htmlFor="switch">Guardar esta tarjeta</label><input type="checkbox" id="switch" />
                <button className='btn btn-primary' type="submit">Pagar <span>$1,638.00</span></button>
            </form>
        </div>
    )
}
