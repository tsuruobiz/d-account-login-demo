import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User, UserManager } from 'oidc-client-ts'
import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'

const oidcConfig = {
  authority: 'https://your-oidc-provider.com',
  client_id: 'your-client-id',
  redirect_uri: 'http://localhost:5173/oidc-callback',
  response_type: 'code',
  scope: 'openid profile email',
}

const userManager = new UserManager(oidcConfig)

function OIDCLogin() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])

  const login = () => {
    userManager.signinRedirect()
  }

  const logout = () => {
    userManager.signoutRedirect()
  }

  if (user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user.profile.name}!</CardTitle>
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
        <CardTitle>OIDC Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={login}>Login with OIDC</Button>
      </CardContent>
    </Card>
  )
}

export default OIDCLogin
