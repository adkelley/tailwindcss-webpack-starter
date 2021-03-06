# Tailwind CSS Webpack Starter Project

This is an example of a super simple Webpack setup for using [Tailwind CSS](https://tailwindcss.com).  I cloned it from [tailwindcss/webpack-starter](https://github.com/tailwindcss/webpack-starter) and customized it to included *eslint*, *babel*, and *prettier* support.

To get started, clone the project and install the dependencies:

```
# Using npm
npm install

# Using Yarn
yarn
```

After that, start up Webpack Development Server:

```
npm run dev
```

Webpack Development Server will watch `/src/styles.css` and `/tailwind.js` and rebuild your stylesheet on every change.

You can play around with `/index.html` to see the effects of your changes.

To build a production bundle run:

```
npm run prod
```

After that you will have a ready to deploy bundle at `/dist`

## Advanced
See notes.org in this directory for additional detail on this configuration

