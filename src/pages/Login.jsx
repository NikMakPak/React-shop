import React from 'react'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import LogForm from '../components/form/LogForm'

const Login = () => {
  return (
    <>
      <Header
        jsxElem={
          <Link className={'back-link'} to={'/'}>
            <img src='/img/arrow-back.png' alt='arrow back' />
            BACK
          </Link>
        }
        fontPx={'40px'}
      />
      <div className='login'>
        <h1>Вход</h1>
        <LogForm />
      </div>
    </>
  )
}

export default Login
