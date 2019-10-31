import React from 'react';
import {connect} from 'react-redux';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';

import {togglePopupPosts, createPost, updatePost} from '../../actions';

import './popupPost.css';


const schema = yup.object().shape({
  title: yup.string().label('title').min(1).required(),
  text: yup.string().label('text').min(1).required()
});

const PopupPost = (props) => {
  const {post: {_id: postId, title, text}, togglePopupPosts, createPost, updatePost} = props;
  const isEdit = !!postId;

  const initialValue = {
    title: title || '',
    text: text || ''
  };


  const submitForm = (values, actions) => {
    if (isEdit) {
      updatePost(postId, values)
      .then(() => {
        togglePopupPosts();
      })
      .catch(() => {
        actions.setFieldError('title', 'some error');
        actions.setFieldError('text', 'some error');
      })
    } else {
      createPost(values)
      .then(() => {
        togglePopupPosts();
      })
      .catch(() => {
        actions.setFieldError('title', 'some error');
        actions.setFieldError('text', 'some error');
      })
    }

    actions.setSubmitting(false);
  };

  return (
    <div className="modal popup-user-update">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isEdit ? 'Edit' : 'Create'} post</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                    onClick={togglePopupPosts}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            <div className="row">
              <div className="col-lg-12">
                <Formik
                  initialValues={initialValue}
                  validationSchema={schema}
                  onSubmit={submitForm}
                >
                  {({touched, errors, isSubmitting}) => (
                    <Form>

                      <div className={`form-group  ${
                        touched.title && errors.title ? 'has-danger' : ''}`
                      }>
                        <label htmlFor="title">title</label>
                        <Field type="title"
                               name="title"
                               className={`form-control  ${
                                 touched.title && errors.title ? 'is-invalid' : ''}`
                               }
                               placeholder="Title"/>
                        <ErrorMessage name="title"
                                      className="invalid-feedback"
                                      component="div"/>
                      </div>

                      <div className={`form-group  ${
                        touched.text && errors.text ? 'has-danger' : ''}`
                      }>
                        <label htmlFor="text">text</label>
                        <Field type="text"
                               name="text"
                               className={`form-control  ${
                                 touched.text && errors.text ? 'is-invalid' : ''}`
                               }
                               placeholder="He went open door..."/>
                        <ErrorMessage name="text"
                                      className="invalid-feedback"
                                      component="div"/>
                      </div>

                      <button type="submit"
                              className="btn btn-primary btn-block"
                              disabled={isSubmitting}>
                        {isEdit ? 'Save changes' : 'Create post'}
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

};

const mapStateToProps = state => {
  return {
    post: state.posts.post
  }
};

export default connect(mapStateToProps, {togglePopupPosts, createPost, updatePost})(PopupPost);