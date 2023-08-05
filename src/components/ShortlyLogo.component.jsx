import React from "react"
import { styled } from "styled-components"
import "/logo_shortly.svg"

function ShortlyLogo() {
  return (
    <LogoContainer>
      Shortly
      <img src="./logo_shortly.svg" alt="Shortly Logo"/>
    </LogoContainer>
  )
}

export default ShortlyLogo

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  font-size: 40px;
  width: 500px;
  height: 150px;
  /* background-color: lightgreen; */
  img {
    height: 70px;
    position: relative;
    top: 5px;
  }
`