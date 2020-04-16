import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Heading } from 'theme-ui';

import { getLanguageForLocale, LanguageContext } from '../utils';

const About = ({ locales }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <html lang={lng} />
        <title>
          {t('About', { lng })} - {t('site-name', { lng })}
        </title>
        {locales.map((locale) => (
          <link
            rel="alternate"
            href={`https://smartadviser.co.uk${t(location.pathname, {
              lng: getLanguageForLocale(locale),
            })}`}
            hrefLang={locale}
            key={locale}
          />
        ))}
        <meta
          name="description"
          content={t('meta:meta-description-about', { lng })}
        />
        <meta name="keywords" content={t('meta:meta-keywords', { lng })} />
      </Helmet>
      <Heading as="h1">
        {t('About', { lng })} ({lng})
      </Heading>
    </>
  );
};

export default About;
