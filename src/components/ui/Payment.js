import React, { useState } from 'react'

export const Payment = () => {

    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [CVVNumber, setCVVNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Your information was submitted successfully");
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleOnCheck = () => {
      setIsChecked(!isChecked);
    };

    return (
        <div className='payment-container'>
            <h4 className='payment__title'>Selecciona <strong>tu método de pago</strong></h4>
            <div className='payment__items'>
                <span className='payment__item payment__item--active'>
                    <img src='/images/card-icon.svg' className='hide-m payment__icon'></img>
                    <div className='hide-d'>Tarjeta</div> <div className='hide-m payment__item--cardtext'>Tarjeta de Crédito / Débito</div>
                </span>
                <span className='payment__item'>
                    <img src='/images/wallet-icon.svg' className='hide-m payment__icon'></img>
                    Wallet
                </span>
                <span className='payment__item'>
                    <img src='/images/barcode-icon.svg' className='hide-m payment__icon'></img>
                    Establecimientos
                </span>
            </div>
            <form className='payment-form' onSubmit={handleSubmit}>
                <fieldset className='payment-form__fields'>
                    <label htmlFor="clientname">
                        <div className='payment-form__label'>
                            Nombre de tarjetahabiente
                        </div>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="clientname"
                            name="clientname"
                            value={ name }
                            placeholder="Nombre como aparece en la tarjeta"
                            className='payment-form__input'
                        />
                    </label>
                </fieldset>
                <fieldset className='payment-form__fields payment-form__fields--card'>
                    <div className='payment-form__label'>Información de tarjeta</div>
                    <input
                        onChange={(e) => setCardNumber(e.target.value)}
                        type="text"
                        id="cardnumber"
                        name="cardnumber"
                        value={ cardNumber }
                        placeholder="Número"
                        className='payment-form__input payment-form__input--cardnumber w-100'
                    />
                    <input
                        onChange={(e) => setExpirationDate(e.target.value)}
                        type="text"
                        id="expirationdate"
                        name="expirationdate"
                        value={ expirationDate }
                        placeholder="MM/AA"
                        className='payment-form__input payment-form__input--expiration-date w-50'
                    />
                    <input
                        onChange={(e) => setCVVNumber(e.target.value)}
                        type="text"
                        id="cvvnumber"
                        name="cvvnumber"
                        value={ CVVNumber }
                        placeholder="CVV"
                        className='payment-form__input payment-form__input--cvvnumber w-50'
                    />
                </fieldset>
                <div className='toggle-button-container'>
                    <input
                        type="checkbox"
                        id="switch"
                        checked={ isChecked }
                        onChange={ handleOnCheck } />
                    <label htmlFor="switch" className='btn-switch'>Guardar esta tarjeta</label>
                </div>
                <button className='btn btn-primary btn-disabled' type="submit">Pagar <span>$1,638.00</span></button>
            </form>
        </div>
    )
}
