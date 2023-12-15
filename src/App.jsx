import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Navbar from '@/components/layout/Navbar'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import AddNote from '@/pages/AddNote'
import Archive from '@/pages/Archive'

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
          </Routes>
          <Footer />
        </Container>
      </main>
    </>
  )
}

export default App
