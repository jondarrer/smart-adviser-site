/* global describe it expect */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import LanguageSwitcher from './';
import { i18n as _utils, LanguageContext } from '../../utils';

describe('LanguageSwitcher', () => {
  it('should produce non-link for current language (en) and a link to the ro version of the page', () => {
    const sut = renderer
      .create(
        <MemoryRouter initialEntries={['/about']}>
          <LanguageContext.Provider value="en">
            <LanguageSwitcher languages={['en', 'ro']} />
          </LanguageContext.Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(sut).toMatchInlineSnapshot(`
      <ul>
        <li>
          <span>
            EN
            <img
              className="css-9taffg"
              src="/images/en.png"
              width="24px"
            />
          </span>
        </li>
        <li>
          <a
            href="/ro/despre"
            onClick={[Function]}
          >
            RO
            <img
              className="css-9taffg"
              src="/images/ro.png"
              width="24px"
            />
          </a>
        </li>
      </ul>
    `);
  });
});
