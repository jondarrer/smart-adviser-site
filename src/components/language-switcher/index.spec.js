/* global describe it expect */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import LanguageSwitcher from './';
import LanguageContext from '../language-context';
import '../i18n';

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
          </span>
        </li>
        <li>
          <a
            href="/ro/despre"
            onClick={[Function]}
          >
            RO
          </a>
        </li>
      </ul>
    `);
  });
});
