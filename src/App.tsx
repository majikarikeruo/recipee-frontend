import { Routes, Route } from 'react-router-dom' // 追加

import Home from '@/pages/Home'
import Result from '@/pages/Result'
import '@/App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
