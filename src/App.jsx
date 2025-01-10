import { BrowserRouter, Route, Routes } from "react-router-dom"
// Layout
import AppLayout from "./Layout/AppLayout"
// Pages
import Homepage from "./Pages/Homepage"
import AboutUs from "./Pages/AboutUs"
import Blog from "./Pages/Blog"
import PostDetails from "./Pages/PostDetails"
import NewPost from "./Pages/NewPost"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route index element={<Homepage />} />
          <Route path="/Blog" >
            <Route index element={<Blog />} />
            <Route path="Post/:id" element={<PostDetails />} />
          </Route>
          <Route path="/NewPost" element={<NewPost />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App