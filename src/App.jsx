import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Navbar from '@/components/layout/Navbar'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import AddNote from '@/pages/AddNote'
import Archive from '@/pages/Archive'
import DetailNote from '@/pages/DetailNote'
import Error from '@/pages/Error'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import PrivateRoute from '@/routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { Toaster } from 'react-hot-toast'
import { notFound as notFoundLocale } from '@/utilities/locale-data'
import useLocale from '@/contexts/locale'

function App() {
  const { locale } = useLocale()

  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="add" element={<AddNote />} />
              <Route path="archives" element={<Archive />} />
              <Route path="notes/:id" element={<DetailNote />} />
            </Route>
            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route
              path="/*"
              element={
                <Error
                  statusCode={404}
                  title={notFoundLocale[locale].title}
                  desc={notFoundLocale[locale].subtitle}
                />
              }
            />
          </Routes>
          <Toaster />
          <Footer />
        </Container>
      </main>
    </>
  )
}

export default App
