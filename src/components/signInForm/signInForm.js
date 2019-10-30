import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  getProfile, requestAuth,
  failureAuth, successAuth
} from '../../actions'
import {AuthService} from "../../services";
import {bindActionCreators} from "redux";


const schema = yup.object().shape({
  email: yup.string().email().label('Email').required(),
  password: yup.string().label('Password').min(6).required()
});

class SigninForm extends React.Component {

  // componentDidUpdate() {
  //   if (this.props.user.loading && this.props.user.userData.avatar) {
  //     console.log(this.props.user.loading, this.props.user.userData.avatar);
  //
  //     this.props.history.push('/');
  //   }
  // }


  submitForm = (values, actions) => {
    this.props.requestAuth();
    AuthService.signIn(values)
    .then((data) => {
      this.props.successAuth(data);
      this.props.getProfile();
    })
    .catch(err => {
      this.props.failureAuth();
      if (err.status === 401) {
        actions.setFieldError('email', err.message);
        actions.setFieldError('password', err.message);
      }
    })
    .finally(
      () => {
        actions.setSubmitting(false);
      }
    )
  };

  initialValues = {
    email: '',
    password: ''
  };

  render() {
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
              initialValues={this.initialValues}
              validationSchema={schema}
              onSubmit={this.submitForm}
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
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  }
};

const mapActionsToProps = dispatch => bindActionCreators(
  {getProfile, requestAuth, failureAuth, successAuth},
  dispatch);

export default withRouter(
  connect(mapStateToProps,
    mapActionsToProps
  )(SigninForm)
);