import React, {useState} from 'react'
import Utils from '@/styles/utils.module.css'
import { cx } from '@/lib/utils'

export default function Index(props) {
    const { onReturn, isCreate=true, data='', } = props
    const [catName, setCatName] = useState(data.name)

    const changeHandler = async (e) => {
        if (e.which === 13){
            
            if (isCreate){
                let resp = await fetch('/api/blog/categories/create',{
                    method: 'POST',
                    body: JSON.stringify({'name': catName})
                })
                resp = await resp.json()
                
                setCatName('')
                return onReturn(resp)
            } else {
                let resp= await fetch('/api/blog/categories/updateOne', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: data.id,
                        name: catName
                    })
                })
                resp = await resp.json()
                return onReturn(resp)
            }
        }
    }

    return (
        <div className='flex items-center gap-3 justify-center'>
            <div className='flex w-10/12'>
            <input className={cx(Utils.input)} type="text" name="categoryName" id="categoryName" placeholder='Category Name' value={catName} onChange={(e) => setCatName(e.target.value)} onKeyDown={(e) => changeHandler(e)} />
            </div>
        </div>
    )
}
