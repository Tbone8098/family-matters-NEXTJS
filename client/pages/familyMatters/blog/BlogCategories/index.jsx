import React, { useState, useEffect } from 'react'

import { Form } from '@/components/familyMatters/components/blog/categories'

import Utils from '@/styles/utils.module.css'
import { cx } from '@/lib/utils'

export default function Index() {
    const [allCategories, setAllCategories] = useState()

    useEffect(async () => {
        let resp = await fetch('/api/blog/categories/getAll')
        resp = await resp.json()
        setAllCategories(resp)
    }, [])

    const updateCategories = (e, isAdding=true) => {
        if (isAdding){
            setAllCategories([...allCategories, e])
        } else {
            let tempCategories = []
            for (const category of allCategories) {
                if (category.id !== e.id){
                    tempCategories.push(category)
                }
            }
            setAllCategories(tempCategories)
        }
    }

    const deleteCategory = async (id) => {
        let resp = await fetch('/api/blog/categories/deleteOne', {
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        })
        resp = await resp.json()
        updateCategories(resp, false)
    }

    return (
        <div>
            <Form onCreate={(e) => updateCategories(e)} />
            <div className='flex flex-col items-center'>
                {!allCategories ?
                    'loading'
                    :
                    allCategories.map((category, key) => {
                        return (
                            <div className={cx(Utils.card)} key={key}>
                                <p className='text-xl text-center mb-3'>{category.name}</p>
                                <div className='flex justify-center gap-2'>
                                    <button className={cx(Utils.btn, 'bg-familyMatters-secondary')}>Edit</button>
                                    <button onClick={() => deleteCategory(category.id)} className={cx(Utils.btn, 'bg-familyMatters-danger')}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
