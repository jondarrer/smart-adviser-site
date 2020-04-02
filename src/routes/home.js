const React = require('react');
const { LanguageContext } = require('../components');

const Home = () => {
  const language = React.useContext(LanguageContext);

  return <h1>Home ({language})</h1>;
};

module.exports = Home;
