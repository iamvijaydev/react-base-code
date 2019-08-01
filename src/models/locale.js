import intl from 'react-intl-universal';

const data = [
  {
    id: 'en-US',
    value: 'en-US',
    name: 'English'
  },
  {
    id: 'fr-FR',
    value: 'fr-FR',
    name: 'French'
  },
  {
    id: 'ja-JP',
    value: 'ja-JP',
    name: 'Japanese'
  }
];

const selected = data[0];

const initialState = {
  data,
  selected
};

export const locale = {
  state: initialState,
  reducers: {
    updateLocale(state, currentLocale) {
      return {
        ...state,
        selected: data.find(({ id }) => id === currentLocale) || state.selected
      };
    }
  },
  effects: dispatch => ({
    async changeLocale(currentLocale) {
      console.log(currentLocale)
      await import(`../../config/locale/${currentLocale}.json`).then(res =>
        intl.init({
          currentLocale,
          locales: {
            [currentLocale]: res
          }
        })
      );

      dispatch.locale.updateLocale(currentLocale);
    }
  })
};
