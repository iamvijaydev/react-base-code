import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';

export const DashboardLayout = ({
  children,
  themes,
  selectedThemeId,
  changeTheme,
  locale,
  selectedLocaleId,
  changeLocale
}) => {
  return (
    <main>
      <aside>
        <h1>React Base Code</h1>
        <div>
          <a href="https://github.com/iamvijaydev/react-base-code">Github</a>
        </div>
        <ul>
          <li>{intl.get('app/routing').d('Routing')}</li>
          <li>
            <Link to="/">{intl.get('menu/home').d('Home')}</Link>
          </li>
          <li>
            <Link to="/about">{intl.get('menu/about').d('About')}</Link>
          </li>
          <li>
            <Link to="/topics">{intl.get('menu/topics').d('Topics')}</Link>
          </li>
          <li>
            <Link to="/link-does-not-exist">404</Link>
          </li>
          <
          <li>{intl.get('app/switch_theme').d('Switch theme')}</li>
          {themes.map(({ id, name }) => (
            <li key={id}>
              <button
                type="button"
                disabled={id === selectedThemeId}
                onClick={() => changeTheme({ id })}
              >
                {name}
              </button>
            </li>
          ))}
          <li>{intl.get('app/switch_language').d('Switch language')}</li>
          {locale.map(({ id, name }) => (
            <li key={id}>
              <button
                type="button"
                disabled={id === selectedLocaleId}
                onClick={() => changeLocale({ id })}
              >
                {name}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              disabled={id === selectedLocaleId}
              onClick={() => changeLocale({ id })}
            >
              {name}
            </button>
          </li>
        </ul>
      </aside>
      <section>{children}</section>
    </main>
  );
};
