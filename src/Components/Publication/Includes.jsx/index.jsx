import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'
import BathroomIcon from '@mui/icons-material/Bathroom';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import WifiIcon from '@mui/icons-material/Wifi';
import AirIcon from '@mui/icons-material/Air';
import KitchenIcon from '@mui/icons-material/Kitchen';

const Root = styled(Box)(({ theme,isdivided }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  width: isdivided ?"60%":"100%",
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
      gap:`${theme.spacing(1)}`
    }
));

const amenityIcons = {
  'aire acondicionado': AirIcon,
  'TV': DesktopWindowsIcon,
  'wifi': WifiIcon,
  'baño': BathroomIcon,
  'cocina': KitchenIcon,
};

export const Includes = ({amenities=[],isDivided=false}) => {
  return (
    <Root isdivided={isDivided?'true':undefined}>
      <Text size={20} weight={600}>
          Incluye
      </Text>
      <Container style={{justifyContent: 'space-around'}}>
        {amenities.map((amenity) => {
          const Icon = amenityIcons[amenity]; 
          return Icon && 
          <Container key={amenity} style={{flexDirection:'column', alignItems: 'center'}}>
            <Icon  />
            <Text size={16}>{amenity}</Text>
          </Container>
        })}
      </Container>
    </Root>
  )
}
