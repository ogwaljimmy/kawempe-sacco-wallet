import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Demo accounts for testing
export const DEMO_ACCOUNTS = [
  {
    email: 'john.doe@kawempesacco.ug',
    password: 'demo123',
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      phone: '+256 700 123 456',
      nationalId: 'CM12345678901234',
      occupation: 'farmer',
      memberId: 'KS-2024-001'
    }
  },
  {
    email: 'mary.nakato@kawempesacco.ug',
    password: 'demo123',
    profile: {
      firstName: 'Mary',
      lastName: 'Nakato',
      phone: '+256 700 234 567',
      nationalId: 'CM23456789012345',
      occupation: 'trader',
      memberId: 'KS-2024-002'
    }
  },
  {
    email: 'peter.ssali@kawempesacco.ug',
    password: 'demo123',
    profile: {
      firstName: 'Peter',
      lastName: 'Ssali',
      phone: '+256 700 345 678',
      nationalId: 'CM34567890123456',
      occupation: 'teacher',
      memberId: 'KS-2024-003'
    }
  }
]

// Auth helper functions
export const signUp = async (email: string, password: string, userData: any) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}