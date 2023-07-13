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

        expect(result).to.be.an('object');
        expect(result.username).to.equal(user.username);
        expect(result.email).to.equal(user.email);
      });
    });

    describe('POST /api/users', function () {
      it('creates a user', async function () {
        const user = newUser();
        const { data: result } = await api.m18.users.post(user);

        expect(result, 'missing key(s)').to.include.all.keys(
          '_id',
          'username',
          'email',
          'thoughts',
          'friends',
          'friendCount',
        );
        expect(result.username).to.equal(user.username);
        expect(result.email).to.equal(user.email);
      });
    });

    describe('PUT /api/users/:userId', function () {
      it('updates a user by id', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        const update = newUser();
        const { data: result } = await api.m18.users.put(user._id, update);

        expect(result).to.be.an('object');
        expect(result.username).to.equal(update.username);
        expect(result.email).to.equal(update.email);
      });
    });

    describe('DELETE /api/users/:userId', function () {
      it('deletes a user by id', async function () {
        const { data: before } = await api.m18.users.getAll();
        const { data: user } = await api.m18.users.post(newUser());
        const { data: after } = await api.m18.users.getAll();

        // check user was created
        expect(after.length - before.length).to.equal(1);

        // delete the user
        await api.m18.users.delete(user._id);
        const { data: result } = await api.m18.users.getAll();

        // check user was removed
        expect(result.length).to.equal(before.length);
      });
    });

    describe('POST /api/users/:userId/friends/:friendId - ', function () {
      it('adds a friend', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        const { data: friend } = await api.m18.users.post(newUser());
        await api.m18.users.addFriend(user._id, friend._id);
        const { data: result } = await api.m18.users.getOne(user._id);

        expect(result.friends.length).to.equal(1);
        expect(result.friendCount).to.equal(1);
      });
    });

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
