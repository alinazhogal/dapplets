import { useEffect } from 'react'
import { Layout } from './components/Layout/Layout'
import { MainBar } from './components/MainBar/MainBar'
import { getTags } from './redux/actionCreator'
import { useAppDispatch } from './redux/hooks'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTags())
  }, [])

  return (
    <Layout>
      <MainBar />
    </Layout>
  )
}

export default App
