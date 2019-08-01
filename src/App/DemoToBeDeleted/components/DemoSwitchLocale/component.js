import React from 'react';
import intl from 'react-intl-universal';
import { arrayOf, shape, string, func } from 'prop-types';

const DemoSwitchLocale = ({ locale, selected, changeLocale }) => (
  <>
    <li>{intl.get('app/switch_theme').d('Switch theme')}</li>
    {locale.map(({ id, name }) => (
      <li key={id}>
        <button
          type="button"
          disabled={id === selected}
          onClick={() => changeLocale(id)}
        >
          {name}
        </button>
      </li>
    ))}
  </>
);

DemoSwitchLocale.propTypes = {
  locale: arrayOf(shape({ id: string, name: string })).isRequired,
  selected: string.isRequired,
  changeLocale: func.isRequired
};

export default DemoSwitchLocale;
