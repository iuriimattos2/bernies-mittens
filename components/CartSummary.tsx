import product from '@/data/product.json'
import {fetchPostJSON} from '@/utils/api-helpers'
import React, {useEffect, useState} from 'react'
import {formatCurrencyString, useShoppingCart} from 'use-shopping-cart'

export default function CartSummary(): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [cartEmpty, setCartEmpty] = useState(true)
  const {
    addItem,
    cartCount,
    cartDetails,
    clearCart,
    formattedTotalPrice,
    redirectToCheckout
  } = useShoppingCart()

  useEffect(() => setCartEmpty(!cartCount), [cartCount])

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()
    setLoading(true)

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    )

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    redirectToCheckout({sessionId: response.id})
  }

  return (
    <>
      <div className="flex flex-col items-center space-y-8 h-48 w-64">
        <button onClick={() => addItem(product)}>Add to Cart</button>
        <form className="w-full" onSubmit={handleCheckout}>
          <button
            className="flex justify-center items-center"
            type="submit"
            disabled={cartEmpty}
          >
            Checkout {formattedTotalPrice}
            {loading && (
              <svg
                className="loading ml-2"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" />
              </svg>
            )}
          </button>
        </form>
        {!cartEmpty && (
          <div className="flex justify-between">
            <p className="text-gray-400 text-base">
              {cartCount} {product.name} x{' '}
              {formatCurrencyString({
                value: product.price,
                currency: product.currency
              })}
            </p>
            <button className="bg-transparent w-5 p-1" onClick={clearCart}>
              <span className="sr-only">Click to clear cart</span>
              <svg
                className="fill-current text-gray-400"
                height="15"
                viewBox="-40 0 427 427.001"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Click to clear cart</title>
                <path d="M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0M114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0" />
                <path d="M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0078.796 427H268a49.233 49.233 0 0035.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 00-11.539-28.031A39.288 39.288 0 00217.797 0H129a39.288 39.288 0 00-28.063 11.469A39.289 39.289 0 0089.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 015.676-13.895A19.26 19.26 0 01129 20h88.797a19.26 19.26 0 0113.926 5.605 19.244 19.244 0 015.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0" />
                <path d="M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
