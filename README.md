# Image Processing Module

A TypeScript utility library for scaling, resizing, and calculating metadata for images.

## Installation

```bash
npm install

````

## Usage & API

- `greatestCommonDivisor(a, b)`
Calculates the greatest common divisor between two numbers.
- `generateThumbnails({ height, width, size })`
Generates scaled thumbnail dimensions based on predefined size profiles (small, medium, large).
- `getImageDetails({ height, width, targetDpi })`
Calculates image metadata such as aspect ratio, print size in cm, and HighDPI flags.
- `scale({ height, width, scaleFactor? })`
Scales the image down without breaking its proportions, if no scaleFactor is given it scales it down by 1/4.
- `scaleBatch({ targetWeight, images})`
Scales down an array of images to save memory, returns the scaled images and how much memory is saved in a megabytes-format.
- `scaleToMaxWeight({ width, height, maxMegaBytes, bytesPerPixel = 4 })`
Scales down a picture to desired size, if no bytesPerPixel is given it is automatically set to 4. 
- `scaleToRatio({ 
  height, 
  width, 
  aspectRatio: 
  { height: ratioHeight, 
    width: ratioWidth 
    } 
  })`
  Scales a picture to a given ratio, for example if a image is desired to be in 16:9 it is scaled to that size to fit the format.
- `weight({ height, width, bytesPerPixel = 4 })`
Weighs a picture by it's measurements, returns the size of the picture in bytes, kilobytes and megabytes.

## Testing

Test the modules functions with command:
```bash
npm test

```

## Documentation Links
- [Test Reports](./TEST_REPORT.md)
- [Reflection](./REFLECTION.md)
