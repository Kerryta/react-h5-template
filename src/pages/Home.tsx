import { Button } from "antd-mobile/2x"
import styled from "styled-components"

const Home = () => {
  return (
    <HomeStyled>
      <Button
        color='primary'
        block
      >
        Home
      </Button>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  padding: 10px;
`

export default Home
