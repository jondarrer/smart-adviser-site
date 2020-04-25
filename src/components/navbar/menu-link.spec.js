/* global describe it expect */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import MenuLink from './menu-link';
import { i18n as _utils, LanguageContext } from '../../utils';

describe('MenuLink', () => {
  it("should produce a link when the page doesn't match", () => {
    const sut = renderer
      .create(
        <MemoryRouter initialEntries={['/about']}>
          <MenuLink to="/not-about">About</MenuLink>
        </MemoryRouter>
      )
      .toJSON();
    expect(sut).toMatchInlineSnapshot(`
      <a
        className="css-4k2eid"
        href="/not-about"
        onClick={[Function]}
      >
        About
      </a>
    `);
  });
  it('should produce a when the page matches', () => {
    const sut = renderer
      .create(
        <MemoryRouter initialEntries={['/about']}>
          <MenuLink to="/about">About</MenuLink>
        </MemoryRouter>
      )
      .toJSON();
    expect(sut).toMatchInlineSnapshot(`
      <span
        className="css-1um1suj-MenuLink"
      >
        About
      </span>
    `);
  });
});
