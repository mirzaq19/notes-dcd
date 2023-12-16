import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Navbar from '@/components/layout/Navbar'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import AddNote from '@/pages/AddNote'
import Archive from '@/pages/Archive'
import DetailNote from '@/pages/DetailNote'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/archives" element={<Archive />} />
            <Route path="/notes/:id" element={<DetailNote />} />
            <Route
              path="/*"
              element={
                <Error
                  statusCode={404}
                  title="Not Found"
                  desc="Wah, halaman yang kamu cari ga ditemuin"
                />
              }
            />
          </Routes>
          <Footer />
        </Container>
      </main>
    </>
  )
}

export default App
