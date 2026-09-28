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
|         [scale](./src/scale.ts) scale down the image dimensions to 25% if no scaleFactor is given.          |          Vitest      |    Passed ✅     |
|      scale             |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
|                   |                    |         |
