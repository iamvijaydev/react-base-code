import React from 'react';
import intl from 'react-intl-universal';
import { arrayOf, shape, string, func } from 'prop-types';

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

DemoSwitchTheme.propTypes = {
  themes: arrayOf(shape({ id: string, name: string })).isRequired,
  selected: string.isRequired,
  changeTheme: func.isRequired
};

export default DemoSwitchTheme;
