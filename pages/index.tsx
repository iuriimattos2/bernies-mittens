import CartSummary from '@/components/CartSummary'
import Layout from '@/components/Layout'
import * as config from '@/config/index'
import getStripe from '@/utils/get-stripejs'
import {CartProvider} from 'use-shopping-cart'

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <CartProvider
        mode="checkout-session"
        stripe={getStripe()}
        currency={config.CURRENCY}
      >
        <CartSummary />
      </CartProvider>
    </Layout>
  )
}
