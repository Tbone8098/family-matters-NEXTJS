import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Utils from '@/styles/utils.module.css'
import { cx } from '@/lib/utils'

import { RegistrationForm } from '@/components/familyMatters'

export default function Index() {
    const { data: session } = useSession()
    const [userInfo, setUserInfo] = useState()

    useEffect(async () => {
        const getUserInfo = await fetch(`/api/user/findOne/${session.user.id}`)
        let info = await getUserInfo.json()
        setUserInfo(info)
    }, [])

    // const formChangeHandler = (e) => {
    //     let name = e.target.name
    //     let value = e.target.value
    //     setUserInfo({
    //         ...userInfo,
    //         [name]: value
    //     })
    // }

    const displaySettingsForm = () => {
        return (
            <div className='w-100'>
                <RegistrationForm userInfo={userInfo} />
            </div>
        )
    }

    return (
        <div className='w-full mx-3'>
            <h2 className='text-3xl'>User Settings</h2>
            {!userInfo ? 'loading...' : <div className='w-100'>{displaySettingsForm()}</div>}
        </div>
    )
}
