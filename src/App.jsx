import { BrowserRouter, Route, Routes } from "react-router-dom"
// Layout
import AppLayout from "./Layout/AppLayout"
// Pages
import Homepage from "./Pages/Homepage"
import AboutUs from "./Pages/AboutUs"
import BlogPage from "./Pages/BlogPage"


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