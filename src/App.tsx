import { Link, Route, Routes } from 'react-router-dom'
import { Button } from './components/ui/button'
import FirebaseLogin from './FirebaseLogin'
import Home from './Home'
import OIDCLogin from './OIDCLogin'

function App() {
  return (
    <div className='container mx-auto p-4'>
      <nav className='mb-4'>
        <ul className='flex space-x-4'>
          <li>
            <Button variant='link' asChild>
              <Link to='/'>Home</Link>
            </Button>
          </li>
          <li>
            <Button variant='link' asChild>
              <Link to='/oidc'>OIDC Login</Link>
            </Button>
          </li>
          <li>
            <Button variant='link' asChild>
              <Link to='/firebase'>Firebase Login</Link>
            </Button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/oidc' element={<OIDCLogin />} />
        <Route path='/firebase' element={<FirebaseLogin />} />
      </Routes>
    </div>
  )
}

export default App
