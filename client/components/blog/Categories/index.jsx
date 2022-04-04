import Image from 'next/image'
import React, { useState } from 'react'

import Utils from '@/styles/utils.module.css'
import { cx } from '@/lib/utils'

import { categoryArr } from './tempData'

export default function Index() {
    const [activeCategory, setActiveCategory] = useState(categoryArr[0])
    return (
        <div className='flex flex-col justify-center'>
            <div className='bg-familyMatters-secondary py-3'>
                <h2 className='text-2xl text-center'>Categories</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-3'>
                {
                    categoryArr.map((item, key) => {
                        if (item.hasOwnProperty('posts')) {
                            return (
                                <span key={key} className={item.name === activeCategory.name ? 'underline' : ''} onClick={() => setActiveCategory(item)}>{item.name}</span>
                            )
                        }
                    })
                }
            </div>
            <div className='grid grid-cols-2 gap-3 items-center'>
                {activeCategory.hasOwnProperty('posts') ?

                    activeCategory.posts.map((post, key) => {
                        return (
                            <div className='flex flex-col items-center shadow shadow-slate-700 rounded-lg' key={key}>
                                <div className={cx(Utils.img150, 'flex place-items-center text-center rounded-lg')}>
                                    {post.title}
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className='my-3'>
                        <span>No Posts Yet</span>
                    </div>
                }
            </div>
        </div>
    )
}
