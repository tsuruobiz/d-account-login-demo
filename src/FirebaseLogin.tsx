import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  OAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth'
import { useEffect, useState } from 'react'

const firebaseConfig = {
  // Your Firebase configuration object
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // ... other config properties
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

function FirebaseLogin() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const login = () => {
    const provider = new OAuthProvider('oidc.your-oidc-provider')
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful login
        console.log('Logged in successfully', result.user)
      })
      .catch((error) => {
        // Handle errors
        console.error('Login error', error)
      })
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('Logged out successfully')
      })
      .catch((error) => {
        console.error('Logout error', error)
      })
  }

  if (user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user.displayName}!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={logout}>Logout</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Firebase Login with OIDC Provider</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={login}>Login with Firebase</Button>
      </CardContent>
    </Card>
  )
}

export default FirebaseLogin
