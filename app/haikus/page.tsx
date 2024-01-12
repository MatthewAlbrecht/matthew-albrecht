import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: haikus } = await supabase.from('haikus').select()
  console.log(haikus)
  return <pre>{JSON.stringify(haikus, null, 2)}</pre>
}