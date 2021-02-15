import {SITE_URL} from '@/config/index'

interface Props {
  customer_details: {
    email: string
  }
  shipping: {
    address: {
      line1: string
      line2: string
      city: string
      state: string
      postal_code: string
    }
    name: string
  }
}

export default function Success(data: Props): JSX.Element {
  return (
    <div className="space-y-4 py-4">
      <h2 className="text-purple-400 text-3xl">Payment Successful</h2>
      <p>A receipt has been emailed to {data?.customer_details?.email}.</p>
      <details>
        <summary>
          <strong>Shipping Details</strong>
        </summary>

        <dl className="text-gray-500 font-mono text-left">
          <dt>{data?.shipping?.address?.line1}</dt>
          <dt>{data?.shipping?.address?.line2}</dt>
          <dt>
            {data?.shipping?.address?.city}, {data?.shipping?.address?.state}{' '}
            {data?.shipping?.address?.postal_code}
          </dt>
        </dl>
      </details>
      <p>Since each item is hand made, please allow 2 weeks for shipping.</p>
      <p>
        While you wait, check out even more plushies from{' '}
        <a className="underline" href="https://tararickaby.com">
          Crochet Creations
        </a>
        .
      </p>
      <p>
        Thank you <span className="capitalize">{data?.shipping?.name}</span>!
      </p>
      <div className="space-x-4">
        <a
          target="_blank"
          rel="noreferrer"
          className="share tweet"
          href="https://twitter.com/intent/tweet?text=I+just+bought+a+Bernie%27s+Mittens+Doll+from+Crochet+Creations!"
        >
          Tweet
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          className="share facebook"
          href={`http://www.facebook.com/dialog/send?app_id=123456789&amp;link=${SITE_URL}&amp;redirect_uri=${SITE_URL}`}
        >
          Facebook
        </a>
      </div>
    </div>
  )
}
