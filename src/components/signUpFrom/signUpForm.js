import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {registration} from '../../actions';

let schema = yup.object().shape({
  username: yup.string().min(4).max(18).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

// .test('test-name', 'Username already exists ',
// function (value) {
// const {path, createError} = this;
// return AuthService.checkExistUsername(value)
// .catch(() => createError({path, message: 'Username already exists'}));
// })


class SignupForm extends React.Component {

  initialValues = {
    username: '',
    email: '',
    password: ''
  };


  submitForm = (values, {setSubmitting, setFieldError}) => {
    this.props.registration(values)
    .then(() => this.props.history.push("/signin"))
    .catch((err) => {
      if (err.status === 409) {
        setFieldError('email', err.message);
      }
    })
    .finally(() => setSubmitting(false));
  };

  render() {

    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Registration Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={this.initialValues}
              validationSchema={schema}
              onSubmit={this.submitForm}
            >
              {({touched, errors, isSubmitting}) => (
                <Form>

                  <div className={`form-group  ${
                    touched.username && errors.username ? 'has-danger' : ''}`
                  }>
                    <label htmlFor="username">Username:</label>
                    <Field type="text"
                           name="username"
                           className={`form-control  ${
                             touched.username && errors.username ? 'is-invalid' : ''}`
                           }
                           placeholder="Neeko_Jain"/>
                    <ErrorMessage name="username" className="invalid-feedback" component="div"/>
                  </div>

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
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {registration})(SignupForm));