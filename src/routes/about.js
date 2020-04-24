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
        <meta
          property="og:title"
          content={`${t('business-name', { lng })} - ${t(
            'business-description',
            { lng }
          )}`}
        />
        <meta property="og:site_name" content={t('business-name', { lng })} />
        <meta
          property="og:url"
          content={`https://${t('site-name', { lng })}`}
        />
        <meta
          property="og:description"
          content={t('meta:meta-description-about', { lng })}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://smartadviser.co.uk/images/london-skyline.jpg"
        />
      </Helmet>
      <Heading as="h1">
        {t('About', { lng })} ({lng})
      </Heading>
    </>
  );
};

export default About;
