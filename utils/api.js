import axios from 'axios';

const PORT = 3001;
axios.defaults.baseURL = `http://localhost:${PORT}`;

export const api = {
  m13: {
    products: {
      getOne: (id) => {},
      getAll: () => axios.get('/api/products'),
      post: () => {},
      put: (id) => {},
      delete: (id) => {},
    },
    categories: {
      getOne: (id) => {},
      getAll: () => {},
      post: () => {},
      put: (id) => {},
      delete: (id) => {},
    },
    tags: {
      getOne: (id) => {},
      getAll: () => {},
      post: () => {},
      put: (id) => {},
      delete: (id) => {},
    },
  },
  m18: {
    users: {
      getOne: (id) => {},
      getAll: () => {},
      post: () => {},
      put: (id) => {},
      delete: (id) => {},
      addFriend: (userId, friendId) => {},
      removeFriend: (userId, friendId) => {},
    },
    thoughts: {
      getOne: (id) => {},
      getAll: () => {},
      post: () => {},
      put: (id) => {},
      delete: (id) => {},
      addreaction: () => {},
      removeReaction: (reactionId) => {},
    },
  },
};
