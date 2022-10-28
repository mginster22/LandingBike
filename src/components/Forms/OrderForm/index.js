import React from 'react'
import { Formik, Form } from 'formik'
import InputForm from '../InputForm'
import styles from './OrderForm.module.scss'

const OrderForm = ({ name }) => {
  const onSubmit = (values, formikBag) => {
    console.log(values)
    formikBag.resetForm()
  }
  return (
    <div className={styles.form_wrapper}>
      <p className={styles.text_form}>
        Если Вы хотите заказать велосипед, оставьте свой контакт и наш менеджер
        перезвонит вам в ближайшее время
      </p>
      <Formik initialValues={{ name: '', phone: '' }} onSubmit={onSubmit}>
        {formikProps => (
          <Form className={styles.order_form}>
            <InputForm name='name' placeholder='имя' />
            <InputForm name='phone' placeholder='телефон' />
            <span className={styles.color_text}>выберите желаемый цвет</span>
            <input type='submit' value='Заказать' className={styles.submit} />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OrderForm
