import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { getLanguageForLocale, LanguageContext } from '../utils';

const About = ({ locales }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <html lang={lng} />
        <title>{t('About', { lng })} - smartadviser.co.uk</title>
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
          content={t('meta-description-about', { lng })}
        />
        <meta name="keywords" content={t('meta-keywords', { lng })} />
      </Helmet>
      <h1>
        {t('About', { lng })} ({lng})
      </h1>
    </>
  );
};

export default About;
