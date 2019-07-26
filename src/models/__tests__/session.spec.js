import themes from '../session';

describe('session reducer', () => {
  it('should return the initial state', () => {
    expect(themes(undefined, {})).toEqual({});
  });

  it('should return user session', () => {
    expect(themes({}, {
      type: 'FILL',
    })).toEqual({
      uid: 10001,
      name: 'user',
    });
  });
});
