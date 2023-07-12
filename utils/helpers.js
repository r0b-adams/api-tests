import { v4 as uuidv4 } from 'uuid';

const id = () => {
  let date = Date.now();
  let result = 0;
  for (let i = 0; i < 7; i++) {
    const digit = date % 10;
    result += digit * 10 ** i;
    date = Math.floor(date / 10);
  }
  return result;
};

export const newProduct = () => {
  return {
    id: id(),
    product_name: uuidv4(),
    price: 29.99,
    stock: Math.floor(Math.random() * 101),
  };
};
