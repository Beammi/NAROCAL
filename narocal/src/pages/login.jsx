import { useState, useEffect } from 'react'
import { supabase } from 'lib/supabaseClient'
import Auth from './Auth'
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
  //   async function loadData() {
  //     const { data } = await supabaseClient.from('test').select('*')
  //     setData(data)
  //   }
  //   // Only run query once user is logged in.
  //   if (user) loadData()
  // }, [user])
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

