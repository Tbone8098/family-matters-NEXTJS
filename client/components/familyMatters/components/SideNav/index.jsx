import React from 'react'
import { cx } from '@/lib/utils'
import { signOut } from 'next-auth/react'

export default function Index(props) {

    const clickHandler = (page) => {
        props.onReturn(page)
    }

    return (
        <div className={cx('grid bg-familyMatters-primary h-100')}>
            <div className="my-auto ml-2 h-100">
                <ul className='flex flex-col gap-3'>
                    <li><h2 className='text-3xl'>BlOG</h2></li>
                    <ul>
                        <li className='cursor-pointer' onClick={() => clickHandler('categories')}>Categories</li>
                        <li className='cursor-pointer' onClick={() => clickHandler('posts')}>All Posts</li>
                        <li className='cursor-pointer' onClick={() => clickHandler('pages')}>All Pages</li>
                    </ul>
                    <li><h2 className='text-3xl'>REFIT</h2></li>
                    <ul>
                        <li>Main Page</li>
                        <li>Playlists</li>
                    </ul>
                </ul>
            </div>
            <div className='mt-auto'>
                <ul>
                    <li className='cursor-pointer' onClick={() => clickHandler('settings')}>Settings</li>
                    <li className='cursor-pointer' onClick={() => signOut()}>Logout</li>
                </ul>
            </div>
        </div>
    )
}
