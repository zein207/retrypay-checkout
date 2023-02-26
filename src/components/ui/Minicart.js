import React from 'react'

export const Minicart = () => {
  return (
    <div className='minicart-summary-container'>
        <div className='minicart-summary__copy'>
            <span>Producto</span>
            <span>Monto</span>
        </div>
        <div className='minicart-summary__products'>
            <div className='minicart-product__item'>
                <span className='minicart-product__name'>Facial Cleanser 125ml</span>
                <span className='minicart-product__price'>$546.90</span>
            </div>
            <div className='minicart-product__item'>
                <span className='minicart-product__name'>Facial Cleanser 125ml</span>
                <span className='minicart-product__price'>$546.90</span>
            </div>
            <div className='minicart-product__item'>
                <span className='minicart-product__name'>Facial Cleanser 125ml</span>
                <span className='minicart-product__price'>$546.90</span>
            </div>
        </div>
        <div className='minicart-summary__price-info'>
            <div className='minicart-summary__subtotal'>
                <span>Sub - Total amount</span>
                <span className='minicart-summary__subtotal-price'>$1,638.00</span>
            </div>
            <div className='minicart-summary__taxes'>
                <span>Impuestos</span>
                <span className='minicart-summary__subtotal-price'>$0.00</span>
            </div>
            <div className='minicart-summary__total'>
                <span>Total</span>
                <span className='minicart-summary__total-price'>$1,638.00</span>
            </div>
        </div>
    </div>
  )
}
