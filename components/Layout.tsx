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
  title = "Crochet Bernie's Mittens Doll - $75.00",
  description = "America's favorite grumpy senator is ready for a busy day running to the post office, attending Joe's inauguration, and saving our democracy in his stylish green jacket, up-cycled mittens, and mask!"
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
