import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React from 'react'
import { Shield } from '../../../assets/icon/Shield';


const Root = styled(Box)(({ theme,istop }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  width: istop ?"40%":"60%",
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
  ({ size = 14, weight = 400,color='#292326' }) => (
    {
      fontSize: `${size}px`,
      fontWeight: `${weight}`,
      marginBottom: "0px",
      marginTop: "0px",
      color:color
    }
));

const Container = styled((props) => <Box {...props} />)(({theme}) => (
  {
    display:'flex',
    flexDirection:'column',
    gap:`${theme.spacing(1)}`
  }
));
export const Warranty = ({warranty=[],isTop=false}) => {

  return (
    <Root istop={isTop?'true':undefined}> 
      <Text size={20} weight={600} style={{marginBottom:'16px'}}>
        Garantía del Comprador
      </Text>
      <Container>
        {warranty.map((warr,)=>
          <Container key={warr.title} style={{flexDirection:'row',marginBottom:isTop ?'0px':'16px'}}>
            <Shield />
            <Container style={{width:'90%'}}>
              <Text size={16} color={"#212121"}>
                {warr.title}
              </Text>
              {!isTop&&
              <Text color={"#626771"}>
                {warr.description}
              </Text>}
            </Container>    
          </Container>
        )}
      </Container>
      {!isTop&&<Container style={{alignItems:'flex-end'}}>
        <Button>
          Más información
        </Button>
      </Container>}
    </Root>
  )
}
