# The Star Formation Newsletter

Welcome to the main repository for The Star Formation Newsletter's website. (This README is a W.I.P.!)


## Preparing a post

### Images

Please make sure that images are in `.webp` format (this saves on filesize!) and have a maximum size of 2000 pixels in any dimension. You can easily convert and resize images on the command line to follow these requirements with ImageMagick, using the commmand:

```bash
convert -resize 2000x2000^ filename.jpg filename.webp
```


# sv

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
