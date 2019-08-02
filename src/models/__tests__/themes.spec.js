import { init } from "@rematch/core";
import { themes } from '../themes';

let store;
const initialState = {
  data: [{
    id: 'white_theme',
    name: 'White',
  }, {
    id: 'dark_theme',
    name: 'Dark',
  }],
  selected: {
    id: 'white_theme',
    name: 'White',
  },
}

describe('locale model', () => {
  beforeEach(() => {
    store = init({
      models: { themes }
    });
  });

  it('should return the initial state', () => {
    expect(store.getState().themes).toStrictEqual(initialState);
  });

  it('should return with white theme selected', () => {
    store.dispatch.themes.changeTheme({ id: 'white_theme' });
    
    expect(store.getState().themes.selected.id).toBe('white_theme');
  });

  it('should return with dark theme selected', () => {
    store.dispatch.themes.changeTheme({ id: 'dark_theme' });
    
    expect(store.getState().themes.selected.id).toBe('dark_theme');
  });

  it('should not change when not allowed ids passed', () => {
    const { id } = store.getState().themes.selected;

    store.dispatch.themes.changeTheme({ id: 'random_theme' });
    
    expect(store.getState().themes.selected.id).toBe(id);
  });
});
