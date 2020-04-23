import React, { useState } from 'react';
import { Formik } from 'formik';
import { Box, Button, Grid, Input, Label, Message, Textarea } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import fetch from 'unfetch';

import { LanguageContext } from '../../utils';

const ContactForm = ({ formEndpoint, id, sxp }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const [response, setResponse] = useState({
    isError: false,
    message: '',
  });

  return (
    <Box id={id} sx={{ ...sxp }}>
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            fetch(formEndpoint, {
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
                  setResponse({ isError: true, message: response.error });
                  setSubmitting(false);
                } else {
                  // Show the confirmation dialog
                  setResponse({
                    isError: false,
                    message: response.submission_text,
                  });
                  resetForm();
                }
              })
              .catch((error) => {
                setResponse({ isError: true, message: error });
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
          <>
            {response.message && (
              <Message
                my="3"
                bg={response.isError ? 'error' : 'highlight'}
                color={response.isError ? 'background' : 'text'}
              >
                {t(response.message, { lng })}
              </Message>
            )}
            <Grid
              as="form"
              onSubmit={handleSubmit}
              py="3"
              gap={[0, null, 4]}
              columns={[1, null, 2]}
            >
              <Box>
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
                  required="required"
                />
                {errors.name && touched.name && (
                  <Box mt={1} color="error">
                    {errors.name}
                  </Box>
                )}
                <Label htmlFor="phone" mt={3}>
                  {t('form-label:phone', { lng })} *
                </Label>
                <Input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  required="required"
                />
                {errors.phone && touched.phone && (
                  <Box mt={1} color="error">
                    {errors.phone}
                  </Box>
                )}
                <Label htmlFor="email" mt={3}>
                  {t('form-label:email', { lng })}
                </Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Box mt={1} color="error">
                    {errors.email}
                  </Box>
                )}
              </Box>
              <Box>
                <Label htmlFor="comment" mt={[3, null, 0]}>
                  {t('form-label:comment', { lng })}
                </Label>
                <Textarea
                  name="comment"
                  rows="6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  bg={isSubmitting ? 'muted' : 'primary'}
                  mt={3}
                >
                  {t('form-label:submit', { lng })}
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
