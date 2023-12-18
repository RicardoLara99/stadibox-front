import { styled } from '@mui/material/styles'
import { Box, Button } from '@mui/material'
import { Search } from '../Search'
import useWindowSize from '../../../hooks/useWindowSize'


const Root = styled(Box)(({ theme }) => ({
  top: '0',
  zIndex: '99',
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100vw',
  background: theme.palette.semantic.default,
  position: 'sticky',
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}))


const Container = styled(props => <Box {...props}/>)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  width:'100%',
  alignItems:'center',
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-between",
  },
}))

const StyledButton = styled(props => <Button {...props}/>)(({ theme }) => ({
  borderRadius: theme.spacing(3)
}))

const Nav = props => {
  const {width}=useWindowSize()
  
  if(width>=720){
    return <Root>
    <Container>
      <img src='/images/logo.png' height={'24px'}/>
      <Search />
    </Container>
    
    <StyledButton variant='contained' color='secondary'>
      Ingresa
    </StyledButton>
  </Root>
  }
  else{
    return <Root>
    <Container>
      <img src='/images/logo.png' height={'24px'}/>
      <StyledButton variant='contained' color='secondary'>
      Ingresa
      </StyledButton>
      
    </Container>
    <Search />

  </Root>
  }
}

export default Nav
