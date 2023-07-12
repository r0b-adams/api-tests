import { describe, it } from 'mocha';
// import { expect } from 'chai';

describe('M18 Social Network API', () => {
  describe('User routes', () => {
    /**
     * Users
     */
    describe('GET /api/users/:userId', () => {
      it('gets one user by id', () => {});
    });

    describe('GET /api/users', () => {
      it('gets all users', () => {});
    });

    describe('POST /api/users', () => {
      it('creates a user', () => {});
    });

    describe('PUT /api/users/:userId', () => {
      it('updates a user by id', () => {});
    });

    describe('DELETE /api/users/:userId', () => {
      it('deletes a user by id', () => {});
    });

    describe('POST /api/users/:userId/friends/:friendId - ', () => {
      it('adds a friend', () => {});
    });

    describe('DELETE /api/users/:userId/friends/:friendId', () => {
      it('removes a friend', () => {});
    });
  });

  /**
   * Thoughts
   */
  describe('Thought routes', () => {
    describe('POST /api/thoughts', () => {
      it('creates a thought', () => {});
      it('adds created thought id to user thoughts array', () => {});
    });

    describe('GET /api/thoughts/:thoughtId', () => {
      it('gets one thought', () => {});
    });

    describe('GET /api/thoughts', () => {
      it('gets all thoughts', () => {});
    });

    describe('PUT /api/thoughts/:thoughtId', () => {
      it('updates a thought', () => {});
    });

    describe('DELETE /api/thoughts/:thoughtId', () => {
      it('deletes a thought', () => {});
      it('removes delete thought id from user thoughts array', () => {});
    });

    describe('POST /api/thoughts/:thoughtId/reactions', () => {
      it('adds a reaction', () => {});
    });

    describe('DELETE /api/thoughts/:thoughtId/reactions/:reactionId', () => {
      it('removes a reaction', () => {});
    });
  });

  /**
   * BONUS
   */
  describe('BONUS', () => {
    it("removes a deleted user's associated thoughts", () => {});
  });
});
