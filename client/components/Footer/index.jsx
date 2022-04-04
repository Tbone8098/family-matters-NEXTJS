import React from 'react'

export default function Index() {
  return (
    <div className='bg-familyMatters-secondary text-familyMatters-primary grid grid-cols-12 py-3 text-center'>
        <div className="col-span-4">
            <ul className=''>
                <li className='text-xl font-bold text-familyMatters-accent'>BLOG</li>
                <li>About Us</li>
                <li>Where we are</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="col-span-4">
            <ul>
                <li className="text-xl font-bold text-familyMatters-accent">REFIT</li>
                <li>About Me</li>
                <li>Contact Me</li>
            </ul>
        </div>
        <div className="col-span-4">
            <ul>
                <li className="text-xl font-bold text-familyMatters-accent">WebWorkX</li>
                <li>About Me</li>
                <li>Contact Me</li>
            </ul>
        </div>
        <div className='col-span-full'>
            <p>Website created and maintained by Tyler Thibault at WebWorkX</p>
        </div>
    </div>
  )
}
