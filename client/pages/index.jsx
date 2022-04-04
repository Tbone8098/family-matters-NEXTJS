import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import { Header, Footer } from '../components'

import { LandingCover } from '../components'

import { CoverImg } from '../img/refit'
import { CoverImg as CoverImg2 } from '../img/blog'




export default function Home() {
  return (
    <div>
      <Head>
        <title>The Adventure Awaits</title>
        <meta name="description" content="From our livingroom the adventure awaits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col my-auto h-screen'>
        <div className='mt-0'>
          <Header />
        </div>

        <div className='h-full'>
          <div className='flex flex-col sm:flex-row justify-center gap-5'>
            <div>
              <LandingCover
                img={CoverImg}
                imgAlt="Kendal Refit Covers"
                title="REFIT on the ROAD"
                text="I love to dance and I love to be healthy, REFIT is my opprotunity to do both! I am a certified REFIT instructor, taking the REFIT spirit with me wherever I go and getting whoever I can to join. Will you be in my class? Come join me, I would love to see you online or in person! Info inside."
              />
            </div>
            <div>
              <LandingCover
                img={CoverImg2}
                imgAlt="Kendal Refit Covers"
                title="LIFE on the ROAD"
                text="This is our blog site of our adventures as we have traveled the country. We are the Thibaults (pronounced TBO) and we are a family of four, Tyler (Dad), Kendal (Mom), Theo or Theophilus (5 years old) and Z or Zebadiah (4 years old). We would love to share our experiences and therefor a bit of our life with you. Come and join us! Reach out, we look forward to hearing from you."
              />
            </div>
          </div>
        </div>


        <footer className='mt-auto'>
          {/* <Footer /> */}
        </footer>
      </main>
    </div>
  )
}




