import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Heading, Link } from 'theme-ui';

import { getLanguageForLocale, LanguageContext } from '../utils';

const Attributions = ({ locales }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <html lang={lng} />
        <title>
          {t('Attributions', { lng })} - {t('site-name', { lng })}
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
          content={t('meta-description-about', { lng })}
        />
        <meta name="keywords" content={t('meta-keywords', { lng })} />
      </Helmet>
      <Heading as="h1">
        {t('Attributions', { lng })} ({lng})
      </Heading>
      <Box as="p">
        Icons made by{' '}
        <Link href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </Link>{' '}
        from{' '}
        <Link href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </Link>
      </Box>
    </>
  );
};

export default Attributions;
