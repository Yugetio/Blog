import React from 'react';
import {connect} from 'react-redux';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';

import {updatedProfile} from '../../actions';

import './popupUpdateUser.css';


const schema = yup.object().shape({
  firstname: yup.string().label('firstname').min(1).required(),
  lastname: yup.string().label('lastname').min(1).required()
});

const submitForm = (values, actions) => {
  console.log(values);

  this.props.updatedProfile(values)
  .then(() => {
    this.props.togglePopupUserUpdate();
  })
  .catch(() => {
    actions.setFieldError('firstname', 'some error');
    actions.setFieldError('lastname', 'some error');
  })
  .finally(
    () => {
      actions.setSubmitting(false);
    }
  )
};

class PopupUserUpdate extends React.Component{
  initialValues = {
    firstname: '',
    lastname: ''
  };

  render() {
    const {togglePopupUserUpdate} = this.props;

    return (
      <div className="modal popup-user-update">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update profile</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={togglePopupUserUpdate}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <div className="row">
                <div className="col-lg-12">
                  <Formik
                    initialValues={this.initialValues}
                    validationSchema={schema}
                    onSubmit={submitForm}
                  >
                    {({touched, errors, isSubmitting}) => (
                      <Form>

                        <div className={`form-group  ${
                          touched.firstname && errors.firstname ? 'has-danger' : ''}`
                        }>
                          <label htmlFor="firstname">Firstname:</label>
                          <Field type="firstname"
                                 name="firstname"
                                 className={`form-control  ${
                                   touched.firstname && errors.firstname ? 'is-invalid' : ''}`
                                 }
                                 placeholder="Neeko"/>
                          <ErrorMessage name="firstname"
                                        className="invalid-feedback"
                                        component="div"/>
                        </div>

                        <div className={`form-group  ${
                          touched.lastname && errors.lastname ? 'has-danger' : ''}`
                        }>
                          <label htmlFor="lastname">Lastname</label>
                          <Field type="lastname"
                                 name="lastname"
                                 className={`form-control  ${
                                   touched.lastname && errors.lastname ? 'is-invalid' : ''}`
                                 }
                                 placeholder="Brown"/>
                          <ErrorMessage name="lastname"
                                        className="invalid-feedback"
                                        component="div"/>
                        </div>

                        <button type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isSubmitting}>
                          Save changes
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {updatedProfile})(PopupUserUpdate);