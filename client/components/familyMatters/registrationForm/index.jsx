import React, { useState } from 'react'
import { cx, bcrypt } from '@/lib/utils'
import Utils from '@/styles/utils.module.css'

export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$'
);

export default function Index(props) {

    const [formInfo, setFormInfo] = useState({
        username: props ? props.userInfo.username : '',
        firstName: props ? props.userInfo.firstName : '',
        lastName: props ? props.userInfo.lastName : '',
        email: props ? props.userInfo.email : '',
        phoneNum: props ? props.userInfo.phoneNum : '',
        password: '',
        passwordConfirmation: '',
    })
    const [formErrs, setFormErrs] = useState({
        username: {
            msg: "Username requires at least 5 characters",
            len: 5,
            isValid: true
        },
        firstName: {
            msg: "First Name requires at least 2 characters",
            len: 2,
            isValid: true
        },
        lastName: {
            msg: "Last Name requires at least 2 characters",
            len: 2,
            isValid: true
        },
        email: {
            msg: "Email requires must be valid",
            isValid: true
        },
        phoneNum: {
            msg: "Phone Number requires must be valid",
            isValid: true
        },
        password: {
            msg: "Password requires at least 8 characters",
            len: 2,
            isValid: true
        },
        passwordConfirmation: {
            msg: "Password and Password Confirmation must match",
            len: 2,
            isValid: true
        },
    })

    const updateFormInfo = (e) => {
        let name = e.target.name
        let value = e.target.value
        setFormInfo({
            ...formInfo,
            [name]: value
        })
        checkErrs(e)
    }

    const checkErrs = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (value.length >= formErrs[name].len){
            setFormErrs({
                ...formErrs,
                [name]: {
                    ...formErrs[name],
                    isValid: true
                }
            })
        } else {
            setFormErrs({
                ...formErrs,
                [name]: {
                    ...formErrs[name],
                    isValid: false
                }
            })
        }
    }


    return (
        <>
            <form className='grid grid-cols-2 gap-3 mt-4'>
                <div className='flex flex-col text-center'>
                    <label className='text-center w-full' htmlFor="username">Username</label>
                    <input className={cx(Utils.input)} type="text" name="username" id="username" placeholder='Username' value={formInfo.username} onChange={(e) => updateFormInfo(e)} />
                    {
                        !formErrs.username.isValid ? 
                        <span className={cx(Utils.txt_errs)}>{formErrs.username.msg}</span>
                        :
                        ''
                    }
                </div>
                <div className='flex flex-col text-center'>
                    <label className='text-center w-full' htmlFor="firstName">First Name</label>
                    <input className={cx(Utils.input)} type="text" name="firstName" id="firstName" placeholder='First Name' value={formInfo.firstName} onChange={(e) => updateFormInfo(e)} />
                    {
                        !formErrs.firstName.isValid ? 
                        <span className={cx(Utils.txt_errs)}>{formErrs.firstName.msg}</span>
                        :
                        ''
                    }
                </div>
                <div className='flex flex-col text-center'>
                    <label className='text-center w-full' htmlFor="lastName">Last Name</label>
                    <input className={cx(Utils.input)} type="text" name="lastName" id="lastName" placeholder='Last Name' value={formInfo.lastName} onChange={(e) => updateFormInfo(e)} />
                    {
                        !formErrs.lastName.isValid ? 
                        <span className={cx(Utils.txt_errs)}>{formErrs.lastName.msg}</span>
                        :
                        ''
                    }
                </div>
                <div className='flex flex-col text-center'>
                    <label className='text-center w-full' htmlFor="email">Email</label>
                    <input className={cx(Utils.input)} type="text" name="email" id="email" placeholder='Email' value={formInfo.email} onChange={(e) => updateFormInfo(e)} />
                    {
                        !formErrs.email.isValid ? 
                        <span className={cx(Utils.txt_errs)}>{formErrs.email.msg}</span>
                        :
                        ''
                    }
                </div>
                <div className='flex flex-col text-center'>
                    <label className='text-center w-full' htmlFor="phoneNum">phone Number</label>
                    <input className={cx(Utils.input)} type="text" name="phoneNum" id="phoneNum" placeholder='( 123 ) 456-7891' value={formInfo.phoneNum} onChange={(e) => updateFormInfo(e)} />
                    {
                        !formErrs.phoneNum.isValid ? 
                        <span className={cx(Utils.txt_errs)}>{formErrs.phoneNum.msg}</span>
                        :
                        ''
                    }
                </div>
                <div className='flex flex-col text-center'>
                    <label className='text-center w-full' htmlFor="password">Password</label>
                    <input className={cx(Utils.input)} type="text" name="password" id="password" placeholder='Password' value={formInfo.password} onChange={(e) => updateFormInfo(e)} />
                    {
                        !formErrs.password.isValid ? 
                        <span className={cx(Utils.txt_errs)}>{formErrs.password.msg}</span>
                        :
                        ''
                    }
                </div>
                <div className='col-start-2 flex flex-col'>
                    <label className='text-center w-full' htmlFor="passwordConfirmation">Password Confirmation</label>
                    <input className={cx(Utils.input)} type="text" name="passwordConfirmation" id="passwordConfirmation" placeholder='Password Confirmation' value={formInfo.passwordConfirmation} onChange={(e) => updateFormInfo(e)} />
                    {
                        !formErrs.passwordConfirmation.isValid ? 
                        <span className={cx(Utils.txt_errs)}>{formErrs.passwordConfirmation.msg}</span>
                        :
                        ''
                    }
                </div>
                <div>
                    <button className={cx(Utils.btn, Utils.btn_success)}>
                        {
                            props.userInfo
                            ?
                            'Update'
                            :
                            'Register'
                        }
                    </button>
                </div>
            </form>
        </>
    )
}