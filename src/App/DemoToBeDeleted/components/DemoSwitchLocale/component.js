import React from 'react';
import intl from 'react-intl-universal';

const DemoSwitchLocale = ({ locale, selected, changeLocale }) => (
  <>
    <li>{intl.get('app/switch_theme').d('Switch theme')}</li>
    {locale.map(({ id, name }) => (
      <li key={id}>
        <button
          type="button"
          disabled={id === selected}
          onClick={() => changeLocale({ id })}
        >
          {name}
        </button>
      </li>
    ))}
  </>
);

export default DemoSwitchLocale;
