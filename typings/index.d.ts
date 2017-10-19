declare module "color-books" {
  function load(bookName: ColorBook.BookNames): ColorBook.Book;

  namespace ColorBook {

    type BookNames = "ANPA Color"|"DIC Color Guide"|"FOCOLTONE"|"HKS E Process"|"HKS E"|"HKS K Process"|"HKS K"|"HKS N Process"|"HKS N"|"HKS Z Process"|"HKS Z"|"PANTONE SkinTone™ Guide"|"PANTONE+ CMYK Coated"|"PANTONE+ CMYK Uncoated"|"PANTONE+ Color Bridge Coated-V3"|"PANTONE+ Color Bridge Coated"|"PANTONE+ Color Bridge Uncoated-V3"|"PANTONE+ Color Bridge Uncoated"|"PANTONE+ Extended Gamut Coated"|"PANTONE+ Metallic Coated"|"PANTONE+ Metallics Coated"|"PANTONE+ Pastels & Neons Coated"|"PANTONE+ Pastels & Neons Uncoated"|"PANTONE+ Premium Metallics Coated"|"PANTONE+ Solid Coated-V3"|"PANTONE+ Solid Coated"|"PANTONE+ Solid Uncoated-V3"|"PANTONE+ Solid Uncoated"|"PANTONE® F+H cotton TCX"|"PANTONE® F+H nylon brights TN"|"PANTONE® FHI Color Guide"|"PANTONE® GoeBridge™ coated"|"PANTONE® Goe™ coated"|"PANTONE® Goe™ uncoated"|"TOYO 94 COLOR FINDER"|"TOYO COLOR FINDER"|"TRUMATCH";

    type ColorSpace =
      | "RGB"
      | "HSB"
      | "CMYK"
      | "Pantone"
      | "Focoltone"
      | "Trumatch"
      | "Toyo"
      | "LAB"
      | "Grayscale"
      | "HKS";

    type GrayscaleComponents = [number];
    type RGBComponents = [number, number, number];
    type CMYKComponents = [number, number, number, number];

    interface RecordsInBook {
      [key: string]: {
        name: string;
        code: string;
        components: GrayscaleComponents | RGBComponents | CMYKComponents;
      };
    }

    interface Book {
      version: number;
      title: string;
      description: string;
      prefix: string;
      suffix: string;
      colorCount: number;
      colorSpace: ColorSpace;
      channels: 1 | 3 | 4;
      isSpot: boolean;
      records: RecordsInBook;
    }
  }
}