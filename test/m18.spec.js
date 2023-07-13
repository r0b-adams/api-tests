import { describe, it } from 'mocha';
import { expect } from 'chai';

import { api } from '../utils/api.js';
import { newUser } from '../utils/helpers.js';

describe('M18 Social Network API', function () {
  describe('User routes', function () {
    /**
     * Users
     */
    describe('GET /api/users', function () {
      it('gets all users', async function () {
        const { data } = await api.m18.users.getAll();
        expect(data, "get all users didn't return an array").to.be.an('array');

        if (data.length > 0) {
          const [user] = data;
          expect(user, 'missing key(s)').to.include.all.keys(
            '_id',
            'username',
            'email',
            'thoughts',
            'friends',
            'friendCount',
          );
        }
      });
    });

    describe('GET /api/users/:userId', function () {
      it('gets one user by id', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        const { data: result } = await api.m18.users.getOne(user._id);
        expect(result).to.be.an('object').but.not.own.include.keys('__v').that.deep.includes(user);
      });
    });

    // describe('POST /api/users', function () {
    //   it('creates a user', function () {});
    // });

    // describe('PUT /api/users/:userId', function () {
    //   it('updates a user by id', function () {});
    // });

    // describe('DELETE /api/users/:userId', function () {
    //   it('deletes a user by id', function () {});
    // });

    // describe('POST /api/users/:userId/friends/:friendId - ', function () {
    //   it('adds a friend', function () {});
    // });

    // describe('DELETE /api/users/:userId/friends/:friendId', function () {
    //   it('removes a friend', function () {});
    // });
  });

  /**
   * Thoughts
   */
  // describe('Thought routes', function () {
  //   describe('POST /api/thoughts', function () {
  //     it('creates a thought', function () {});
  //     it('adds created thought id to user thoughts array', function () {});
  //   });

  //   describe('GET /api/thoughts/:thoughtId', function () {
  //     it('gets one thought', function () {});
  //   });

  //   describe('GET /api/thoughts', function () {
  //     it('gets all thoughts', function () {});
  //   });

  //   describe('PUT /api/thoughts/:thoughtId', function () {
  //     it('updates a thought', function () {});
  //   });

  //   describe('DELETE /api/thoughts/:thoughtId', function () {
  //     it('deletes a thought', function () {});
  //     it('removes delete thought id from user thoughts array', function () {});
  //   });

  //   describe('POST /api/thoughts/:thoughtId/reactions', function () {
  //     it('adds a reaction', function () {});
  //   });

  //   describe('DELETE /api/thoughts/:thoughtId/reactions/:reactionId', function () {
  //     it('removes a reaction', function () {});
  //   });
  // });

  /**
   * BONUS
   */
  // describe('BONUS', function () {
  //   it("removes a deleted user's associated thoughts", function () {});
  // });
});
