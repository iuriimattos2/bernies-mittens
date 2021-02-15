type Props = {
  data?: object
}

export default function Success(data: Props): JSX.Element {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl">Your Order Has Been Placed</h2>
      <p>
        Thank you <span className="capitalize">{data?.shipping?.name}</span>! A
        receipt has been emailed to {data?.customer_details?.email}.
      </p>

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
    </div>
  )
}
