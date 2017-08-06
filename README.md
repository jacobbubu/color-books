# Introduction

The purpose of this module is to provide a way to easily use color books in Javascript.

## Install

```
npm i color-books
```

## Usage
Please see `example.js` as an usage example:

```
const { booknames, load } = require('color-books');

let totalCount = 0
for (const name of booknames) {
  const book = load(name);
  totalCount += book.colorCount;
  console.log(`${name}:`, book.colorCount);
}
console.log(`===\nTotal color count: ${totalCount}`);
console.log("===");
const { title, colorSpace, records, spotIdentifier, colorCount } = load('PANTONE+ Solid Coated');
console.log(title, `\n\tColor space: ${colorSpace}`);
console.log(`\tIs spot color?: ${spotIdentifier}`);
console.log(`\t'PANTONE Orange 021 C':`, records['PANTONE Orange 021 C'].components)
```

The output would be:

```
ANPA Color: 300
DIC Color Guide: 1280
FOCOLTONE: 763
...
PANTONE+ CMYK Coated: 2868
PANTONE+ Metallic Coated: 301
...
TRUMATCH: 2091
===
Total color count: 19198
===
PANTONE+® Solid Coated
    Color space: LAB
    Is spot color?: Spot
    'PANTONE Orange 021 C': [ 60.7843137254902, 66, 85 ]
```

## Details

It contains 19,198 color records in 23 books as following:

* ANPA Color: 300
* DIC Color Guide: 1280
* FOCOLTONE: 763
* HKS E: 88"code": "1-2",
* HKS K Process: 86
* HKS K: 88
* HKS N Process: 86
* HKS N: 86
* HKS Z Process: 86
* HKS Z: 50
* PANTONE+ CMYK Coated: 2868
* PANTONE+ CMYK Uncoated: 2868
* PANTONE+ Color Bridge Coated: 1313
* PANTONE+ Color Bridge Uncoated: 1313
* PANTONE+ Metallic Coated: 301
* PANTONE+ Pastels & Neons Coated: 210
* PANTONE+ Pastels & Neons Uncoated: 210
* PANTONE+ Premium Metallics Coated: 300
* PANTONE+ Solid Coated: 1341
* PANTONE+ Solid Uncoated: 1341
* TOYO 94 COLOR FINDER: 1050
* TOYO COLOR FINDER: 1079
* TRUMATCH: 2091

The meta-data in each book includes:

  * version: the book version
  * title: e.g. "PANTONE+® CMYK Coated"
  * prefix": e.g. "PANTONE P "
  * suffix": e.g. " C"
  * colorCount": 2868
  * colorSpace": "CMYK"
  * channels": 4
  * spotIdentifier: "Process" or "Spot"
  * record: color records dictionary

The color recod consists of 3 fields:

  * name: e.g. "PANTONE P Process Cyan C"
  * code: e.g. "PCYANS",
  * components: e.g. [100, 0, 0, 0] -- CMYK has 4 numbers; RGB and LAB has just 3 numbers.

