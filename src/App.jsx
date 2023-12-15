import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Navbar from '@/components/layout/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
