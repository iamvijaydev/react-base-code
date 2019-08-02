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

const initialState = {
  data,
  selected: { id: '' }
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
    async changeLocale(currentLocale, state) {
      const hasLocale = state.locale.data.find(({ id }) => id === currentLocale);

      if (hasLocale) {
        await import(`Config/locale/${currentLocale}.json`).then(res =>
          intl.init({
            currentLocale,
            locales: {
              [currentLocale]: res
            }
          })
        );

        dispatch.locale.updateLocale(currentLocale);
      }
    }
  })
};
