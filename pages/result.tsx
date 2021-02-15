import Layout from '@/components/Layout'
import Success from '@/components/Success'
import {fetchGetJSON} from '@/utils/api-helpers'
import {NextPage} from 'next'
import {useRouter} from 'next/router'
import useSWR from 'swr'

const ResultPage: NextPage = () => {
  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const {data, error} = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  if (error)
    return (
      <Layout>
        <p className="text-red-700">
          Oh no! Something went wrong.{' '}
          <a className="underline" href="/">
            Please try again.
          </a>
        </p>
      </Layout>
    )

  return (
    <Layout>
      <section className="py-16 space-y-4 w-80">
        {data?.payment_intent?.status === 'succeeded' && <Success {...data} />}
      </section>
    </Layout>
  )
}

export default ResultPage
