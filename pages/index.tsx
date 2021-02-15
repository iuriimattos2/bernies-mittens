import CartSummary from '@/components/CartSummary'
import Layout from '@/components/Layout'
import {NextPage} from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <CartSummary />
    </Layout>
  )
}

export default IndexPage
