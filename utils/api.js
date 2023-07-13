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
      getAll: () => axios.get('/api/users'),
      getOne: (userId) => axios.get(`/api/users/${userId}`),
      post: (user) => axios.post('/api/users', user),
      put: (userId, update) => axios.put(`/api/users/${userId}`, update),
      delete: (userId) => axios.delete(`/api/users/${userId}`),
      addFriend: (userId, friendId) => axios.post(`/api/users/${userId}/friends/${friendId}`),
      removeFriend: (userId, friendId) => axios.delete(`/api/users/${userId}/friends/${friendId}`),
    },
    thoughts: {
      getAll: () => axios.get(`/api/thoughts`),
      getOne: (thoughtId) => axios.get(`/api/thoughts/${thoughtId}`),
      post: (thought) => axios.post('/api/thoughts', thought),
      put: (thoughtId, update) => axios.put(`/api/thoughts/${thoughtId}`, update),
      delete: (id) => axios.delete(`/api/thoughts/${thoughtId}`),
      addreaction: (thoughtId, reaction) =>
        axios.post(`/api/thoughts/${thoughtId}/reactions`, reaction),
      removeReaction: (thoughtId, reactionId) =>
        axios.delete(`/api/thoughts/${thoughtId}/reactions/${reactionId}`),
    },
  },
};
