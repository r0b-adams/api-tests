import { describe, it } from 'mocha';
import { expect } from 'chai';

import { api } from '../utils/api.js';
import { newProduct } from '../utils/helpers.js';

// this assignment starter code includes a seed file
describe('M13 E Commerce Backend', () => {
  /**
   * Products
   */
  describe('Product routes', () => {
    describe('GET /api/products', () => {
      it('gets all products', async () => {
        const { data } = await api.m13.products.getAll();
        expect(data, "get all products didn't return an array").to.be.an('array');

        if (data.length > 0) {
          const [product] = data;
          expect(product, 'model missing keys').to.include.all.keys(
            'id',
            'product_name',
            'price',
            'stock',
          );
        }
      });

      it('includes category & tag data', async () => {
        const { data } = await api.m13.products.getAll();
        expect(data, "get all products didn't return an array").to.be.an('array');

        if (data.length > 0) {
          const [product] = data;
          expect(product, "get all products doesn't include tags").to.include.all.keys(
            'category',
            'tags',
          );
        }
      });
    });

    describe('GET /api/products/:id', () => {
      it('gets one product by id', async () => {
        const { data: postProduct } = await api.m13.products.post(newProduct());
        const { data: getProduct } = await api.m13.products.getOne(postProduct.id);

        expect(getProduct).to.be.an('object').that.includes(postProduct);
      });

      it('includes category & tag data', async () => {
        const { data: postProduct } = await api.m13.products.post(newProduct());
        const { data: getProduct } = await api.m13.products.getOne(postProduct.id);

        expect(getProduct).to.include.all.keys('category', 'tags');
      });
    });

    // ***defined in starter code***
    describe('POST /api/products', () => {
      it('creates a product', async () => {
        const product = newProduct();
        const { data } = await api.m13.products.post(product);
        expect(data).to.be.an('object').that.includes(product);
      });
    });

    // ***defined in starter code***
    describe('PUT  /api/products/:id', () => {
      it('updates a product', async () => {
        const { data: postProduct } = await api.m13.products.post(newProduct());
        const update = {
          product_name: `SOLD OUT - ${postProduct.product_name}`,
          price: Math.floor(Math.random() * 101) + 0.99,
          stock: Math.floor(Math.random() * 101),
        };
        const { data: putProduct } = await api.m13.products.put(postProduct.id, update);

        if (Array.isArray(putProduct)) {
          expect(putProduct).to.include(1);
        }

        const { data: getProduct } = await api.m13.products.getOne(postProduct.id);
        if (getProduct) {
          expect(getProduct).to.be.an('object').that.includes(update);
        }
      });
    });

    describe('DELETE /api/products/:id', () => {
      it('removes a product', async () => {
        const { data: postProduct } = await api.m13.products.post(newProduct());
        const { data: deleteResult } = await api.m13.products.delete(postProduct.id);

        // sequelize destroy query returns number of deleted rows
        expect(deleteResult).to.equal(1);
      });
    });
  });
});

/**
 * Categories
 */
describe('Category routes', () => {
  // describe('GET /api/categories', () => {
  //   it('gets all categories', () => {});
  // });
  // describe('GET /api/categories/:id', () => {
  //   it('gets one category by id', () => {});
  // });
  // describe('POST  /api/categories', () => {
  //   it('creates a category', () => {});
  // });
  // describe('PUT  /api/categories/:id', () => {
  //   it('updates a category', () => {});
  // });
  // describe('DELETE /api/categories/:id', () => {
  //   it('removes a category', () => {});
  // });
});

/**
 * Tags
 */
describe('Tag routes', () => {
  // describe('GET /api/tags', () => {
  //   it('gets all tags', () => {});
  // });
  // describe('GET /api/tags/:id', () => {
  //   it('gets one tag by id', () => {});
  // });
  // describe('POST  /api/tags', () => {
  //   it('creates a tag', () => {});
  // });
  // describe('PUT  /api/tags/:id', () => {
  //   it('updates a tag', () => {});
  // });
  // describe('DELETE /api/tags/:id', () => {
  //   it('removes a tag', () => {});
  // });
});
