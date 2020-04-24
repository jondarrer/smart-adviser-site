/* global describe it expect */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import LanguageSwitcher from './';
import { i18n as _utils, LanguageContext } from '../../utils';

describe('LanguageSwitcher', () => {
  it('should produce a link to the ro version of the page when displaying the en version', () => {
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
            href="/v-next/ro/despre"
            onClick={[Function]}
          >
            <img
              alt="RO flag"
              className="css-9taffg"
              src="/images/ro.png"
              width="24px"
            />
          </a>
        </button>
      </div>
    `);
  });
  it('should produce a link to the en version of the page when displaying the ro version', () => {
    const sut = renderer
      .create(
        <MemoryRouter initialEntries={['/ro/despre']}>
          <LanguageContext.Provider value="ro">
            <LanguageSwitcher languages={['en', 'ro']} />
          </LanguageContext.Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(sut).toMatchInlineSnapshot(`
      <div
        className="css-urkcus-LanguageSwitcher"
      >
        <button
          className="css-17qau8q"
        >
          <a
            href="/v-next/about"
            onClick={[Function]}
          >
            <img
              alt="EN flag"
              className="css-9taffg"
              src="/images/en.png"
              width="24px"
            />
          </a>
        </button>
        <span
          className="css-vurnku"
        />
      </div>
    `);
  });
});
