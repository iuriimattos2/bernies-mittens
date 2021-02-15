import * as config from '@/config/index'
import getStripe from '@/utils/get-stripejs'
import {AppProps} from 'next/app'
import React from 'react'
import 'tailwindcss/tailwind.css'
import 'styles/global.css'
import {CartProvider} from 'use-shopping-cart'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <CartProvider
      mode="checkout-session"
      stripe={getStripe()}
      currency={config.CURRENCY}
    >
      <Component {...pageProps} />
    </CartProvider>
  )
}
