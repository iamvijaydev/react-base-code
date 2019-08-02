import { init } from "@rematch/core";
import { locale } from '../locale';

let store;
const initialState = {
  data: [{
    id: 'en-US',
    value: 'en-US',
    name: 'English',
  }, {
    id: 'fr-FR',
    value: 'fr-FR',
    name: 'French',
  }, {
    id: 'ja-JP',
    value: 'ja-JP',
    name: 'Japanese',
  }],
  selected: {
    id: 'en-US',
    value: 'en-US',
    name: 'English',
  },
}

describe('locale model', () => {
  beforeEach(() => {
    store = init({
      models: { locale }
    });
  });

  it('should return the initial state', () => {
    expect(store.getState().locale).toStrictEqual(initialState);
  });

  it('should return with en-US selected', () => {
    store.dispatch.locale.changeLocale({ id: 'en-US' });
    
    expect(store.getState().locale.selected.id).toBe('en-US');
  });

  it('should return with fr-FR selected', () => {
    store.dispatch.locale.changeLocale({ id: 'fr-FR' });
    
    expect(store.getState().locale.selected.id).toBe('fr-FR');
  });

  it('should return with ja-JP selected', () => {
    store.dispatch.locale.changeLocale({ id: 'ja-JP' });
    
    expect(store.getState().locale.selected.id).toBe('ja-JP');
  });

  it('should not change when not allowed ids passed', () => {
    const { id } = store.getState().locale.selected;

    store.dispatch.locale.changeLocale({ id: 'ran-RANDOM' });
    
    expect(store.getState().locale.selected.id).toBe(id);
  });
});
