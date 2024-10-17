import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to the OIDC and Firebase Auth Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Choose a login method from the navigation menu.</p>
      </CardContent>
    </Card>
  )
}

export default Home
