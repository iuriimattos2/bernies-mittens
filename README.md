# 🧤 Bernie's Mittens 🧤 <!-- omit in toc -->

https://bernsmittens.com/

---

## Table of Contents <!-- omit in toc -->
- [Introduction 🎓](#introduction-)
- [Requirements 📝](#requirements-)
- [Development 💻](#development-)
  - [Install](#install)
  - [ENV Vars](#env-vars)
  - [Add Product](#add-product)
  - [Kick Off Dev Server](#kick-off-dev-server)
- [Deploy on Vercel 🚀](#deploy-on-vercel-)
  - [Setup Project](#setup-project)
  - [Setup ENV Vars](#setup-env-vars)
  - [Automatic Deployments](#automatic-deployments)
- [Contributing :octocat:](#contributing-octocat)

## Introduction 🎓

This is a full-stack TypeScript app using:

- Frontend:
  - Next.js and [SWR](https://github.com/vercel/swr)
  - [react-stripe-js](https://github.com/stripe/react-stripe-js) for [Checkout](https://stripe.com/checkout) and [Elements](https://stripe.com/elements)
- Backend
  - Next.js [API routes](https://nextjs.org/docs/api-routes/introduction)
  - [stripe-node with TypeScript](https://github.com/stripe/stripe-node#usage-with-typescript)

Based on the following:
- https://dev.to/thorwebdev/type-safe-payments-with-next-js-typescript-and-stripe-4jo7
- https://github.com/vercel/next.js/tree/master/examples/with-stripe-typescript

## Requirements 📝

- A [Stripe](https://stripe.com) account with at least one product
- A hosting account on [Vercel](https://vercel.com)

---

## Development 💻

### Install

```bash
npx create-next-app bernies-mittens --example https://github.com/gregrickaby/bernies-mittens
```

### ENV Vars

First copy the sample ENV file:

```bash
cp .env.sample .env
```

Now open `.env` and add your Stripe API keys (which can be found in your [Stripe Dashboard](https://dashboard.stripe.com/apikeys)).

### Add Product

Open `data/product.json` and update the content to match the product in your [Stripe Dashboard](https://dashboard.stripe.com/products).

Open `config/index.ts` and update the content to match the product in your Stripe Dashboard.

### Kick Off Dev Server

```bash
npm run dev
```
---

## Deploy on Vercel 🚀

### Setup Project
Vercel makes it easy to connect your Github repo and import your project.

### Setup ENV Vars

During the initial project import, you can add the ENV vars from your local `.env`.

### Automatic Deployments

When you push a commit to Github, Vercel will automatically build and deploy.

[Learn more](https://vercel.com/docs)

---

## Contributing :octocat:

Contributions via issues and pull requests are welcome! Stay safe! 🍻

---
