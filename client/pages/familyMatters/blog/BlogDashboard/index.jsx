import { cx } from '@/lib/utils'
import React from 'react'

// css
import Utils from '@/styles/utils.module.css'

// data
import { draftData, commentsArr } from './tempData'

import { NameTag } from '@/components/blog'


export default function Index() {
  return (
    <div className='grid grid-cols-1'>
      <div className='flex flex-col items-center'>
        <h2 className="text-2xl">Drafts</h2>
        <table className={cx(Utils.table)}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {draftData.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className='m-2 flex flex-col gap-3'>
        <h2 className='text-2xl'>Comments</h2>
        {commentsArr.map((item, key) => {
          return (
            <div key={key} className="border border-black p-2 rounded-lg shadow shadow-slate-700">
              <div className='flex items-center justify-between mx-2'>
                <NameTag name={item.name} />
                <span>{item.date}</span>
              </div>
              <div>
                <p>{item.content}</p>
              </div>
              <div className='flex justify-center gap-3'>
                <button className={cx(Utils.btn, 'bg-familyMatters-secondary-2')}>View</button>
                <button className={cx(Utils.btn, 'bg-familyMatters-secondary')}>Edit</button>
                <button className={cx(Utils.btn, 'bg-familyMatters-danger')}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}