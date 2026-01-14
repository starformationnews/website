# Default images

This folder mostly exists for providing a few default images, so that it isn't necessary to always upload an image.

Instructions:

1. Only add images in .webp format with a width between ~1500 to ~2000 pixels, and a height of between ~1000 to ~2000 pixels. (Any more is unnecessary; any less may appear pixelated on some devices and in some places.)

2. Make the filename sensible - I recommend all lowercase, and with something like: `<object_name>_<organization>_<year>.webp`  - like `pipe_nebula_eso_2009.webp`.

3. Add image credits to `credits.json`, following the template:

```javascript
{
    ...
    "filename": {
        "credit": "full list of required credit. E.g.: ESO/Joe Bloggs",
        "license": "license (if known. which it should be. free to use only please!) E.g.: CC BY 4.0",
        "url": "a url of where you found the image, for our own sake - e.g. wikimedia commons or the ESO website."
    },
    ...
}
```