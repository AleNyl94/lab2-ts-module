export interface GetImageDetailsResult {
  aspectRatio: {
    ratio: string,
    decimal: number
  }
  highDpi: boolean,
  printSizeCm: {
    height: number,
    width: number
  }
}