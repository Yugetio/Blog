import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import { AuthService } from '../../services'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const submitForm = (values, {setSubmitting}) => {
  setSubmitting(false);
  AuthService.signIn(values)
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

const SigninForm = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Login Form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={submitForm}
          >
            {({touched, errors, isSubmitting}) => (
              <Form>

                <div className={`form-group  ${
                  touched.email && errors.email ? 'has-danger' : ''}`
                }>
                  <label htmlFor="email">Email:</label>
                  <Field type="email"
                         name="email"
                         className={`form-control  ${
                           touched.email && errors.email ? 'is-invalid' : ''}`
                         }
                         placeholder="neeko@example.com"/>
                  <ErrorMessage name="email"
                                className="invalid-feedback"
                                component="div"/>
                </div>

                <div className={`form-group  ${
                  touched.password && errors.password ? 'has-danger' : ''}`
                }>
                  <label htmlFor="password">Password</label>
                  <Field type="password"
                         name="password"
                         className={`form-control  ${
                           touched.password && errors.password ? 'is-invalid' : ''}`
                         }
                         placeholder="password"/>
                  <ErrorMessage name="password"
                                className="invalid-feedback"
                                component="div"/>
                </div>

                <button type="submit"
                        className="btn btn-primary btn-block"
                        disabled={isSubmitting}>
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;