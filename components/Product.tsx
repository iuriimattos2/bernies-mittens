import products from '@/data/products.json'
import Image from 'next/image'
import {formatCurrencyString, useShoppingCart} from 'use-shopping-cart'

export default function Product(): JSX.Element {
  const {addItem, removeItem} = useShoppingCart()

  return (
    <section>
      {products.map((product) => (
        <div key={product.sku} className="product">
          <h2 className="text-gray-400 text-base">{product.name}</h2>
          <Image
            alt={product.name}
            height="777"
            layout="responsive"
            src={`/${product.image}`}
            width="720"
          />
          <p className="text-gray-500 text-3xl">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency
            })}
          </p>
          <p className="text-gray-400 text-md">{product.description}</p>

        </div>
      ))}
    </section>
  )
}
