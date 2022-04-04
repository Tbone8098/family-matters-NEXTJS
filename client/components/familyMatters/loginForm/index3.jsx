import { useSession, signIn, signOut } from "next-auth/react"

import Utils from '@/styles/utils.module.css'
import { cx } from '@/lib/utils'

export default function Component() {
  const { data: session } = useSession()

  return (
    <>
      <form>
        <input type="email" name="Email" id="Email" />
        
      </form>
    </>
  )

  // const { data: session } = useSession()
  // console.log(session);
  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  // return <>
  //   Not signed in <br />
  //   <button onClick={() => signIn()}>Sign in</button>
  // </>
}