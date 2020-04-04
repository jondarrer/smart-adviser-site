import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../components';

const Home = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <h1>
      {t('Home', { lng })} ({lng})
    </h1>
  );
};

export default Home;
