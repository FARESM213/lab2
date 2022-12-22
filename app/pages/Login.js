import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import UserContext from '../components/UserContext'

export default function Contact() {
  const { user } = useContext(UserContext)
  const router = useRouter()
  const supabaseClient = useSupabaseClient()
  if(user) router.push('/profile')
  return (
    <div className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">
      <Head>
        <title>Connexion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Auth
        supabaseClient={supabaseClient}
        appearance={{ theme: ThemeSupa }}
        theme="light"
        providers={['github']}
       />
    </div>
  )
}
