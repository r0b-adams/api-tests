import { v4 as uuidv4 } from 'uuid';
import { LoremIpsum } from 'lorem-ipsum';

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 2,
  },
  wordsPerSentence: {
    max: 5,
    min: 1,
  },
});

/**
 *
 * @returns first 7 lsds from Date.now()
 *
 * helper to avoid id collisions with seed data and old test data
 * using full date number is out of bounds for mysql interger type
 */
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
    price: Math.floor(Math.random() * 101) + 0.99,
    stock: Math.floor(Math.random() * 101),
  };
};

export const newCategory = () => {
  return {
    id: id(),
    category_name: uuidv4(),
  };
};

export const newTag = () => {
  return {
    id: id(),
    tag_name: uuidv4(),
  };
};

export const newUser = () => {
  const username = uuidv4();
  return {
    username,
    email: `user-${username}@testmail.com`,
  };
};

export const newThought = (userId, username) => {
  return {
    thoughtText: lorem.generateParagraphs(1),
    username,
    userId,
  };
};

export const newReaction = () => {
  return {
    reactionBody: lorem.generateSentences(1),
    username: uuidv4(),
  };
};
