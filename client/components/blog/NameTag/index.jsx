import React from 'react'
import userIcon from '../../../img/icons/UserIcon.png'
import Image from 'next/image'

export default function Index(props) {
    const { name } = props
    return (
        <div className='flex items-center gap-3'>
            <Image src={userIcon} width='40' height='40' />
            <span className='text-xl'>{name}</span>
        </div>
    )
}
