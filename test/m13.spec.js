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
        expect(Array.isArray(data), "get all products didn't return an array").to.be.true;

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

      it('includes category data', async () => {
        const { data } = await api.m13.products.getAll();
        expect(Array.isArray(data), "get all products didn't return an array").to.be.true;

        if (data.length > 0) {
          const [product] = data;
          expect(product, "get all products doesn't include category").to.include.all.keys(
            'category',
          );
        }
      });

      it('includes tag data', async () => {
        const { data } = await api.m13.products.getAll();
        expect(Array.isArray(data), "get all products didn't return an array").to.be.true;

        if (data.length > 0) {
          const [product] = data;
          expect(product, "get all products doesn't include tags").to.include.all.keys('tags');
        }
      });
    });

    describe('GET /api/products/:id', () => {
      it('gets one product by id', async () => {
        const { data: postProduct } = await api.m13.products.post(newProduct());
        const { data: getProduct } = await api.m13.products.getOne(postProduct.id);

        expect(getProduct).to.be.an('object').that.includes(postProduct);
      });

      it('includes category data', async () => {
        const { data: postProduct } = await api.m13.products.post(newProduct());
        const { data: getProduct } = await api.m13.products.getOne(postProduct.id);

        expect(getProduct).to.include.all.keys('category');
      });

      it('includes tag data', async () => {
        const { data: postProduct } = await api.m13.products.post(newProduct());
        const { data: getProduct } = await api.m13.products.getOne(postProduct.id);

        expect(getProduct).to.include.all.keys('tags');
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

    // defined in starter code
    // describe('PUT  /api/products/:id', () => {
    //   it('updates a product', () => {});
    // });

    // describe('DELETE /api/products/:id', () => {
    //   it('removes a product', () => {});
    // });
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
