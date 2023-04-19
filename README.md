# BadEnd's Homepage

This is the source code for my personal website, [badend.pages.dev](https://badend.pages.dev/).

## Stack

-   [Vue.js](https://vuejs.org/) - An approachable, performant and 
versatile framework for building web user interfaces.
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
-   [Vue Typewriter Effect](https://ayitinya.github.io/vue-typewriter-effect/) - A Vue.js wrapper for the typewriter effect.
-   [Font Awesome](https://fontawesome.com/) - The web's most popular icon set and toolkit.

## Project structure

```text
. Project root
├── public <- Static files
├── src <- Source files
│   ├── assets <- CSS, images, etc.
│   ├── components <- Vue components
│   ├── router <- Vue router
│   ├── App.vue <- Main Vue app
│   ├── main.js <- Entry point
│   └── views <- Vue views
|       ├── HomeView.vue <- Home page
|       ├── UsesView.vue <- Uses page
|       └── NotFoundView.vue <- 404 page
├── .eslintrc.js <- ESLint config
├── .gitignore <- Git ignore
├── index.html <- HTML entry point
├── package.json <- NPM package config
├── postcss.config.js <- PostCSS config
├── README.md <- This file
├── tailwind.config.js <- Tailwind config
└── vite.config.js <- Vite config
```

## Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr />