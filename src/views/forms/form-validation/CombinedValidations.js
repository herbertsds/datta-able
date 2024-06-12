import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Card } from 'react-bootstrap';

const Schema = Yup.object().shape({
  email: Yup.string().required('This field is required')
});

// Async Validation
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const validate = () =>
  sleep(300).then(() => {
    return false;
  });

const isRequired = (message) => (value) => value ? undefined : message;

const CombinedValidations = () => (
  <Card>
    <Card.Header>
      <Card.Title as="h5">Formik - Pick a Username</Card.Title>
    </Card.Header>
    <Card.Body>
      <Formik
        validationSchema={Schema}
        validate={validate}
        initialValues={{
          username: '',
          email: ''
        }}
        onSubmit={(values) => {
          sleep(500).then(() => {
            alert(JSON.stringify(values, null, 2));
          });
        }}
      >
        {() => (
          <Form>
            <Row className="my-3 align-items-center">
              <Col sm={3}>
                <label htmlFor="username">Username</label>
              </Col>
              <Col sm={9}>
                <Field
                  className="form-control"
                  name="username"
                  validate={isRequired('This field is required')}
                  type="text"
                  placeholder="username"
                />
                <ErrorMessage className="text-c-red" name="username" />
              </Col>
            </Row>
            <Row className="my-3 align-items-center">
              <Col sm={3}>
                <label htmlFor="email">Email</label>
              </Col>
              <Col sm={9}>
                <Field
                  className="form-control"
                  name="email"
                  validate={isRequired('This field is required')}
                  type="text"
                  placeholder="email"
                />
                <ErrorMessage className="text-c-red" name="email" />
              </Col>
            </Row>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Card.Body>
  </Card>
);

export default CombinedValidations;
