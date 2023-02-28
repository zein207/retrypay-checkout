import React, { useEffect, useState } from 'react'

export const Payment = () => {

    // Handle check button | toggle button
    const [isChecked, setIsChecked] = useState(false);
    const handleOnCheck = () => {
        setIsChecked(!isChecked);
    };

    // Form state
    const [formData, setFormData] = useState({
        clientname: '',
        cardnumber: '',
        expirationdate: '',
        cvvnumber: ''
    });

    // Event handler to update form state
    const handleInputChange = (e) => {
        // update state based on form input
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // console.log(formData);

        // Add error class when input is empty
        if(e.target.value === '') {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    };

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // Effect hook to update button disabled state
    useEffect(() => {
        const { clientname, cardnumber, expirationdate, cvvnumber } = formData;
        const isFormValid = clientname !== '' && cardnumber !== '' && expirationdate !== '' && cvvnumber !== '';
        setIsButtonDisabled(!isFormValid);
    }, [formData]);

    // Submit | click 'pagar' button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Your information was submitted successfully");

        const button = document.querySelector('#sendButton');
        button.innerHTML = "¡Pago exitoso!"
    };


    return (
        <div className='payment-container'>
            <h4 className='payment__title'>Selecciona <strong>tu método de pago</strong></h4>
            <div className='payment__items'>
                <span className='payment__item payment__item--active pointer'>
                    <img src='/images/card-icon.svg' className='hide-m payment__icon'></img>
                    <div className='hide-d'>Tarjeta</div> <div className='hide-m payment__item--cardtext'>Tarjeta de Crédito / Débito</div>
                </span>
                <span className='payment__item pointer'>
                    <img src='/images/wallet-icon.svg' className='hide-m payment__icon'></img>
                    Wallet
                </span>
                <span className='payment__item pointer'>
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
                            onChange={handleInputChange}
                            type="text"
                            // id="clientname"
                            name="clientname"
                            placeholder="Nombre como aparece en la tarjeta"
                            className='payment-form__input'
                            required
                        />
                    </label>
                </fieldset>
                <fieldset className='payment-form__fields payment-form__fields--card'>
                    <div className='payment-form__label'>Información de tarjeta</div>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        // id="cardnumber"
                        name="cardnumber"
                        placeholder="Número"
                        className='payment-form__input payment-form__input--cardnumber w-100'
                        required
                    />
                    <input
                        onChange={handleInputChange}
                        type="text"
                        // id="expirationdate"
                        name="expirationdate"
                        placeholder="MM/AA"
                        className='payment-form__input payment-form__input--expiration-date w-50'
                        required
                    />
                    <input
                        onChange={handleInputChange}
                        type="text"
                        // id="cvvnumber"
                        name="cvvnumber"
                        placeholder="CVV"
                        className='payment-form__input payment-form__input--cvvnumber w-50'
                        required
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
                <button
                    className='btn btn-primary'
                    type="submit"
                    disabled={isButtonDisabled}
                    id="sendButton"
                >
                    Pagar<span>$1,638.00</span>
                </button>
            </form>
        </div>
    )
}
