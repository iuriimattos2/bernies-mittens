import products from '@/data/products.json'
import {formatCurrencyString, useShoppingCart} from 'use-shopping-cart'

export default function Product(): JSX.Element {
  const {addItem, removeItem} = useShoppingCart()

  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.sku} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency
            })}
          </p>
          <button
            className="cart-style-background"
            onClick={() => addItem(product)}
          >
            Add to cart
          </button>
          <button
            className="cart-style-background"
            onClick={() => removeItem(product.sku)}
          >
            Remove
          </button>
        </div>
      ))}
    </section>
  )
}