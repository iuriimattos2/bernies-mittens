import Head from 'next/head'

interface Props {
  description?: string
  title?: string
}

export default function Meta({title, description}: Props): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>
  )
}
