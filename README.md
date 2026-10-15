# Image Processing Module

A TypeScript utility library for scaling, resizing, and calculating metadata for images.

## Installation

```bash
git clone <repository-url>
cd <repository-name>
npm install
```

## Usage & API
- greatestCommonDivisor(a, b)

Calculates the greatest common divisor between two numbers.

- generateThumbnails({ height, width, size })

Generates scaled thumbnail dimensions based on predefined size profiles (small, medium, large).

- getImageDetails({ height, width, targetDpi })

Calculates image metadata such as aspect ratio, print size in cm, and HighDPI flags.

- scale({ height, width, scaleFactor? })

Scales the image down without breaking its proportions. If no scaleFactor is given, it scales it down by 1/4.

- scaleBatch({ targetWeight, images })

Scales down an array of images to save memory. Returns the scaled images and how much memory is saved in a megabyte format.

- scaleToMaxWeight({ width, height, maxMegaBytes, bytesPerPixel = 4 })

Scales down a picture to a desired size. If no bytesPerPixel is given, it is automatically set to 4.

- scaleToRatio({ height, width, aspectRatio: { height: ratioHeight, width: ratioWidth } })

Scales a picture to a given ratio (for example 16:9) to fit the target format.

- weight({ height, width, bytesPerPixel = 4 })

Calculates the weight of a picture based on its dimensions. Returns the size of the picture in bytes, kilobytes, and megabytes.

### Usage Example
Here is a practical example of how to import and use the utility functions in your code:

```typescript
import { weight, scale, scaleToRatio } from './index.js'

// 1. Calculate the memory weight of an image (e.g., 1920x1080)
const imgWeight = weight({ height: 1080, width: 1920 })
console.log(`Image size: ${imgWeight.megaBytes} MB (${imgWeight.kiloBytes} KB)`)

// 2. Scale an image down proportionally (e.g., to 50%)
const scaledDimensions = scale({ height: 1080, width: 1920, scaleFactor: 0.5 })
console.log('Scaled dimensions:', scaledDimensions)

// 3. Adjust an image to fit a 16:9 aspect ratio
const aspectScaled = scaleToRatio({
  height: 1200,
  width: 1920,
  aspectRatio: { height: 9, width: 16 }
})
console.log('Aspect-adjusted dimensions:', aspectScaled)
```

## Testing
Run unit tests for the module with the command:

```bash
npm test
```

## Documentation Links
[Test Reports](./TEST_REPORT.md)