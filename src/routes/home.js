import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { ServiceDescription, ContactForm } from '../components';
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
      <h1>{t('business-name', { lng })}</h1>
      <h2>{t('business-description', { lng })}</h2>
      <h3>{t('strapline', { lng })}</h3>
      <h4>{t('heading:online-services', { lng })}</h4>
      <p>{t('service:safe-fast-efficient', { lng })}</p>
      <div>
        <h4>
          <a href="#self-employment">{t('heading:self-employment', { lng })}</a>
        </h4>
        <h4>
          <a href="#limited-companies">
            {t('heading:limited-companies', { lng })}
          </a>
        </h4>
        <h4>
          <a href="#benefits">{t('heading:benefits', { lng })}</a>
        </h4>
        <h4>
          <a href="#other-services">{t('heading:other-services', { lng })}</a>
        </h4>
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
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
