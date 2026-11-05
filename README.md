# Image Processing Module

An object-oriented TypeScript library for scaling, resizing, and calculating memory weight and metadata for images. Built according to Clean Code principles with strict domain types and centralized input validation.

## Installation

  ```bash
  git clone <repository-url>
  cd <repository-name>
  npm install
  ```

## Core Domain Type (ImageItem)
  All image-processing classes operate on the core data structure ImageItem:
  ```typescript
    interface ImageItem {
      width: number
      height: number
      bytesPerPixel: 1 | 3 | 4 // 1 = Grayscale, 3 = RGB (JPEG), 4 = RGBA (PNG/WebP)
    }
  ```

## Usage & API
  All classes validate their arguments on instantiation via the internal Validator class and execute their operation via the .run() method.

  - new GreatestCommonDivisor(a, b).run()
Calculates the greatest common divisor between two positive numbers.

  - new GenerateThumbnails(image, size).run()
  Generates scaled thumbnail dimensions based on predefined size profiles ('small', 'medium', 'large').

  - new GetImageDetails(image, targetDpi?).run()
  Calculates image metadata such as aspect ratio, print size in cm, megabytes, and HighDPI flags.

  - new Scale(image, scaleFactor?).run()
  Scales an ImageItem proportionally. If no scaleFactor is provided, it defaults to 0.25 (25%).

  - new ScaleBatch(images, targetWeight).run()
  Scales down an array of ImageItem objects below a target weight in megabytes. Returns the scaled images and total saved memory in MB.

  - new ScaleToMaxWeight(image, maxMegaBytes).run()
  Scales down an ImageItem proportionally until its memory weight is at or below maxMegaBytes.

  - new ScaleToRatio(image, aspectRatio).run()
  Crops/scales an ImageItem to fit a target aspect ratio ({ width, height }, e.g., { width: 16, height: 9 }).

  - new Weight(image).run()
  Calculates the raw memory weight of an ImageItem. Returns the size in bytes, kiloBytes, and megaBytes.

## Usage Example

  Here is a practical example of how to import and use the classes in your code:

  ``` typescript
  import { Weight, Scale, ScaleToRatio, type ImageItem } from './index.js'

  const image: ImageItem = {
    width: 1920,
    height: 1080,
    bytesPerPixel: 4
  }

  // 1. Calculate the memory weight of an image (1920x1080, RGBA)
  const imgWeight = new Weight(image).run()
  console.log(`Image size: ${imgWeight.megaBytes} MB (${imgWeight.kiloBytes} KB)`)

  // 2. Scale an image down proportionally (e.g., to 50%)
  const scaledResult = new Scale(image, 0.5).run()
  console.log('Scaled image:', scaledResult.image)

  // 3. Adjust an image to fit a 1:1 square aspect ratio
  const aspectScaled = new ScaleToRatio(image, { width: 1, height: 1 }).run()
  console.log('Aspect-adjusted image:', aspectScaled.image)
  ```

## Testing
  In the root folder of the module just type in the terminal:
  ```bash
  npm test
  ```

## Documentation Links
  [Test Report](./TEST_REPORT.md)

