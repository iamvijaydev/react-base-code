import React from 'react';
import intl from 'react-intl-universal';
import { arrayOf, shape, string, func } from 'prop-types';

import { ListItem, ListSubItem } from '../../styled';

const DemoSwitchTheme = ({ themes, selected, changeTheme }) => (
  <>
    <ListItem>{intl.get('app/switch_theme').d('Switch theme')}</ListItem>
    {themes.map(({ id, name }) => (
      <ListSubItem key={id}>
        <button
          type="button"
          disabled={id === selected}
          onClick={() => changeTheme({ id })}
        >
          {name}
        </button>
      </ListSubItem>
    ))}
  </>
);

DemoSwitchTheme.propTypes = {
  themes: arrayOf(shape({ id: string, name: string })).isRequired,
  selected: string.isRequired,
  changeTheme: func.isRequired
};

export default DemoSwitchTheme;
