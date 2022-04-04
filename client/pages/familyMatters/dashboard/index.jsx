import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { cx } from '@/lib/utils'

import { Menu } from '@/components/familyMatters'
import { Header } from '../../../components'
import { useState } from 'react'

import { BlogCategories, BlogPosts, BlogPages, BlogDashboard } from '../blog'
import { Settings } from '../user'


export default function Index() {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push("/familyMatters")
        }
    }, [session])

    const allPages = {
        'BlogCategories': <BlogCategories />,
        'BlogPosts': <BlogPosts />,
        'BlogPages': <BlogPages />,
        'BlogDashboard': <BlogDashboard />,
    }

    const [activePage, setActivePage] = useState(allPages['BlogDashboard'])



    const onReturn = (e) => {
        setActivePage(allPages[e])
    }

    return (
        <div className='flex flex-col'>
            <Header
                isAdmin={true}
                onReturn={(e) => onReturn(e)}
            />
            {
                !session ?
                    'Loading'
                    :
                    <>
                        <div>
                            {activePage ? activePage : 'loading'}
                        </div>
                    </>
            }
        </div>
    )
}

{/* <div>
    <div className='grid grid-cols-12 h-screen'>
        <div className="grid col-span-2 h-100">
            <SideNav onReturn={(page) => setActivePage(page)} />
        </div>
        <div className="flex flex-col col-span-10">
            <div className="col-span-full">
                <TopNav page={activePage.toUpperCase()} />
            </div>
            <div className='flex col-span-full place-content-center'>
                {pageDisplay()}
            </div>
        </div>
    </div>
</div> */}