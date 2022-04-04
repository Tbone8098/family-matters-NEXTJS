import React, { useState } from 'react'
import { Header } from '../../components'
import { Featured, Categories } from '@/components/blog'

export default function Index() {
    const [mode, setMode] = useState('light')

    const modeHandler = () => {
        let tempMode = mode
        if (mode === 'light')
            setMode('dark')
        else
            setMode('light')
    }

    return (
        <div className={mode}>
            <div className='flex flex-col dark:bg-familyMatters-primary dark:text-familyMatters-secondary-2'>
                <button onClick={modeHandler}>mode</button>
                <div className=''>
                    <Header />
                </div>
                <div className="flex flex-col justify-center h-full gap-3">
                    <div className='mx-2'>
                        <Featured />
                    </div>
                    <Categories />
                </div>
            </div>
        </div>
    )
}
