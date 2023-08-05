import React from "react"
import { styled } from "styled-components"
function Nav() {
  // if user is logged in, show different navbar
  return <NavContainer></NavContainer>
}

const NavContainer = styled.div`
  width: 100%;
  height: 40px;
  top: 0px;
  left: 0px;
`

export default Nav
