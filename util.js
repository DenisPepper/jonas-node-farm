import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const replaceTemplate = (tmpCard, product) => {
  return tmpCard
    .replace(/{%productName%}/g, product.productName)
    .replace(/{%image%}/g, product.image)
    .replace(/{%quantity%}/g, product.quantity)
    .replace(/{%from%}/g, product.from)
    .replace(/{%nutrients%}/g, product.nutrients)
    .replace(/{%organic%}/g, (str) => (product.organic ? '' : 'not-organic'))
    .replace(/{%description%}/g, product.description)
    .replace(/{%price%}/g, product.price)
    .replace(/{%id%}/g, product.id);
};
