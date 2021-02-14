import {SITE_DESCRIPTION, SITE_NAME} from '@/config/index'
import React, {ReactNode} from 'react'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import Product from './Product'

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
      <main className="flex flex-col lg:flex-row justify-center items-center h-screen w-screen">
        <div className="flex flex-col space-y-16 justify-center items-center h-screen lg:w-1/2 bg-gray-200">
          <Header />
          <Product />
          <Footer />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          {children}
        </div>
      </main>
    </>
  )
}
