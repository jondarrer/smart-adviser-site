import i18n from 'i18next/dist/cjs/i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Home: 'Home',
          About: 'About',
          'site-name': 'smartadviser.co.uk',
          'copyright-notice': '© 2020 Smart Adviser Ltd, all rights reserved',
          'company-no': 'Company No. 11519911',
          'company-registration': 'Registered in England & Wales.',
          'if-you-would-like-us-to-contact-you':
            'If you would like us to contact you please leave us the following details:',
          'business-name': 'Smart Adviser Ltd',
          'business-description': 'Accounting services in the UK',
          strapline: 'We are here to support your business!',
          'phone-number': '07731 398854',
          'phone-number-to-call': '+447731398854',
          tel: 'Tel',
          'please-let-us-know':
            'please let us know what services you are interested in:',
        },
        meta: {
          'meta-description-home':
            'Smart Adviser is an Accountancy firm in Milton Keynes working with businesses of all sizes. With many years experience in finance you can rely on us to help your business thrive.',
          'meta-description-about':
            'Smart Adviser is an Accountancy firm in Milton Keynes working with businesses of all sizes. We offer a variety of cost effective services to self-employed, limited companies and others.',
          'meta-keywords':
            'Accountants in Milton Keynes,Romanian Accountants,self-employment services,limited company services,payroll services,PAYE registration,tax advice,tax preparation,company formation,online company formation,tax advisor,cheap Accountant in Milton Keynes,preparation of VAT return,preparation of tax return,benefits',
        },
        nav: {
          '/': '/v-next',
          '/about': '/v-next/about',
          '/ro': '/v-next',
          '/ro/despre': '/v-next/about',
          '/v-next': '/v-next',
          '/v-next/about': '/v-next/about',
          '/v-next/ro': '/v-next',
          '/v-next/ro/despre': '/v-next/about',
        },
        heading: {
          'online-services': 'Online services',
          'self-employment': 'Self-employment',
          'limited-companies': 'Limited Companies',
          benefits: 'Benefits',
          'other-services': 'Other services',
          'service-request': 'Request service',
        },
        service: {
          'safe-fast-efficient': 'Safe, fast, efficient, no time wasted',
          'tax-return': 'Tax Return - £100',
          'registered-as-self-employed': 'Registered as self-employed - £50',
          'registered-in-cis': 'Registered in CIS - £30',
          'penalty-appeal': 'Penalty Appeal - from £50',
          'employment-history': 'Employment history (call to HMRC) - £30',
          'set-up-a-company': 'Set-up a company - £100',
          'strike-off-a-company': 'Strike-off a company - £100',
          'company-tax-return': 'Company Tax Return - £300',
          bookkeeping: 'Bookkeeping - from £200',
          'cis-vat-paye-reg': 'CIS, VAT, PAYE Registration - £75',
          'vat-return': 'VAT Return - £80',
          paye: 'PAYE - £300',
          'cis-monthly-returns': 'CIS Monthly Returns - from £200',
          'universal-credits': 'Universal Credit - £150',
          'child-benefit': 'Child Benefit - £70',
          'maternity-allowance': 'Maternity Allowance - £80',
          cv: 'CV (Curriculum Vitae)',
          'complete-different-forms': 'Complete different forms',
          'equivalent-uk-qualifications': 'Equivalent UK qualifications',
        },
        'form-label': {
          name: 'Name:',
          phone: 'Telephone No:',
          email: 'Email:',
          comment: 'Please tell us your enquiry',
          submit: 'Submit',
        },
        'form-error': {
          required: 'Required',
          'invalid-email-address': 'Invalid email address',
        },
        'form-response': {
          'thank-you': "Thank you, we'll be in touch with you shortly.",
        },
      },
      ro: {
        translation: {
          Home: 'Casa',
          About: 'Despre',
          'site-name': 'smartadviser.co.uk/ro',
          'copyright-notice':
            '© 2020 Smart Adviser Ltd, toate drepturile rezervate',
          'company-no': 'Nr. Companie 11519911',
          'company-registration': 'Înregistrat în Anglia și Țara Galilor.',
          'if-you-would-like-us-to-contact-you':
            'Daca doriti sa fiti contactat, va rugam sa lasati urmatoarele detalii:',
          'business-name': 'Smart Adviser Ltd',
          'business-description': 'Servicii Contabilitate in UK',
          strapline: 'Suntem aici pentru a-ti sprijini afacerea!',
          'phone-number': '+44 7731 398854',
          'phone-number-to-call': '+447731398854',
          tel: 'Tel',
          'please-let-us-know':
            'vă rugăm să ne spuneți ce servicii vă interesează:',
        },
        meta: {
          'meta-description-home':
            'Smart Adviser este o firmă de contabilitate din Milton Keynes, Marea Britanie care lucrează cu companii de toate dimensiunile. Cu mulți ani de experiență în finanțe, vă puteți baza pe noi pentru a vă ajuta afacerea să prospere.',
          'meta-description-about':
            'Smart Adviser este o firmă de contabilitate din Milton Keynes, Marea Britanie care lucrează cu companii de toate dimensiunile. Oferim o varietate de servicii eficiente din punct de vedere al costurilor pentru angajați independenți, companii cu capital limitat și altele.',
          'meta-keywords':
            'Contabili din Milton Keynes, Contabili români, servicii de angajare independentă, servicii companie limitată, servicii de salarizare, înregistrare PAYE, consultanță fiscală, pregătire fiscală, formare companie, formare companie online, consilier fiscal, contabil ieftin în Milton Keynes, pregătirea returului de TVA, întocmirea declarației fiscale, beneficii',
        },
        nav: {
          '/': '/v-next/ro',
          '/about': '/v-next/ro/despre',
          '/ro': '/v-next/ro',
          '/ro/despre': '/v-next/ro/despre',
          '/v-next': '/v-next/ro',
          '/v-next/about': '/v-next/ro/despre',
          '/v-next/ro': '/v-next/ro',
          '/v-next/ro/despre': '/v-next/ro/despre',
        },
        heading: {
          'online-services': 'Servicii Online',
          'self-employment': 'Self-employment',
          'limited-companies': 'Companii',
          benefits: 'Beneficii',
          'other-services': 'Alte servicii',
          'service-request': 'Serviciul solicitat',
        },
        service: {
          'safe-fast-efficient': 'Sigur, rapid, eficient, fara timp pierdut',
          'tax-return': 'Declaratia fiscala - 100 GBP',
          'registered-as-self-employed':
            'Inregistrare ca self-employed - 50 GBP',
          'registered-in-cis': 'Inregistrare in CIS (activare UTR) - 30 GBP',
          'penalty-appeal': 'Anulare penalitati - de la 50 GBP',
          'employment-history': 'Istoric de angajare (apel la HMRC) - 30 GBP',
          'set-up-a-company': 'Infiintare companie - 100 GBP',
          'strike-off-a-company': 'Inchidere companie - 100 GBP',
          'company-tax-return': 'Company Tax Return - 300 GBP',
          bookkeeping: 'Bookkeeping - de la 200 GBP',
          'cis-vat-paye-reg': 'Inregistrare CIS, TVA, Salarizare - 75 GBP',
          'vat-return': 'Declaratia de TVA - 80 GBP',
          paye: 'Salarizare pentru companie - 300 GBP',
          'cis-monthly-returns':
            'Declaratii lunare pentru subcontractori - de la 200 GBP',
          'universal-credits': 'Universal Credit - 150 GBP',
          'child-benefit': 'Child Benefit - 70 GBP',
          'maternity-allowance': 'Maternity Allowance - 80 GBP',
          cv: 'CV (Curriculum Vitae)',
          'complete-different-forms': 'Completari formulare diverse',
          'equivalent-uk-qualifications': 'Echivalare studii prin UK Naric',
        },
        'form-label': {
          name: 'Numele:',
          phone: 'Nr. Telefon:',
          email: 'E-mail:',
          comment: 'Va rugam sa ne comunicati cerinta dvs.',
          submit: 'Trimite',
        },
        'form-error': {
          required: 'Necesar',
          'invalid-email-address': 'Adresa email invalida',
        },
        'form-response': {
          'thank-you': 'Vă mulțumim, în curând vom fi în legătură cu dvs.',
        },
      },
    },
  });

export default i18n;
