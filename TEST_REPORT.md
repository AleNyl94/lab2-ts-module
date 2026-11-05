# Test Report

## Summary

*Briefly describe how you tested your module, and why you chose that approach — clearly enough
that someone else could carry out the same tests.*

Answer:

Tests are executed using the command `npm test`.
I used **Vitest** for automated unit testing to verify that all classes in the module instantiate properly, return accurate domain results via `.run()`, and enforce strict boundary validation through the centralized `Validator` class.

All tests are structured according to Clean Code testing guidelines:
- **AAA Pattern (Arrange, Act, Assert / Build-Operate-Check):** Clear separation between test data setup, method execution, and assertion.
- **Single Concept per Test:** Each `it()` block verifies one distinct behavior or edge case (such as separate tests for `small`, `medium`, and `large` thumbnail profiles, and separate tests for constructor validation errors).
- **F.I.R.S.T. Principles:** All unit tests are fast, independent, repeatable, and self-validating.

Test files are located in the [`./test/`](./test/) folder for the following classes:
- `Scale`
- `ScaleBatch`
- `GenerateThumbnails`
- `GetImageDetails`
- `GreatestCommonDivisor`
- `ScaleToMaxWeight`
- `ScaleToRatio`
- `Weight`
- `Validator` (tested implicitly across all class constructors)

## Test Results

**Your test results:**

| What was tested | How it was tested | Result |
| ---------------- | ------------------ | ------- |
| [`Scale`](./src/scale.ts) – scales down `ImageItem` dimensions to 25% by default when no `scaleFactor` is provided, and scales accurately for custom scale factors. | [Vitest](./test/scale.test.ts) | Passed ✅ |
| [`Scale`](./src/scale.ts) – throws validation error in constructor if `ImageItem` dimensions or `scaleFactor` are invalid (0, negative, or `NaN`). | [Vitest](./test/scale.test.ts) | Passed ✅ |
| [`Weight`](./src/weight.ts) – calculates accurate memory size in bytes, kilobytes, and megabytes based on `ImageItem` dimensions and `bytesPerPixel`. | [Vitest](./test/weight.test.ts) | Passed ✅ |
| [`Weight`](./src/weight.ts) – throws validation error in constructor if `ImageItem` dimensions are invalid. | [Vitest](./test/weight.test.ts) | Passed ✅ |
| [`ScaleBatch`](./src/scalebatch.ts) – scales all images in a batch below the target weight and accurately calculates total saved memory (`11.49 MB`) while preserving each image's `bytesPerPixel`. | [Vitest](./test/scalebatch.test.ts) | Passed ✅ |
| [`ScaleBatch`](./src/scalebatch.ts) – throws validation error if the `images` array is empty or if `targetWeight` is invalid. | [Vitest](./test/scalebatch.test.ts) | Passed ✅ |
| [`GenerateThumbnails`](./src/generatethumbnails.ts) – generates accurate thumbnail dimensions tested individually for `'small'`, `'medium'`, and `'large'` profiles. | [Vitest](./test/generatethumbnails.test.ts) | Passed ✅ |
| [`GenerateThumbnails`](./src/generatethumbnails.ts) – throws validation error if the chosen size profile or `ImageItem` dimensions are invalid. | [Vitest](./test/generatethumbnails.test.ts) | Passed ✅ |
| [`GetImageDetails`](./src/getimagedetails.ts) – returns accurate aspect ratio, print dimensions in cm, memory weight, and HighDPI status from an `ImageItem`. | [Vitest](./test/getimagedetails.test.ts) | Passed ✅ |
| [`GetImageDetails`](./src/getimagedetails.ts) – throws validation error if `ImageItem` dimensions or `targetDpi` are invalid. | [Vitest](./test/getimagedetails.test.ts) | Passed ✅ |
| [`GreatestCommonDivisor`](./src/greatestcommondivisor.ts) – calculates the greatest common divisor between two positive integers. | [Vitest](./test/greatestcommondivisor.test.ts) | Passed ✅ |
| [`GreatestCommonDivisor`](./src/greatestcommondivisor.ts) – throws validation error if parameters are negative or invalid. | [Vitest](./test/greatestcommondivisor.test.ts) | Passed ✅ |
| [`GreatestCommonDivisor`](./src/greatestcommondivisor.ts) – returns the first number when the second parameter is `0`. | [Vitest](./test/greatestcommondivisor.test.ts) | Passed ✅ |
| [`ScaleToRatio`](./src/scaletoratio.ts) – adjusts `ImageItem` dimensions accurately when the image is too wide or too tall for the target aspect ratio. | [Vitest](./test/scaletoratio.test.ts) | Passed ✅ |
| [`ScaleToRatio`](./src/scaletoratio.ts) – throws validation error if `ImageItem` or `aspectRatio` dimensions are invalid. | [Vitest](./test/scaletoratio.test.ts) | Passed ✅ |
| [`ScaleToMaxWeight`](./src/scaletomaxweight.ts) – scales down `ImageItem` dimensions until the memory size is below `maxMegaBytes`, or leaves dimensions unchanged if already below the limit. | [Vitest](./test/scaletomaxweight.test.ts) | Passed ✅ |
| [`ScaleToMaxWeight`](./src/scaletomaxweight.ts) – throws validation error if `ImageItem` dimensions or `maxMegaBytes` are `0` or less. | [Vitest](./test/scaletomaxweight.test.ts) | Passed ✅ |