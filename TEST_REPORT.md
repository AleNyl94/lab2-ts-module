# Test Report

## Summary

*Briefly describe how you tested your module, and why you chose that approach — clearly enough
that someone else could carry out the same tests.*

Answer:

Tests are run on command `npm test`.
I used vitest for automatic test-code, to have a clearer overview of the modules functions output, and that it is correct according to the primary goals. I also made test according to invalid input so it will handle that and throw an error when it is expected to.

Test-files are found in [test-folder](./test/) for following functions:
- scale
- scaleBatch
- generateThumbnail
- getImageDetails
- greatestCommonDivisor
- scaleToMaxWeight
- scaleToRatio
- weight

## Test Results

**Your test results:**

| What was tested | How it was tested | Result |
| ---------------- | ------------------ | ------- |
|         [Scale](./src/scale.ts), scaling down the image dimensions to 25% if no scaleFactor is given.          |          [Vitest](./test/scale.test.ts)      |    Passed ✅     |
|      [Scale](./src/scale.ts), throws an error  if the measurements are invalid.           |          [Vitest](./test/scale.test.ts)            |    Passed ✅       |
|         [Weight](./src/weight.ts), calculating the size according to the measurements.       |      [Vitest](./test/weight.test.ts)             |    Passed ✅     |
|        [Weight](./src/weight.ts), throws an error  if the measurements are invalid.          |          [Vitest](./test/weight.test.ts)          |     Passed ✅     |
|      [Scale Batch](./src/scalebatch.ts), tests the output containing the correct information, images scaled down and how much memory is saved in total.           |        [Vitest](./test/scalebatch.test.ts)      |      Failed ⛔, expected wrong number in savedMemory.  |
|       [Scale Batch](./src/scalebatch.ts), throws an error if the images-array is empty.           |        [Vitest](./test/scalebatch.test.ts)              |   Passed ✅       |
|        [Generate Thumbnails](./src/generatethumbnails.ts), generates the pictures with correct sizes depending on the choices of size.           |          [Vitest](./test/generatethumbnails.test.ts)           |     Passed ✅    |
|     [Generate Thumbnails](./src/generatethumbnails.ts), throws error if the size chosen is not valid              |       [Vitest](./test/generatethumbnails.test.ts)             |   Passed ✅      |
|    [Generate Thumbnails](./src/generatethumbnails.ts), throws error if measurements is invalid               |        [Vitest](./test/generatethumbnails.test.ts)             |   Passed ✅      |
|       [Get Image Details](./src/getimagedetails.ts), should return the correct details based off the measurements.            |     [Vitest](./test/getimagedetails.test.ts)               |    Passed ✅      |
|      [Get Image Details](./src/getimagedetails.ts), should throw an error of the measurements are invalid.            |       [Vitest](./test/getimagedetails.test.ts)              |    Passed ✅     |
|        [Greatest Common Divisor](./src/greatestcommondivisor.ts), sends back the greatest common divisor between two numbers.           |    [Vitest](./test/greatestcommondivisor.test.ts)                 |      Passed ✅   |
|         [Greatest Common Divisor](./src/greatestcommondivisor.ts), throws error of the parameters are negative numbers.          |       [Vitest](./test/greatestcommondivisor.test.ts)              |  Passed ✅        |
|     [Greatest Common Divisor](./src/greatestcommondivisor.ts), sends back the first number if the second one is 0.              |        [Vitest](./test/greatestcommondivisor.test.ts)            |   Passed ✅        |
|     [Scale To Ratio](./src/scaletoratio.ts), sends the expected outdata based off the measurements and targeted ratio.             |           [Vitest](./test/scaletoratio.test.ts)         |   Passed ✅   
|                   |                    |         |
|                   |                    |         |
