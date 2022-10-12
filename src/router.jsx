import UserInput from './components/UserInput'
import Card from './components/Card'
import ShowResults from './components/ShowResults'

const router = [
  {
    path: '/',
    element: <UserInput />
  },
  {
    path: '/details/:id',
    element: <Card />
  },
  {
    path: '/details',
    element: <ShowResults />
  }
]

export default router