import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddBlog from './pages/addBlog'
import EditBlog from './pages/editBlog'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'

function App() {

  return (
    <Router>
      <div className="text-2xl">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/editblog/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  )
}

export default App
