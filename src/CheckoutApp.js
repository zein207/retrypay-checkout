import React from 'react'
import { Footer } from './components/ui/Footer'
import { Header } from './components/ui/Header'
import { Minicart } from './components/ui/Minicart'
import { Payment } from './components/ui/Payment'

export const CheckoutApp = () => {
  return (
    <>
      <Header />
      <main>
        <Minicart />
        <Payment />
      </main>
      <Footer />
    </>
  )
}
