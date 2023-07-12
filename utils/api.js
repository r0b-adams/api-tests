import axios from 'axios';

const PORT = 3001;
axios.defaults.baseURL = `http://localhost:${PORT}`;

export const api = {
  m13: {
    products: {
      getAll: () => axios.get('/api/products'),
      getOne: (id) => axios.get(`/api/products/${id}`),
      post: (product) => axios.post('/api/products', product),
      put: (id) => {},
      delete: (id) => {},
    },
    categories: {
      getAll: () => {},
      getOne: (id) => {},
      post: (payload) => {},
      put: (id) => {},
      delete: (id) => {},
    },
    tags: {
      getAll: () => {},
      getOne: (id) => {},
      post: (payload) => {},
      put: (id) => {},
      delete: (id) => {},
    },
  },
  m18: {
    users: {
      getAll: () => {},
      getOne: (id) => {},
      post: (payload) => {},
      put: (id) => {},
      delete: (id) => {},
      addFriend: (userId, friendId) => {},
      removeFriend: (userId, friendId) => {},
    },
    thoughts: {
      getAll: () => {},
      getOne: (id) => {},
      post: (payload) => {},
      put: (id) => {},
      delete: (id) => {},
      addreaction: () => {},
      removeReaction: (reactionId) => {},
    },
  },
};
