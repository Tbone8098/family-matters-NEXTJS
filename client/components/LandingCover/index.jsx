import React, { useState } from 'react'
import Image from 'next/image'
import { cx } from '@/lib/utils'

// css
import Style from './style.module.css'

export default function Index(props) {
    const { img, imgAlt = '', title = '', text } = props
    const [textView, setTextView] = useState(false)

    const textOn = () => {
        setTextView(true)
    }

    const textOff = () => {
        setTextView(false)
    }

    return (
        <div className={cx('mx-2', Style.wrapper)}>
            <div className='flex justify-between mx-2'>
                <span>{title}</span>
                <span>Click to Enter</span>
            </div>
            <div className={cx('border border-black rounded-lg shadow-md')} onClick={() => setTextView(!textView)} onMouseEnter={() => textOn()} onMouseLeave={() => textOff()}>
                <div className={cx(Style.container)}>
                    <Image className={cx('rounded-lg', Style.img)} src={img} alt={imgAlt} height="400" objectFit='cover' />
                    {
                        textView ?
                            <div className={cx(Style.text, 'flex items-center  text-white h-full px-4')}>
                                <span>{text}</span>
                            </div>
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    )
}
