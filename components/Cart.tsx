import * as config from '@/config/index'
import getStripe from '@/utils/get-stripejs'
import React, {ReactNode} from 'react'
import {CartProvider} from 'use-shopping-cart'

export default function Cart({children}: {children: ReactNode}): JSX.Element {
  return (
    <CartProvider
      mode="checkout-session"
      stripe={getStripe()}
      currency={config.CURRENCY}
    >
      <>{children}</>
    </CartProvider>
  )
}
