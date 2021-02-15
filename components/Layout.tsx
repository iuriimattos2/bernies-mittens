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
      <main className="flex flex-col lg:flex-row justify-center items-center h-screen w-screen overflow-auto">
        <div className="flex flex-col p-16 space-y-8 justify-center items-center h-screen lg:w-1/2 bg-gray-200 shadow-inner">
          <Header />
          <Product />
          <Footer />
        </div>
        <div className="flex flex-col space-y-4 justify-center items-center lg:w-1/2">
          {children}
        </div>
      </main>
    </>
  )
}
