import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { getLanguageForLocale, LanguageContext } from '../utils';

const Home = ({ locales }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <html lang={lng} />
        <title>
          {t('Home', { lng })} - {t('site-name', { lng })}
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
          content={t('meta:meta-description-home', { lng })}
        />
        <meta name="keywords" content={t('meta:meta-keywords', { lng })} />
      </Helmet>
      <h1>
        {t('Home', { lng })} ({lng})
      </h1>
      <div>
        <h2>{t('heading:self-employment', { lng })}</h2>
        <h2>{t('heading:limited-companies', { lng })}</h2>
        <h2>{t('heading:benefits', { lng })}</h2>
        <h2>{t('heading:other-services', { lng })}</h2>
      </div>
    </>
  );
};

export default Home;
