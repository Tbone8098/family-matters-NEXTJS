import React from 'react'
import {cx} from '@/lib/utils'

export default function index(props) {
    const { page } = props

    return (
        <div className='bg-familyMatters-primary p-3'>
            <div className='flex justify-end'>
            <h3 className='text-xl'>{page}</h3>
            </div>
        </div>
    )
}
