import React from 'react'

export const Minicart = () => {
  return (
    <div className='minicart-summary-container'>
        <div className='minicart-summary__copy'>
            <span className='w-75'>Producto</span>
            <span className='w-25'>Monto</span>
        </div>
        <div className='minicart-summary__products'>
            <div className='minicart-product__item'>
                <span className='minicart-product__name w-75'>Facial Cleanser 125ml</span>
                <span className='minicart-product__price w-25'>$546.90</span>
            </div>
            <div className='minicart-product__item'>
                <span className='minicart-product__name w-75'>Facial Cleanser 125ml</span>
                <span className='minicart-product__price w-25'>$546.90</span>
            </div>
            <div className='minicart-product__item'>
                <span className='minicart-product__name w-75'>Facial Cleanser 125ml</span>
                <span className='minicart-product__price w-25'>$546.90</span>
            </div>
        </div>
        <div className='minicart-summary__price-info'>
            <div className='minicart-summary__subtotal flex'>
                <span className='w-75'>Sub - Total amount</span>
                <span className='minicart-summary__subtotal-price w-25'>$1,638.00</span>
            </div>
            <div className='minicart-summary__taxes flex'>
                <span className='w-75'>Impuestos</span>
                <span className='minicart-summary__subtotal-price w-25'>$0.00</span>
            </div>
            <div className='minicart-summary__total flex'>
                <span className='w-75'>Total</span>
                <span className='minicart-summary__total-price w-25'>$1,638.00</span>
            </div>
        </div>
    </div>
  )
}
