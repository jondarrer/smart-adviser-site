import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Grid, Heading, Link } from 'theme-ui';

import { ServiceDescription, ContactForm } from '../components';
import {
  getLanguageForLocale,
  LanguageContext,
  useSmoothScroll,
} from '../utils';

import SuitIcon from '../icons/1602894/029-suit.svg';
import SuitcaseIcon from '../icons/1602894/024-suitcase.svg';
import MagnifyingGlassIcon from '../icons/1602894/042-magnifying-glass.svg';
import Accounting2Icon from '../icons/1602894/040-accounting-2.svg';

import CalculatorIcon from '../icons/1602894/001-calculator.svg';
import Calculator1Icon from '../icons/1602894/003-calculator-1.svg';
import ArchiveIcon from '../icons/1602894/033-archive.svg';
import AnswerIcon from '../icons/1602894/018-answer.svg';
import Archive1Icon from '../icons/1602894/043-archive-1.svg';

import BankIcon from '../icons/1602894/044-bank.svg';
import TrashIcon from '../icons/1602894/049-trash.svg';
// CalculatorIcon
import BookIcon from '../icons/1602894/037-book.svg';
import ClipboardIcon from '../icons/1602894/032-clipboard.svg';
// CalculatorIcon
import MoneyIcon from '../icons/1602894/021-money.svg';
import GraphIcon from '../icons/1602894/011-graph.svg';

import GearIcon from '../icons/1602894/030-gear.svg';
import PiggyBankIcon from '../icons/1602894/012-piggy-bank.svg';
import Accounting1Icon from '../icons/1602894/023-accounting-1.svg';

import PlanningIcon from '../icons/1602894/038-planning.svg';
import NewsIcon from '../icons/1602894/035-news.svg';
import CardIcon from '../icons/1602894/025-card.svg';

const heroImageSrc = '/images/3804149-pen-and-pad-of-lined-paper.jpg';

const Home = ({ locales, formEndpoint }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const smoothScroll = useSmoothScroll({ '0': 44, '640': 0 });

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
            href={`https://smartadviser.co.uk${t('nav:' + location.pathname, {
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
          content={t('meta:meta-description-home', { lng })}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://smartadviser.co.uk${heroImageSrc}`}
        />
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
      <Box
        p={['3', '3', '4']}
        sx={{
          backgroundImage: `url(${heroImageSrc})`,
          backgroundPositionX: '0',
          backgroundPositionY: 'center',
          backgroundSize: ['145%', '135%', '113%', '128%', '117%'],
          textAlign: 'center',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: ['268px', null, '364px', '436px'],
          }}
        >
          <Heading as="h2" color="primary">
            {t('business-description', { lng })}
          </Heading>
          <Box>
            <Heading
              as="h1"
              color="primary"
              sx={{
                fontSize: ['36px', null, '48px', '64px'],
                margin: '0 auto',
                maxWidth: ['256px', null, '292px', '100%'],
              }}
            >
              {t('strapline', { lng })}
            </Heading>
            <Heading as="h4" mt={1} color="primary">
              {t('service:safe-fast-efficient', { lng })}
            </Heading>
          </Box>
          <Button
            variant="secondary"
            mt={3}
            href="#contact-form"
            onClick={(e) => smoothScroll(e)}
            sx={{
              maxWidth: '140px',
              margin: '0 auto',
            }}
          >
            {t('heading:service-request', { lng })}
          </Button>
          {/*<Grid
            gap={[2, null, 4]}
            columns={[1, null, 4]}
            marginTop={[3, null, 4]}
          >
            <Box as="h4">
              <Link href="#self-employment" onClick={(e) => smoothScroll(e)}>
                {t('heading:self-employment', { lng })}
              </Link>
            </Box>
            <Box as="h4">
              <Link href="#limited-companies" onClick={(e) => smoothScroll(e)}>
                {t('heading:limited-companies', { lng })}
              </Link>
            </Box>
            <Box as="h4">
              <Link href="#benefits" onClick={(e) => smoothScroll(e)}>
                {t('heading:benefits', { lng })}
              </Link>
            </Box>
            <Box as="h4">
              <Link href="#other-services" onClick={(e) => smoothScroll(e)}>
                {t('heading:other-services', { lng })}
              </Link>
            </Box>
          </Grid>*/}
        </Container>
      </Box>
      <Container as="p" px={['3', '3', '4']} pt={['3', '3', '4']}>
        <Link
          href="#contact-form"
          onClick={(e) => smoothScroll(e)}
          sx={{ fontWeight: 'bold' }}
        >
          {t('heading:service-request', { lng })}
        </Link>{' '}
        - {t('please-let-us-know', { lng })}
      </Container>
      <Container>
        <Grid
          gap={[3, null, 4]}
          columns={[1, null, 2]}
          px={['3', '3', '4']}
          pt={['3', '3', '4']}
        >
          <ServiceDescription
            title="heading:self-employment"
            id="self-employment"
            Icon={SuitIcon}
            subServices={[
              { text: 'service:tax-return', Icon: CalculatorIcon },
              {
                text: 'service:registered-as-self-employed',
                Icon: Archive1Icon,
              },
              { text: 'service:registered-in-cis', Icon: Archive1Icon },
              { text: 'service:penalty-appeal', Icon: AnswerIcon },
              { text: 'service:employment-history', Icon: ArchiveIcon },
            ]}
          ></ServiceDescription>
          <ServiceDescription
            title="heading:limited-companies"
            id="limited-companies"
            Icon={SuitcaseIcon}
            subServices={[
              { text: 'service:set-up-a-company', Icon: BankIcon },
              { text: 'service:strike-off-a-company', Icon: TrashIcon },
              { text: 'service:company-tax-return', Icon: CalculatorIcon },
              { text: 'service:bookkeeping', Icon: BookIcon },
              { text: 'service:cis-vat-paye-reg', Icon: ClipboardIcon },
              { text: 'service:vat-return', Icon: CalculatorIcon },
              { text: 'service:paye', Icon: MoneyIcon },
              { text: 'service:cis-monthly-returns', Icon: GraphIcon },
            ]}
          ></ServiceDescription>
          <ServiceDescription
            title="heading:benefits"
            id="benefits"
            Icon={MagnifyingGlassIcon}
            subServices={[
              { text: 'service:universal-credits', Icon: GearIcon },
              { text: 'service:child-benefit', Icon: PiggyBankIcon },
              { text: 'service:maternity-allowance', Icon: Accounting1Icon },
            ]}
          ></ServiceDescription>
          <ServiceDescription
            title="heading:other-services"
            id="other-services"
            Icon={Accounting2Icon}
            subServices={[
              { text: 'service:cv', Icon: PlanningIcon },
              { text: 'service:complete-different-forms', Icon: NewsIcon },
              { text: 'service:equivalent-uk-qualifications', Icon: CardIcon },
            ]}
          ></ServiceDescription>
        </Grid>
      </Container>
      <Container>
        <ContactForm
          formEndpoint={formEndpoint}
          id="contact-form"
          sxp={{ p: ['3', '3', '4'] }}
        />
      </Container>
    </>
  );
};

export default Home;
