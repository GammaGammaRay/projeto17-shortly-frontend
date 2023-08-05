import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Context } from "react"

import UserProvider from "./contexts/UserContext.jsx"
import Home from "./pages/Home.page"
import Signup from "./pages/Signup.page"
import Login from "./pages/Login.page"
import ShortenURL from "./pages/ShortenURL.page"

import { PageContainer } from "./style/PageContainer"
import Nav from "./components/Nav.component.jsx"

function App() {
  return (
    <UserProvider>
      <PageContainer>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shortenURL" element={<ShortenURL />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </UserProvider>
  )
}

export default App
