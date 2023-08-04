import { Route, BrowserRouter, Routes } from "react-router-dom"

import { PageContainer } from "./style/PageContainer"
import Home from "./pages/Home.page"
import Signup from "./pages/Signup.page"
import Login from "./pages/Login.page"
import ShortenURL from "./pages/ShortenURL.page"

function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ShortenURL" element={<ShortenURL />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
  )
}

export default App
