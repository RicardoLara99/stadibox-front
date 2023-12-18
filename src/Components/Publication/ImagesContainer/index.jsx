import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

const Root = styled(Box)(({ theme }) => ({
  width: "60%",
  gap: `${theme.spacing(1)}`,
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingBottom: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "0px",
  },
}));

const ImageListContainer = styled((props) => <Box {...props} />)(
  ({ theme, maxheight }) => ({
    maxHeight: `${maxheight}px`,
    paddingRight: "5px",
    overflowY: "auto",
    margin: "0",
    display: "flex",
    gap: `${theme.spacing(1)}`,
    flexDirection: "column",
    /* Estilos para Firefox */
    scrollbarWidth: "thin",
    scrollbarColor: "blue green",
    width: "90px",
    minWidth: "90px",

    /* Estilos para Chrome, Edge, y Safari */
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.semantic.default,
      borderRadius: "20px",
    },
  })
);

const Image = styled((props) => <img {...props} />)(({ theme, islarge }) => {
  const largeImage = {
    maxWidth: "100%",
    height: "100%",
    objectFit: "fill",
    width: "100%",
  };
  return {
    maxWidth: !islarge && "68px",
    maxHeight: !islarge && "68px",
    minHeight: !islarge && "68px",
    minWidth: !islarge && "68px",
    borderRadius: "16px",
    cursor: "pointer",
    objectFit: "cover",
    ...(islarge ? largeImage : {}),
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
  };
});

const StyledBox = styled((props) => <Box {...props} />)(({ theme,maxheight=false }) => ({
  width: "100%",
  maxHeight:maxheight?maxheight:'380px',
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const ImagesContainer = ({ images = [], maxHeightRef, ...props }) => {
  const { width, height } = useWindowSize();

  const [imageSelected, setImageSelected] = useState(images[0]);
  const [maxHeight, setMaxHeight] = useState();

  useEffect(() => {
    if(!width>=720){
      setMaxHeight(undefined)
    }else{
      if (maxHeightRef && maxHeightRef.current) {
        const newHeight = maxHeightRef.current.offsetHeight;
        if (newHeight !== maxHeight && newHeight > 100) {
          setMaxHeight(newHeight);
        }
      }
    }
    
  }, [images, imageSelected, width, height]);

  //SWIPEABLEVIEWS
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  console.log('##',maxHeight)
  return (
    <Root>
      {width > 719 ? (
        <>
          {images.length > 1 && (
            <ImageListContainer maxheight={maxHeight}>
              {images.map((image, i) => (
                <Image
                  src={image}
                  onClick={setImageSelected.bind(this, image)}
                />
              ))}
            </ImageListContainer>
          )} 
            <StyledBox maxheight={maxHeight}>
              <Image src={imageSelected} alt={imageSelected} islarge={"true"} />
            </StyledBox>
          
        </>
      ) : (
        <AutoPlaySwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{width:'100%'}}
        >
          {images.map((step, index) => (
            <StyledBox key={step}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image src={step} alt={step} islarge="true" />
              ) : null}
            </StyledBox>
          ))}
        </AutoPlaySwipeableViews>
      )}
    </Root>
  );
};
