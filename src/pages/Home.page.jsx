import React from "react"
import Ranking from "../components/Ranking.component"
import { styled } from "styled-components"
import ShortlyLogo from "../components/ShortlyLogo.component.jsx"
import { ContentContainer } from "../style/PageContainer"

function Home() {
  return (
      <ContentContainer>
        <ShortlyLogo />
        <Ranking/>
      </ContentContainer>
  )
}



export default Home
