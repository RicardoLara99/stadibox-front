import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'
const Root = styled(Box)(({ theme,istop }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  width: istop?"60%":"40%",
  backgroundColor:'#FFFFFF',
  gap: `${theme.spacing(1)}`,
  padding: `${theme.spacing(3)}`,
  borderRadius: "6px",
  border:'1px solid #EAE9EA',
  [theme.breakpoints.down('md')]: {
    width:'100%',
    borderRadius:'0px'
  },
}));
const Text = styled((props) => <p {...props} />)(
  ({ size = 14, weight = 400, }) => (
    {
      fontSize: `${size}px`,
      fontWeight: `${weight}`,
      marginBottom: "16px",
      marginTop: "0px",
    }
));
const Container = styled((props) => <Box {...props} />)(({theme}) => (
  {
    display:'flex',
    flexDirection:'column',
    gap:`${theme.spacing(1)}`,
    height:'100%'
  }
));
const ImagenContainer= styled((props)=> <Box {...props}/>)(()=>({
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: "#EDEFF4",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px"
}))

const StyledImg= styled((props)=> <img {...props}/>)(()=>({
  width: "300px",
  objectFit: "fill",
  borderRadius: "16px",
  height: "300px",
}))
export const Stadium = ({stadium=false, isTop,}) => {
   if(!stadium)return null
  return (
    <Root istop={isTop?'true':undefined} >
      <Container >
        <Text size={20} weight={600} style={{marginBottom:'16px'}}>
          Mapa del estadio
        </Text>
        <ImagenContainer>
          <StyledImg src={`/images/venues/${stadium}.png`}/>
        </ImagenContainer>
      </Container>
    </Root>
  )
}
