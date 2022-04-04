import React, { useState } from 'react'
import Link from 'next/link'

import { Modal } from '../../components'
import { Menu } from '@/components/familyMatters'
import { signOut } from 'next-auth/react'


export default function Index(props) {
    const { isAdmin } = props
    const [modalShowing, setModalShowing] = useState(false)

    const onReturn = (e) => {
        setModalShowing(false)
        props.onReturn(e)
    }
    return (
        <div className=''>
            <div className='flex flex-col'>
                <div className="text-center my-3">
                    <p>From our livingroom</p>
                    <h1 className='text-3xl dark:text-familyMatters-secondary'>The Adventure Awaits</h1>
                </div>
                {
                    isAdmin ?
                        <div className='flex justify-center'>
                            <ul className='flex justify-evenly w-full gap-3'>
                                <li>
                                    <Modal
                                        btnText="Menu"
                                        content={<Menu onReturn={(e) => onReturn(e)} />}
                                        showing={modalShowing}
                                    />
                                </li>
                                <li className='text-familyMatters-danger' onClick={() => signOut()}>Logout</li>
                            </ul>
                        </div>
                        :
                        <div className="border-b-2 mb-3 mx-3 py-2">
                            <ul className='flex gap-3 justify-evenly'>
                                <li><Link href="/blog">Blog</Link></li>
                                <li>REFIT</li>
                                <li>Webworkx</li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    )
}
