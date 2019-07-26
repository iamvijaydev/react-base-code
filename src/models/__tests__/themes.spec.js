import themes, { initalState } from '../themes';

describe('theme reducer', () => {
  it('should return the initial state', () => {
    expect(themes(undefined, {})).toBe(initalState);
  });

  it('should return with white theme selected', () => {
    expect(themes(initalState, {
      type: 'CHANGE_THEME',
      id: 'white_theme',
    }).selected.id).toBe('white_theme');
  });

  it('should return with black theme selected', () => {
    expect(themes(initalState, {
      type: 'CHANGE_THEME',
      id: 'dark_theme',
    }).selected.id).toBe('dark_theme');
  });
});
