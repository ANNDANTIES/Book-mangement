import { useState } from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './components/Home'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import BookDetails from './components/BookDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/add-book" element={<BookForm />} />
        <Route path='/view-bookList' element={<BookList/>}/>
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
