import React, { useState } from 'react'
import { cx } from '@/lib/utils'
import { signIn, signOut, useSession } from "next-auth/react"

// css
import Utils from '@/styles/utils.module.css'

// regex
export const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$'
);

export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

export default function Index({ csrfToken }) {
  const {data: session} = useSession()
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState({
    email: '',
    password: '',
  })

  const formChangeHandler = (e) => {
    let name = e.target.name
    let value = e.target.value
    setFormInfo({
      ...formInfo,
      [name]: value,
    })
    updateErrors(e)
  }


  const updateErrors = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'email') {
      if (validEmail.test(value)) {
        setError({
          ...error,
          email: '',
        })
      } else {
        setError({
          ...error,
          email: 'Invalid email',
        })
      }
    }
    if (name === 'password'){
      console.log(validPassword.test(value));
      if (validPassword.test(value)) {
        setError({
          ...error,
          password: '',
        })
      } else {
        setError({
          ...error,
          password: 'Invalid password',
        })
      }
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value

    console.log(email,password);

    signIn('credentials', {email, password})
  }

  return (
    <div>
      {
        !session
        ?
        <div>
          <h2 className='text-2xl'>Login</h2>
          <form className='grid grid-cols-1 gap-3' onSubmit={(e) => formSubmitHandler(e)}>
            <div>
              <div>
                <input className={cx(Utils.input)} type="text" name="email" id="email" placeholder='Email' value={formInfo.email} onChange={(e) => formChangeHandler(e)} />
                <span className='text-center' name="email">{error.email}</span>
              </div>
              <div>
                <input className={cx(Utils.input)} type="password" name="password" id="password" placeholder='Password' value={formInfo.password} onChange={(e) => formChangeHandler(e)} />
                <span className='text-center' name="password">{error.password}</span>
              </div>
              <button className={cx(Utils.btn, Utils.btn_success, 'w-100')}>Login</button>
            </div>
          </form>
        </div>
        :
        <div>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      }
    </div>
  )
}
