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
        <MemoryRouter initialEntries={['/despre']}>
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
        <a
          className="css-1wd5j00"
          href="/en/about"
          onClick={[Function]}
        >
          <img
            alt="EN flag"
            className="css-9taffg"
            src="/images/en.png"
          />
        </a>
        <span
          className="css-vurnku"
        />
      </div>
    `);
  });
  it('should produce a link to the en version of the page when displaying the ro version', () => {
    const sut = renderer
      .create(
        <MemoryRouter initialEntries={['/en/about']}>
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
        <a
          className="css-1wd5j00"
          href="/en/about"
          onClick={[Function]}
        >
          <img
            alt="RO flag"
            className="css-9taffg"
            src="/images/ro.png"
          />
        </a>
      </div>
    `);
  });
});
