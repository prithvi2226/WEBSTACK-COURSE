//PHOTO
<div align="center"><h3>Full-Stack Online Learning Platform</h3><p>Built using Javascript with React.js, MongoDB, Redux and Chakra UI.</p></div>
<div align="center">
<a href="https://store.accretence.com">Homepage</a> 
<span> · </span>
<a href="https://admin.accretence.com">Admin Panel</a>
</div>

## 👋 Introduction

Welcome to the open-source Next.js Online Learning Platform Website with Admin Panel project! This project is built with Javascript(React.Js), Redux, and Chakra UI, providing a powerful and flexible solution for building and managing our website.

## 🥂 Features

-  [x] [**Next.js 13**](https://nextjs.org) App Router and React Server Components.
-  [x] Custom dynamic `Sitemap.xml` generation.
-  [x] Admin dashboard with products, orders, and payments.
-  [x] File uploads using `next-cloudinary`.
-  [x] Authentication using `middleware.ts` and `httpOnly` cookies.
-  [x] Storefront with blog, products, and categories.
-  [x] Database-Stored blogs powered by **MDX** templates.
-  [x] Email verification and invoices using [react-email-tailwind-templates](https://github.com/accretence/react-email-tailwind-templates).
-  [x] [**TailwindCSS**](https://tailwindcss.com/) for utility-first CSS.
-  [x] UI built with [**Chakra**](https://chakra-ui.com/) and stunning UI components.
-  [x] [**Next Metadata API**](https://nextjs.org/docs/api-reference/metadata) for SEO handling.

## 🔐 Authentication

The authentication is handled using JWT tokens stored in cookies and verified inside the `middleware.ts` file. The middleware function takes in the HTTP request, reads the `token` cookie and if the JWT is successfully verified, it sets the `X-USER-ID` header with the userId as the value, otherwise the request is sent back with 401 status.

## 👁‍🗨 Environment variables

Environment variables are stored in `.env` files. By default the `.env.example` file is included in source control and contains
settings and defaults to get the app running. Any secrets or local overrides of these values should be placed in a
`.env` file, which is ignored from source control.

Remember, to notnp commit and store `.env` in the source control, just only `.env.example` without any data specified.

You can [read more about environment variables here](https://nextjs.org/docs/basic-features/environment-variables).

## 🏃‍♂️ Getting Started Locally

Clone the repository.

```bash
git clone 
```

Navigate to each folder in the `apps` folder and and set the variables.

```sh
cp .env.example .env
```

Get all dependencies sorted.

```sh
yarn install
```

Bring your database to life with pushing the database schema.

```bash
yarn db:push
```

```sh
yarn dev
```

## 🔑 Database

Prisma ORM can use any PostgreSQL database. [Supabase is the easiest to work with.](https://www.prisma.io/docs/guides/database/supabase) Simply set `DATABASE_URL` in your `.env` file to work.

### `yarn db`

This project exposes a package.json script for accessing prisma via `yarn db:<command>`. You should always try to use this script when interacting with prisma locally.

### Making changes to the database schema

Make changes to your database by modifying `prisma/schema.prisma`.

## 🛸 How to Deploy the Project

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

