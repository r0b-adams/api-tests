import axios from 'axios';

const PORT = 3001;
axios.defaults.baseURL = `http://localhost:${PORT}`;

export const api = {
  /**
   * M13 E-Commerce Backend
   */
  m13: {
    products: {
      getAll: () => axios.get('/api/products'),
      getOne: (id) => axios.get(`/api/products/${id}`),
      post: (product) => axios.post('/api/products', product),
      put: (id, update) => axios.put(`/api/products/${id}`, update),
      delete: (id) => axios.delete(`/api/products/${id}`),
    },
    categories: {
      getAll: () => axios.get('/api/categories'),
      getOne: (id) => axios.get(`/api/categories/${id}`),
      post: (category) => axios.post('/api/categories', category),
      put: (id, update) => axios.put(`/api/categories/${id}`, update),
      delete: (id) => axios.delete(`/api/categories/${id}`),
    },
    tags: {
      getAll: () => axios.get('/api/tags'),
      getOne: (id) => axios.get(`/api/tags/${id}`),
      post: (tag) => axios.post('/api/tags', tag),
      put: (id, update) => axios.put(`/api/tags/${id}`, update),
      delete: (id) => axios.delete(`/api/tags/${id}`),
    },
  },

  /**
   * M18 Social Network API
   */
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
