import React, { useState } from 'react'

export const Header = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cp, setCP] = useState('');

    const [selectedEstado, setSelectedEstado] = useState('Estado');
    const [selectedPais, setSelectedPais] = useState('País');

    const handleSelectEstadoChange = (e) => {
      setSelectedEstado(e.target.value);
    }

    const handleSelectPaisChange = (e) => {
        setSelectedPais(e.target.value);
    }

    return (
        <>
            <header className='c-white'>
                <div className='logo__container'>
                    <img className='logo' src='images/retrypay_logo.svg' alt='Retry Pay Logo'></img>
                </div>
                <div className='center-container'>
                    <h3 className='subtitle'>Detalles <strong>de la compra</strong></h3>
                </div>
                <div className='profile-data-container center-container'>
                    <h4>Tus datos de usuario <img src='/images/pencil.svg'></img></h4>
                    <span className='c-tertiary'>Captura tus datos para realizar la transacción</span>
                    <form className='profile-data__form'>
                        <fieldset className='profile-data__form-fields'>
                            <div className='icon icon--user'>
                                <input
                                    type="text"
                                    name="name"
                                    value={ userName } 
                                    placeholder="Nombre"
                                    className='profile-data__input'
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className='icon icon--email'>
                                <input
                                    type="email"
                                    name="email"
                                    value={ email }
                                    placeholder="Email"
                                    className='profile-data__input'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='icon icon--phone'>
                                <input
                                    type="text"
                                    name="phone"
                                    value={ phone }
                                    placeholder="Teléfono"
                                    className='profile-data__input'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </fieldset>
                        <fieldset className='profile-data__form-fields profile-data__form-address'>
                            <div className='icon icon--address'>
                                <legend className='profile-data__address'>Dirección</legend>
                            </div>
                            <div className='address-inputs'>
                                <input
                                    type="text"
                                    name='cp'
                                    value={ cp }
                                    placeholder="C.P."
                                    onChange={(e) => setCP(e.target.value)}
                                />
                                <select name="estado" id="estado-select" value={ selectedEstado } onChange={handleSelectEstadoChange} >
                                    <option value="">Estado</option>
                                    <option value="example-1">Example 1</option>
                                    <option value="example-2">Example 2</option>
                                </select>
                                <select name="pais" id="pais-select" value={ selectedPais } onChange={handleSelectPaisChange}>
                                    <option value="">País</option>
                                    <option value="example-3">Example 3</option>
                                    <option value="example-4">Example 4</option>
                                </select>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className='summary-container center-container'>
                    <div className='summary-content summary-content--number'>
                        <strong className='summary__total'>3</strong>
                        <span>Productos</span>
                    </div>
                    <div className='summary-content summary-content--price'>
                        <span>Monto a pagar</span>
                        <div className='summary__total-price'>$1,638.00</div>
                    </div>
                </div>
            </header>
        </>
    )
}
