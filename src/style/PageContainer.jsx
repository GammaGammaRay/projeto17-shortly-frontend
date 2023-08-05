import { styled } from "styled-components"

const PageContainer = styled.div`
  font-family: "Lexend Deca";
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  background-color: white;
`
const ContentContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
`

export { PageContainer, ContentContainer }
