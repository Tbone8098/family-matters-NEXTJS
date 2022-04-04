import React from 'react'
import { LoginForm, RegistrationForm } from '@/components/familyMatters'
import { cx } from '@/lib/utils'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

// css
import Utils from '../../styles/utils.module.css'
import { useEffect } from 'react'

export default function Index() {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push("/familyMatters/dashboard")
        }
    }, [session])

    return (
        <div className='grid grid-cols-12 justify-center'>
            <div className="col-span-6 col-start-4 flex justify-center flex-col">
                <h1 className={cx('text-5xl')}>Family Matters</h1>
                <LoginForm />
                {/* <RegistrationForm /> */}
            </div>
        </div>
    )
}
