import { cx } from '@/lib/utils'
import React, { useState } from 'react'

// css 
import Style from './style.module.css'

export default function Index(props) {
    const { btnText='', title='Needs a Title', content='Needs content', showing, className} = props
    const [isShowing, setIsShowing] = useState(showing)

    const modalContent = () => {

        const onReturn = (e) => {
            setIsShowing(false)
            props.onReturn(e)
        }

        return (
            <div className={cx(Style.wrapper)} onClick={() => setIsShowing(false)}>
                <div className={cx(Style.container, 'shadow-lg shadow-black')} onClick={(e) => e.stopPropagation()}>
                    <div className={cx(Style.header, 'flex justify-between')}>
                        <h3 className='text-2xl'>{title}</h3>
                        <span onClick={() => setIsShowing(false)}>X</span>
                    </div>  
                    <div className={cx(Style.body)}>
                        {content}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <span className={className} onClick={() => setIsShowing(true)}>{btnText}</span>
            {
                !isShowing ?
                <></>
                :
                modalContent()
            }
        </>
    )
}
