import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:3000/api/auth/check", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })

                let user = await res.json()

                if (res.ok && user) {
                    return user
                }
                return null
            }
        })
    ],
    pages: {
        signIn: "/familyMatters"
    },
    callbacks: {
        jwt: ({ token, user }) => {
            if (user){
                let userObj = {
                    ...user
                }
                delete userObj.password
                token.user = userObj
            }
            return token
        },
        session: ({session, token}) => {
            if (token) {
                session.user = token.user
            }
            return session
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true
    }
})