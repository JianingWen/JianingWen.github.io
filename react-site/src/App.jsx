import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Publications from './pages/Publications.jsx'
import Talks from './pages/Talks.jsx'
import Teaching from './pages/Teaching.jsx'
import CV from './pages/CV.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="publications" element={<Publications />} />
        <Route path="talks" element={<Talks />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="cv" element={<CV />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
