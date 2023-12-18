import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Nav from '../../Components/Layout/Nav/Nav'

const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.gray[200],
  minHeight: '100vh'
}))

const Layout = ({ children, ...props }) => {
  return (
    <MainContainer>
      <Nav/>
        {children}
    </MainContainer>
  )
}

export default Layout
