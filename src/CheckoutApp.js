import React from 'react'
import { Header } from './components/ui/Header'
import { Minicart } from './components/ui/Minicart'
import { Payment } from './components/ui/Payment'

export const CheckoutApp = () => {
  return (
    <>
      <Header />
      <Minicart />
      <Payment />
    </>
  )
}
