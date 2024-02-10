<div align="center"><h3>Full-Stack Online Course Learning Platform</h3><p>Built using Javascript (React.Js) with Next.js, Chakra UI, Redux and MongoDB.</p></div>
<div align="center">
<a href="https://coursebuilder.vercel.app/">Landing Page</a> 
<span> · </span>
<a href="https://coursebuilder.vercel.app/MAIN">Main Page</a>
</div>

## 👋 Introduction

Welcome to the open-source React.Js Online Course Learning Platform with Admin Panel project! This project is built with Javascript and Chakra UI providing a powerful and flexible solution for building and managing our online learning experience.

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
-  [x] UI built with [**Chakra UI**](https://chakra-ui.com/) and stunning UI components.
-  [x] Type-Validation with **Zod**.
-  [x] [**Next Metadata API**](https://nextjs.org/docs/api-reference/metadata) for SEO handling.

## 🔐 Authentication

The authentication is handled using JWT tokens stored in cookies and verified inside the `middleware.ts` file. The middleware function takes in the HTTP request, reads the `token` cookie and if the JWT is successfully verified, it sets the `X-USER-ID` header with the userId as the value, otherwise the request is sent back with 401 status.

## 👁‍🗨 Environment variables

Environment variables are stored in `.env` files. By default the `.env.example` file is included in source control and contains
settings and defaults to get the app running. Any secrets or local overrides of these values should be placed in a
`.env` file, which is ignored from source control.

Remember, never commit and store `.env` in the source control, just only `.env.example` without any data specified.

You can [read more about environment variables here](https://nextjs.org/docs/basic-features/environment-variables).

## 🏃‍♂️ Getting Started Locally

Clone the repository.

```bash
git clone https://github.com/prithvi2226/FrontEnd-Course.git
```

Navigate to each folder in the `apps` folder and and set the variables.

```sh
cp .env.example .env
```

Get all dependencies sorted.

```sh
npm install
```

In the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```sh
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```sh
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


## 🔑 Database

CourseBuilder can use any PostgreSQL database. [MongoDB is the easiest to work with.](https://www.mongodb.com/docs/) Simply set `DATABASE_URL` in your `.env` file to work.

Bring your database to life with pushing the database schema.

```bash
Install migrate-mongo globally
```

```bash
npm install -g migrate-mongo
```
Create migration script

```bash
migrate-mongo create <migration-name>
```
Implement database schema changes in the migration script

Run migrations

```bash
migrate-mongo up
```

Start development server

```bash
npm run dev
```

This project exposes a package.json script for accessing prisma via `npm db:<command>`. You should always try to use this script when interacting with CourseBuilder locally.

## 🛸 How to Deploy the Project

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
