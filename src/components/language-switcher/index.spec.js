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
      <div
        className="css-urkcus-LanguageSwitcher"
      >
        <span
          className="css-vurnku"
        />
        <button
          className="css-17qau8q"
        >
          <a
            href="/ro/despre"
            onClick={[Function]}
          >
            <img
              className="css-9taffg"
              src="/images/ro.png"
              width="24px"
            />
          </a>
        </button>
      </div>
    `);
  });
});
