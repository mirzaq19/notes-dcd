import Layout from './components/Layout'
import NotesForm from './components/NotesForm'
import ThemeWrapper from './components/ThemeWrapper'

function App() {
  return (
    <ThemeWrapper>
      <Layout>
        <NotesForm />
      </Layout>
    </ThemeWrapper>
  )
}

export default App
