import React from 'react'

export const Header = () => {
  return (
    <>
        <header>
            <div className='logo__container'>
                <img className='logo' src='images/retrypay_logo.png' alt='Retry Pay Logo'></img>
            </div>
            <div>
                <h3>Detalles <strong>de la compra</strong></h3>
            </div>
            <div className='profile-data-container'>
                <h4>Tus datos de usuario</h4>
                <span>Captura tus datos para realizar la transacción</span>
                <form className='profile-data__form'>
                    <fieldset className='profile-data__form-fields'>
                        <input type="text" name="name" value="Nombre" className='profile-data__input' />
                        <input type="email" name="email" value="Email" className='profile-data__input' />
                        <input type="text" name="phone" value="Teléfono" className='profile-data__input' />
                    </fieldset>
                    <fieldset className='profile-data__form-fields'>
                        <legend className='profile-data__address'>Dirección</legend>
                        <div>
                            <input type="text" name='CP' value="C.P." />
                            <select name="estado" id="estado-select">
                                <option value="">Estado</option>
                                <option value="example-1">Example 1</option>
                                <option value="example-2">Example 2</option>
                            </select>
                            <select name="pais" id="pais-select">
                                <option value="">País</option>
                                <option value="example-3">Example 3</option>
                                <option value="example-4">Example 4</option>
                            </select>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className='summary-container'>
                <div className='summary-content'>
                    <strong className='summary__total'>3</strong>
                    <span>Productos</span>
                </div>
                <div className='summary-content'>
                    <span>Monto a pagar</span>
                    <div className='summary__total-price'>$1,638.00</div>
                </div>
            </div>
        </header>
    </>
  )
}
