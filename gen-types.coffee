fs = require 'fs'
{ basename, extname } = require 'path'

gen = (bookNames) ->
    templ = """
        declare module "color-books" {
          function load(bookName: ColorBook.BookNames): ColorBook.Book;

          namespace ColorBook {

            type BookNames = #{bookNames};

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
    """

booknames = ("\"#{basename(f, '.json')}\"" for f in fs.readdirSync('color-books') when extname(f) is '.json')
decls = gen booknames.join('|')
(try fs.mkdirSync './typings' catch ;)
fs.writeFileSync './typings/index.d.ts', decls, 'utf8'
