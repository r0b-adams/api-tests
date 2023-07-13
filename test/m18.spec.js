import { describe, it } from 'mocha';
import { expect } from 'chai';

import { api } from '../utils/api.js';
import { newUser, newThought, thoughtUpdate } from '../utils/helpers.js';

describe('M18 Social Network API', function () {
  // describe('User routes', function () {
  //   /**
  //    * Users
  //    */
  //   describe('GET /api/users', function () {
  //     it('gets all users', async function () {
  //       const { data } = await api.m18.users.getAll();
  //       expect(data, "get all users didn't return an array").to.be.an('array');

  //       if (data.length > 0) {
  //         const [user] = data;
  //         expect(user, 'missing key(s)').to.include.all.keys(
  //           '_id',
  //           'username',
  //           'email',
  //           'thoughts',
  //           'friends',
  //           'friendCount',
  //         );
  //       }
  //     });
  //   });

  //   describe('GET /api/users/:userId', function () {
  //     it('gets one user by id', async function () {
  //       const { data: user } = await api.m18.users.post(newUser());
  //       const { data: result } = await api.m18.users.getOne(user._id);

  //       expect(result).to.be.an('object');
  //       expect(result.username).to.equal(user.username);
  //       expect(result.email).to.equal(user.email);
  //     });
  //   });

  //   describe('POST /api/users', function () {
  //     it('creates a user', async function () {
  //       const user = newUser();
  //       const { data: result } = await api.m18.users.post(user);

  //       expect(result, 'missing key(s)').to.include.all.keys(
  //         '_id',
  //         'username',
  //         'email',
  //         'thoughts',
  //         'friends',
  //         'friendCount',
  //       );
  //       expect(result.username).to.equal(user.username);
  //       expect(result.email).to.equal(user.email);
  //     });
  //   });

  //   describe('PUT /api/users/:userId', function () {
  //     it('updates a user by id', async function () {
  //       const { data: user } = await api.m18.users.post(newUser());
  //       const update = newUser();
  //       const { data: result } = await api.m18.users.put(user._id, update);

  //       expect(result).to.be.an('object');
  //       expect(result.username).to.equal(update.username);
  //       expect(result.email).to.equal(update.email);
  //     });
  //   });

  //   describe('DELETE /api/users/:userId', function () {
  //     it('deletes a user by id', async function () {
  //       const { data: before } = await api.m18.users.getAll();
  //       const { data: user } = await api.m18.users.post(newUser());
  //       const { data: after } = await api.m18.users.getAll();

  //       // check user was created
  //       expect(after.length - before.length).to.equal(1);

  //       // delete the user
  //       await api.m18.users.delete(user._id);
  //       const { data: result } = await api.m18.users.getAll();

  //       // check user was removed
  //       expect(result.length).to.equal(before.length);
  //     });
  //   });

  //   describe('POST /api/users/:userId/friends/:friendId - ', function () {
  //     it('adds a friend', async function () {
  //       const { data: user } = await api.m18.users.post(newUser());
  //       const { data: friend } = await api.m18.users.post(newUser());
  //       await api.m18.users.addFriend(user._id, friend._id);
  //       const { data: result } = await api.m18.users.getOne(user._id);

  //       expect(result.friends.length).to.equal(1);
  //       expect(result.friendCount).to.equal(1);
  //     });
  //   });

  //   describe('DELETE /api/users/:userId/friends/:friendId', function () {
  //     it('removes a friend', async function () {
  //       const { data: user } = await api.m18.users.post(newUser());
  //       const { data: friend } = await api.m18.users.post(newUser());
  //       await api.m18.users.addFriend(user._id, friend._id);
  //       const { data: added } = await api.m18.users.getOne(user._id);

  //       expect(added.friends.length).to.equal(1);
  //       expect(added.friendCount).to.equal(1);

  //       await api.m18.users.removeFriend(user._id, friend._id);
  //       const { data: result } = await api.m18.users.getOne(user._id);

  //       expect(result.friends.length).to.equal(0);
  //       expect(result.friendCount).to.equal(0);
  //     });
  //   });
  // });

  /**
   * Thoughts
   */
  describe('Thought routes', function () {
    describe('GET /api/thoughts', function () {
      it('gets all thoughts', async function () {
        const { data } = await api.m18.thoughts.getAll();

        expect(data, "get all thoughts didn't return an array").to.be.an('array');
        if (data.length > 0) {
          const [thought] = data;
          expect(thought, 'missing key(s)').to.include.all.keys(
            '_id',
            'username',
            'thoughtText',
            'createdAt',
            'reactions',
            'reactionCount',
          );
        }
      });
    });

    describe('GET /api/thoughts/:thoughtId', function () {
      it('gets one thought by id', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        const { data: thought } = await api.m18.thoughts.post(newThought(user._id, user.username));

        const { data: result } = await api.m18.thoughts.getOne(thought._id);

        expect(result).to.be.an('object');
        expect(thought, 'missing key(s)').to.include.all.keys(
          '_id',
          'username',
          'thoughtText',
          'createdAt',
          'reactions',
          'reactionCount',
        );
        expect(result.thoughtText).to.equal(thought.thoughtText);
        expect(result.username).to.equal(thought.username);
        expect(result.createdAt).to.equal(thought.createdAt);
      });
    });

    describe('POST /api/thoughts', function () {
      it('creates a thought', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        const body = newThought(user._id, user.username);

        const { data: result } = await api.m18.thoughts.post(body);

        expect(result).to.be.an('object');
        expect(result.thoughtText).to.equal(body.thoughtText);
        expect(result.username).to.equal(body.username);
      });

      it('adds created thought id to user thoughts array', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        await api.m18.thoughts.post(newThought(user._id, user.username));

        const { data: result } = await api.m18.users.getOne(user._id);

        // array of strings or thought documents, so just test that something was added
        expect(result.thoughts.length).to.equal(1);
      });
    });

    describe('PUT /api/thoughts/:thoughtId', function () {
      it('updates a thought by id', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        const { data: thought } = await api.m18.thoughts.post(newThought(user._id, user.username));
        const update = thoughtUpdate();
        const { data: result } = await api.m18.thoughts.put(thought._id, update);

        expect(result).to.be.an('object');
        expect(result.thoughtText).to.equal(update.thoughtText);
      });
    });

    describe('DELETE /api/thoughts/:thoughtId', function () {
      it('deletes a thought by id', async function () {
        const { data: before } = await api.m18.thoughts.getAll();
        const { data: user } = await api.m18.users.post(newUser());
        const { data: thought } = await api.m18.thoughts.post(newThought(user._id, user.username));
        const { data: after } = await api.m18.thoughts.getAll();

        // check thought was created
        expect(after.length - before.length).to.equal(1);

        // delete the thought
        await api.m18.thoughts.delete(thought._id);
        const { data: result } = await api.m18.thoughts.getAll();

        // check thought was removed
        expect(result.length).to.equal(before.length);
      });

      it('removes deleted thought from user thoughts array', async function () {
        const { data: user } = await api.m18.users.post(newUser());
        const { data: thought } = await api.m18.thoughts.post(newThought(user._id, user.username));
        const { data: test } = await api.m18.users.getOne(user._id);

        // check thought was added
        expect(test.thoughts.length).to.equal(1);

        // delete the thought
        await api.m18.thoughts.delete(thought._id);
        const { data: result } = await api.m18.users.getOne(user._id);

        // check thought was removed
        expect(result.thoughts.length).to.equal(0);
      });
    });

    // describe('POST /api/thoughts/:thoughtId/reactions', async function () {
    //   it('adds a reaction', function () {});
    // });

    // describe('DELETE /api/thoughts/:thoughtId/reactions/:reactionId', async function () {
    //   it('removes a reaction', function () {});
    // });
  });

  /**
   * BONUS
   */
  // describe('BONUS', function () {
  //   it("removes a deleted user's associated thoughts", function () {});
  // });
});
