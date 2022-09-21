import React from 'react'
import css from './LogForm.module.css'
import Btn from '../button/Btn'
import { useForm } from 'react-hook-form'

const LogForm = () => {
  // const [mail, setMail] = useState('')
  // const [psw, setPsw] = useState('')
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = () => {
    alert('form submitted ✅')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form} action=''>
      <input
        {...register('mail', {
          required: 'Пустое поле',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Неверная почта'
          }
        })}
        type={'email'}
      />
      {errors?.mail && (
        <h3 className={css.error}>
          {errors?.mail?.message || 'Неверно заполнено поле'}
        </h3>
      )}
      <input
        {...register('pswd', {
          required: 'Пустое поле',
          validate: value => {
            // 123Hj
            let upperCharsCount = false
            for (const i in value) {
              if (value[i].toLowerCase() != value[i].toUpperCase()) {
                if (value[i] === value[i].toUpperCase()) upperCharsCount += 1
              }
            }
            return upperCharsCount < value.length && upperCharsCount >= 1
              ? true
              : 'Должна быть хотя бы одна заглавная буква, но и не все'
          },
          minLength: {
            value: 6,
            message: 'Нужно мин 6 символов'
          }
        })}
        type={'password'}
      />
      {errors?.pswd && (
        <h3 className={css.error}>
          {errors?.pswd?.message || 'Неверно заполнено поле'}
        </h3>
      )}

      <Btn disabled={!isValid} type={'submit'}>
        Войти
      </Btn>
    </form>
  )
}

export default LogForm
