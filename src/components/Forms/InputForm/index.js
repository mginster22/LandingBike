import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from '../OrderForm/OrderForm.module.scss'

const InputForm = props => {
  const { name, placeholder } = props
  return (
    <label className={styles.label_input}>
      <Field>
        {({ field, form, meta }) => (
          <input
            type='text'
            placeholder={placeholder}
            className={styles.input}
          />
        )}
      </Field>
      <ErrorMessage name={name} component='span' />
    </label>
  )
}

export default InputForm
