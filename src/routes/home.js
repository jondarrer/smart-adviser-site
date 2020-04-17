import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Grid, Heading, Link } from 'theme-ui';

import { ServiceDescription, ContactForm } from '../components';
import { getLanguageForLocale, LanguageContext } from '../utils';

const Home = ({ locales, formEndpoint }) => {
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
        <script type="application/ld+json">
          {`{
            "@context": {
              "@id": "https://schema.org",
              "name": {
                "@id": "https://schema.org/name",
                "@language": "${lng}",
              },
              "url": {
                "@id": "https://schema.org/url",
                "@language": "${lng}",
              },
            },
            "@type": "Organization",
            "url": "https://${t('site-name', { lng })}",
            "name": "${t('business-name', { lng })}",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "${t('phone-number-to-call', { lng })}",
              "contactType": "customer service",
            },
          }`}
        </script>
      </Helmet>
      <Heading as="h1">{t('business-name', { lng })}</Heading>
      <Heading as="h2">{t('business-description', { lng })}</Heading>
      <Heading as="h3">{t('strapline', { lng })}</Heading>
      <Heading as="h4">{t('heading:online-services', { lng })}</Heading>
      <Box as="p">{t('service:safe-fast-efficient', { lng })}</Box>
      <Box>
        <Heading as="h4">
          <Link href="#self-employment">
            {t('heading:self-employment', { lng })}
          </Link>
        </Heading>
        <Heading as="h4">
          <Link href="#limited-companies">
            {t('heading:limited-companies', { lng })}
          </Link>
        </Heading>
        <Heading as="h4">
          <Link href="#benefits">{t('heading:benefits', { lng })}</Link>
        </Heading>
        <Heading as="h4">
          <Link href="#other-services">
            {t('heading:other-services', { lng })}
          </Link>
        </Heading>
        <Heading as="h4">
          <Link href="#contact-form">
            {t('heading:service-request', { lng })}
          </Link>
        </Heading>
      </Box>
      <Grid gap={2} columns={[1, 2]}>
        <ServiceDescription
          title="heading:self-employment"
          id="self-employment"
          subServices={[
            'service:tax-return',
            'service:registered-as-self-employed',
            'service:registered-in-cis',
            'service:penalty-appeal',
            'service:employment-history',
          ]}
          sx={{ bg: ['muted', 'background'] }}
        ></ServiceDescription>
        <ServiceDescription
          title="heading:limited-companies"
          id="limited-companies"
          subServices={[
            'service:set-up-a-company',
            'service:strike-off-a-company',
            'service:company-tax-return',
            'service:bookkeeping',
            'service:cis-vat-paye-reg',
            'service:vat-return',
            'service:paye',
            'service:cis-monthly-returns',
          ]}
        ></ServiceDescription>
        <ServiceDescription
          title="heading:benefits"
          id="benefits"
          subServices={[
            'service:universal-credits',
            'service:child-benefit',
            'service:maternity-allowance',
          ]}
          sx={{ bg: ['muted', 'background'] }}
        ></ServiceDescription>
        <ServiceDescription
          title="heading:other-services"
          id="other-services"
          subServices={[
            'service:cv',
            'service:complete-different-forms',
            'service:equivalent-uk-qualifications',
          ]}
        ></ServiceDescription>
      </Grid>
      <ContactForm formEndpoint={formEndpoint} id="contact-form" />
    </>
  );
};

export default Home;
