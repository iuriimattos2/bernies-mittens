import Cart from '@/components/Cart'
import CartSummary from '@/components/CartSummary'
import Layout from '@/components/Layout'
import {NextPage} from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Cart>
        <CartSummary />
      </Cart>
    </Layout>
  )
}

export default IndexPage
