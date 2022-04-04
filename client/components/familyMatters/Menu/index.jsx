import React from 'react'

export default function Index(props) {
    const {page} = props

    const onReturn = (e) => {
        props.onReturn(e)
    }
    return (
        <div className='mt-3'>
            <ul className='flex flex-col gap-3'>
                <li className='text-xl' onClick={() => onReturn('BlogDashboard')}>BLOG</li>
                <ul className='flex flex-col gap-3 ml-3'>
                    <li onClick={() => onReturn('BlogCategories')}>Categories</li>
                    <li onClick={() => onReturn('BlogPosts')}>Posts</li>
                    <li onClick={() => onReturn('BlogPages')}>Pages</li>
                    <li onClick={() => onReturn('BlogPeople')}>People</li>
                    <li onClick={() => onReturn('BlogLocations')}>Locations</li>
                </ul>
                <li className='text-xl'>REFIT</li>
                <ul className='flex flex-col gap-3 ml-3'>
                    <li>Playlist</li>
                    <li>Songs</li>
                </ul>
            </ul>
        </div>
    )
}
