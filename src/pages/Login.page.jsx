import React, { useContext } from "react"
import { ContentContainer } from "../style/PageContainer"
import { UserContext } from "../contexts/UserContext"
import { signIn } from "../services/api.js"

function Login() {
  const { setAuth, login } = useContext(UserContext)



  return (
    <ContentContainer>
      <ShortlyLogo />
    </ContentContainer>
  )
}

export default Login
