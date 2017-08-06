'use strict';

const { booknames, load } = require('./lib');

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
