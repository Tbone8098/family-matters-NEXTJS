import React, { useState, useEffect } from 'react'

import { Form } from '@/components/familyMatters/components/blog/categories'

import Utils from '@/styles/utils.module.css'
import { cx } from '@/lib/utils'
import { Modal } from '../../../../components'

export default function Index() {
    const [allCategories, setAllCategories] = useState()

    useEffect(async () => {
        let resp = await fetch('/api/blog/categories/getAll')
        resp = await resp.json()
        setAllCategories(resp)
    }, [])

    const updateCategories = (e, isAdding = true, isUpdating=false) => {
        if (isAdding) {
            setAllCategories([...allCategories, e])
        } else {
            let tempCategories = []
            for (const category of allCategories) {
                if (category.id !== e.id) {
                    tempCategories.push(category)
                } else {
                    if (isUpdating){
                        tempCategories.push(e)
                    }
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

    const deleteModal = (id) => {
        return (
            <div>
                <p>Are you sure you want to delete this category at id: {id}?</p>
                <div className='flex gap-2 justify-end'>
                    <button className={cx(Utils.btn, 'bg-familyMatters-secondary-2')}>No</button>
                    <button onClick={() => deleteCategory(id)} className={cx(Utils.btn, 'bg-familyMatters-danger')}>Yes</button>
                </div>
            </div>
        )
    }

    const editModal = (category) => {
        return (
            <div>
                <Form isCreate={false} data={category} onReturn={(e) => updateCategories(e, false, true)}/>
            </div>
        )
    }

    return (
        <div>
            <Form onReturn={(e) => updateCategories(e)} />
            <div className='flex flex-col items-center'>
                {!allCategories ?
                    'loading'
                    :
                    allCategories.map((category, key) => {
                        return (
                            <div className={cx(Utils.card)} key={key}>
                                <p className='text-xl text-center mb-3'>{category.name}</p>
                                <div className='flex justify-center gap-2'>
                                    <Modal className={cx(Utils.btn, 'bg-familyMatters-secondary')}
                                        btnText="Edit"
                                        content={editModal(category)}
                                    />
                                    <Modal className={cx(Utils.btn, 'bg-familyMatters-danger')}
                                        btnText="Delete"
                                        content={deleteModal(category.id)}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
