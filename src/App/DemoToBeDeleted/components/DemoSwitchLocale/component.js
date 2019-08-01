import React from 'react';
import intl from 'react-intl-universal';
import { arrayOf, shape, string, func } from 'prop-types';

import { ListItem, ListSubItem } from '../../styled';

const DemoSwitchLocale = ({ locale, selected, changeLocale }) => (
  <>
    <ListItem>{intl.get('app/switch_theme').d('Switch theme')}</ListItem>
    {locale.map(({ id, name }) => (
      <ListSubItem key={id}>
        <button
          type="button"
          disabled={id === selected}
          onClick={() => changeLocale(id)}
        >
          {name}
        </button>
      </ListSubItem>
    ))}
  </>
);

DemoSwitchLocale.propTypes = {
  locale: arrayOf(shape({ id: string, name: string })).isRequired,
  selected: string.isRequired,
  changeLocale: func.isRequired
};

export default DemoSwitchLocale;
