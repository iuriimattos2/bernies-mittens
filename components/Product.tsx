import product from '@/data/product.json'
import Image from 'next/image'
import Link from 'next/link'
import {formatCurrencyString} from 'use-shopping-cart'

export default function Product(): JSX.Element {
  return (
    <section className="text-center space-y-2 w-96">
      <h2 className="text-gray-400">
        <Link href="/">{product.name}</Link>
      </h2>
      <h3 className="text-gray-500 text-4xl font-semibold">
        {formatCurrencyString({
          value: product.price,
          currency: product.currency
        })}
      </h3>
      <div>
        <Image
          alt={product.name}
          height="777"
          layout="responsive"
          src={`/${product.image}`}
          width="720"
        />
      </div>
      <p className="text-gray-400 text-sm p-1">{product.description}</p>
    </section>
  )
}
