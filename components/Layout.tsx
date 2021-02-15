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
      <main className="flex flex-col-reverse lg:flex-row justify-center items-center lg:h-screen lg:w-screen">
        <div className="flex flex-col p-16 space-y-8 items-center bg-gray-200 shadow-inner lg:h-screen w-full lg:w-1/2 ">
          <Header />
          <Product />
          <Footer />
        </div>
        <div className="flex flex-col justify-start items-center pb-16 lg:pb-0 w-full lg:w-1/2">
          {children}
        </div>
      </main>
    </>
  )
}
