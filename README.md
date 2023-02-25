# Tailwind Layouts

Layout primitives for Tailwind CSS.

📝 Read the [docs](https://tailwind-layouts.netlify.app) for more information.

## Develop

### Install dependencies

```
npm install
```

### Start dev server and watch plugin for changes

```
npm run dev
```

## Project Structure

```
/
├── src/
├── plugin/
```

[`src`](/src) - Demo site built with [Astro](https://astro.build)

[`plugin`](/plugin) - Plugin built with [Vite in library mode](https://vitejs.dev/guide/build.html#library-mode)

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                                                      |
| :---------------- | :-------------------------------------------------------------------------- |
| `npm run dev`     | Starts local dev server at `localhost:3000` and builds plugin in watch mode |
| `npm run build`   | Builds the demo site to `./dist/`                                           |
| `npm run preview` | Preview your build locally, before deploying                                |
| `npm run publish` | Builds and publishes the plugin and to npm                                  |
