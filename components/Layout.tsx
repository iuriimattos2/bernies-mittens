import {SITE_DESCRIPTION, SITE_NAME} from '@/config/index'
import React, {ReactNode} from 'react'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'

type Props = {
  children: ReactNode
  description?: string
  title?: string
}

export default function Layout({
  children,
  title = SITE_NAME,
  description = SITE_DESCRIPTION
}: Props): JSX.Element {
  return (
    <>
      <Meta title={title} description={description} />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
