import {OG_IMAGE, SITE_URL} from '@/config/index'
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

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/${OG_IMAGE}`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={SITE_URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${SITE_URL}/${OG_IMAGE}`} />
    </Head>
  )
}
