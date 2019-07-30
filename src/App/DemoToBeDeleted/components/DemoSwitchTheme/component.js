import React from 'react';
import intl from 'react-intl-universal';

const DemoSwitchTheme = ({ themes, selected, changeTheme }) => (
  <>
    <li>{intl.get('app/switch_theme').d('Switch theme')}</li>
    {themes.map(({ id, name }) => (
      <li key={id}>
        <button
          type="button"
          disabled={id === selected}
          onClick={() => changeTheme({ id })}
        >
          {name}
        </button>
      </li>
    ))}
  </>
);

export default DemoSwitchTheme;
