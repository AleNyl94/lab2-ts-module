export class Validator {
    public validateHeight(height: number) {
    if (typeof height !== 'number'|| Number.isNaN(height) || height <= 0) {
      throw new Error('Height must be a positive number')
    }
  }

  public validateWidth(width: number) {
    if (typeof width !== 'number' || Number.isNaN(width) || width <= 0) {
      throw new Error('Width must be a positive number')
    }
  }

  private readonly allowedBytes = [ 1, 3, 4 ]

  public validateBytesPerPixel(bytesPerPixel: number) {
    if (!this.allowedBytes.includes(bytesPerPixel)) {
      throw new Error('Bytes must equal 1 , 3 or 4')
    }
  }

  public validateMaxMegaBytes(maxMegaBytes: number) {
    if (typeof maxMegaBytes !== 'number' || Number.isNaN(maxMegaBytes) || maxMegaBytes <= 0) {
      throw new Error('Max megabytes must be a positive number')
    }
  }

  public validateTargetWeight(targetWeight: number) {
    if (typeof targetWeight !== 'number' || Number.isNaN(targetWeight) || targetWeight <= 0) {
      throw new Error('Target weight must be a positive number')
    }
  }

  public validateScaleFactor(scaleFactor: number) {
    if (typeof scaleFactor !== 'number' || Number.isNaN(scaleFactor) || scaleFactor > 1) {
      throw new Error('The scale factor must be a decimal between 0 and/equal to 1')
    }
    if (!scaleFactor) {
      scaleFactor = 0.25;
    }
  }
}