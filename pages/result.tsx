import Layout from '@/components/Layout'
import Success from '@/components/Success'
import {fetchGetJSON} from '@/utils/api-helpers'
import {useRouter} from 'next/router'
import useSWR from 'swr'

export default function ResultPage(): JSX.Element {
  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const {data, error} = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  return (
    <Layout>
      <section className="space-y-8 w-80">
        {error ||
          (data?.statusCode === 500 && (
            <p className="text-red-700">
              Oh no! Something went wrong.{' '}
              <a className="underline" href="/">
                Please try again.
              </a>
            </p>
          ))}
        {data?.payment_intent?.status === 'succeeded' && <Success {...data} />}
      </section>
    </Layout>
  )
}
