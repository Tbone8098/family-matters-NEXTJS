import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

// temp img
import { Featured } from '../../../img/blog'
import { cx } from '@/lib/utils'
import Utils from '@/styles/utils.module.css'
import Style from './style.module.css'

let featuredArr = [
    {
        img: Featured,
        synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur .",
        link: ""
    },
    {
        img: Featured,
        synopsis: "Lorem ipsum dolor sit .",
        link: ""
    },
    {
        img: Featured,
        synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat debitis libero.",
        link: ""
    },
]

export default function Index() {
    const [activeFeatured, setActiveFeatured] = useState(0)
    return (
        <div className='flex flex-col justify-center'>
            <h2 className='text-xl text-center'>Featured</h2>
            <div className='grid grid-cols-1 border-2 border-black shadow-lg shadow-slate-700 mb-4 rounded-lg'>
                <div>
                    <Image
                        src={featuredArr[activeFeatured].img}
                    />
                </div>
                <div className='border-t-2 border-black flex flex-col p-2'>
                    <p>{featuredArr[activeFeatured].synopsis}</p>
                    <div className={cx('self-end m-3 bg-familyMatters-secondary text-familyMatters-primary font-bold', Utils.btn)}>
                        <Link href={featuredArr[activeFeatured].link}>Read More</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                {
                    featuredArr.map((item, key) => {
                        return (
                            <div className={cx(Style.dot, key===activeFeatured ? 'bg-familyMatters-secondary' : 'bg-familyMatters-primary dark:bg-familyMatters-secondary-2')} onClick={() => setActiveFeatured(key)}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
