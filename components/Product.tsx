import product from '@/data/product.json'
import Image from 'next/image'
import {formatCurrencyString} from 'use-shopping-cart'

export default function Product(): JSX.Element {
  return (
    <section className="text-center space-y-2 max-w-lg">
      <h2 className="text-gray-400 text-3xl">{product.name}</h2>
      <p className="text-gray-500 text-3xl">
        {formatCurrencyString({
          value: product.price,
          currency: product.currency
        })}
      </p>
      <div>
        <Image
          alt={product.name}
          height="777"
          layout="responsive"
          src={`/${product.image}`}
          width="720"
        />
      </div>
      <p className="text-gray-400 text-md p-1">{product.description}</p>
    </section>
  )
}
