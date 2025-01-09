import { BrowserRouter, Route, Routes } from "react-router-dom"
// Layout
import AppLayout from "./components/AppLayout"
// Pages
import Homepage from "./components/Homepage"
import AboutUs from "./components/AboutUs"
import BlogPage from "./components/BlogPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<Homepage />} ></Route>
          <Route path="/BlogPage" element={<BlogPage />} ></Route>
          <Route path="/AboutUs" element={<AboutUs />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App