import { Route, BrowserRouter, Routes } from "react-router-dom"

import { UserContext } from "./contexts/UserContext"
import Home from "./pages/Home.page"
import Signup from "./pages/Signup.page"
import Login from "./pages/Login.page"
import ShortenURL from "./pages/ShortenURL.page"

import { PageContainer } from "./style/PageContainer"

function App() {
  return (
    <UserContext>
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
    </UserContext>
  )
}

export default App
