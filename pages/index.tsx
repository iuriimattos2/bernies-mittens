import Cart from '@/components/Cart'
import CartSummary from '@/components/CartSummary'
import Layout from '@/components/Layout'
import Product from '@/components/Product'
import {NextPage} from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <Cart>
          <CartSummary />
          <Product />
        </Cart>
      </div>
    </Layout>
  )
}

export default IndexPage
