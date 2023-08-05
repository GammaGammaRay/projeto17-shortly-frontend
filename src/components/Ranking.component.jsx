import React from 'react'
import { styled } from 'styled-components'
import { PageContainer } from '../style/PageContainer'
import { getUserURLS } from '../services/api'

function Ranking() {
  return (
    <PageContainer>
      <RankingContainer>
        Ranking
      </RankingContainer>
    </PageContainer>
  )
}

const RankingContainer = styled.div`
  width: 80%;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 12px;
  border: 2px;
  border-color: black;
  background-color: lightpink;
`

export default Ranking