import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Navbar from '@/components/layout/Navbar'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Container>
      </main>
    </>
  )
}

export default App
