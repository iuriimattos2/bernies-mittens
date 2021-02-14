import Cart from '@/components/Cart'
import CartSummary from '@/components/CartSummary'
import Layout from '@/components/Layout'
import Products from '@/components/Products'
import {NextPage} from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <Products />
        </Cart>
      </div>
    </Layout>
  )
}

export default IndexPage
