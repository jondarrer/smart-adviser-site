const React = require('react');
const { LanguageContext } = require('../components');

const About = () => {
  const language = React.useContext(LanguageContext);

  return <h1>About ({language})</h1>;
};

module.exports = About;
