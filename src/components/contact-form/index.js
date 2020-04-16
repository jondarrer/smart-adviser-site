import React from 'react';
import { Formik } from 'formik';
import { Box, Button, Label, Input, Textarea, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import fetch from 'unfetch';

import { LanguageContext } from '../../utils';

const ContactForm = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Box>
      <Box as="h2">{t('if-you-would-like-us-to-contact-you', { lng })}</Box>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          comment: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = t('form-error:invalid-email-address', { lng });
          }
          if (!values.name) {
            errors.name = t('form-error:required', { lng });
          }
          if (!values.phone) {
            errors.phone = t('form-error:required', { lng });
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            fetch('https://app.99inbound.com/api/e/091MZdt8', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify(values),
            })
              .then((response) => {
                return response.json();
              })
              .then((response) => {
                console.log(response);
                if (response.error) {
                  // Show the error
                } else {
                  // Show the confirmation dialog
                }
                setSubmitting(false);
              });
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box as="form" onSubmit={handleSubmit} my="3">
            <Box sx={{ position: 'absolute', left: '-5000px' }}>
              <Input
                type="checkbox"
                name="liberal_ruby_checked_energy"
                value="1"
                tabindex="-1"
                autocomplete="no"
              />
            </Box>
            <Label htmlFor="name">{t('form-label:name', { lng })} *</Label>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              mb={3}
            />
            {errors.name && touched.name && <Box mb="3">{errors.name}</Box>}
            <Label htmlFor="phone">{t('form-label:phone', { lng })} *</Label>
            <Input
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              mb={3}
            />
            {errors.phone && touched.phone && <Box mb="3">{errors.phone}</Box>}
            <Label htmlFor="email">{t('form-label:email', { lng })}</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              mb={3}
            />
            {errors.email && touched.email && <Box mb="3">{errors.email}</Box>}
            <Label htmlFor="comment">{t('form-label:comment', { lng })}</Label>
            <Textarea
              name="comment"
              rows="6"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
              mb={3}
            />
            <Button type="submit" disabled={isSubmitting}>
              {t('form-label:submit', { lng })}
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
