import { Field, Form, Formik } from 'formik'
import React from 'react'

const AsyncForm = ({ onSubmit }) => {
  const sleep = ms => new Promise(r => setTimeout(r, ms))

  const handleSubmit = async values => {
    await sleep(500)
    onSubmit(values)
  }


  return (

    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: ''
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor='firstName'>first name:</label>
            <Field id='firstName' name='firstName' placeholder='burak' />
            <br />
            <label htmlFor='lastName'>last name:</label>
            <Field id='lastName' name='lastName' placeholder='akyuz' />
            <br />

            <label htmlFor='email'>Email:</label>
            <Field id='email' name='email' placeholder='akyuz@mail.com' type='email' />
            <br />

            <button type='submit' disabled={isSubmitting}>Send</button>
          </Form>
        )
        }
      </Formik>

    </>
  )
}

export default AsyncForm