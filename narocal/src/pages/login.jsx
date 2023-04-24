import { useState, useEffect } from 'react'
import { supabase } from 'lib/supabaseClient'
import Auth from '../components/Authtentication/auth'
import Account from '../components/account'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'


export default function Login(){
  const [session, setSession] = useState(null)
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [data, setData] = useState()
  useEffect(() => {

    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }


  return (
    <div>
      {!session ? (
        <Auth supabaseClient={supabase}/>
      ) : (
        // <p>Account page will go here.</p>
        <button onClick={signOut} className="btn btn-secondary">Sign out</button>
      )}
    </div>
  )
}

