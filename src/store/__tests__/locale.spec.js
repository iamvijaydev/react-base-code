import locale, { initalState } from '../data/locale';

describe('locale reducer', () => {
  it('should return the initial state', () => {
    expect(locale(undefined, {})).toBe(initalState);
  });

  it('should return with en-US selected', () => {
    expect(locale(initalState, {
      type: 'CHANGE_LOCALE',
      id: 'en-US',
    }).selected.id).toBe('en-US');
  });

  it('should return with fr-FR selected', () => {
    expect(locale(initalState, {
      type: 'CHANGE_LOCALE',
      id: 'fr-FR',
    }).selected.id).toBe('fr-FR');
  });

  it('should return with ja-JP selected', () => {
    expect(locale(initalState, {
      type: 'CHANGE_LOCALE',
      id: 'ja-JP',
    }).selected.id).toBe('ja-JP');
  });
});
