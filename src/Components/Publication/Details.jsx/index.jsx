import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { handleFormatDate } from "../../../features/utils/formatDate";
const Root = styled(Box)(({ theme }) => ({
  width: "40%",
  gap: `${theme.spacing(1)}`,
  padding: `${theme.spacing(3)}`,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  borderRadius: "6px",
  border:'1px solid #EAE9EA',
  height: 'fit-content',
  [theme.breakpoints.down('md')]: {
    width:'100%',
    borderRadius:'0px'
  },
}));

const Container = styled((props) => <Box {...props} />)(
  ({ grid = false, gridchild = false }) => {
    const containerGrid = {
      display: "flex",
      flexWrap: "wrap",
    };
    const ContainerGridChild = {
      flex: "1 1 50%",
      maxWidth: "calc(50% - 10px)",
      boxSizing: "border-box",
    };
    return {
      ...(grid ? containerGrid : {}),
      ...(gridchild ? ContainerGridChild : {}),
    };
  }
);

const TextContainer = styled((props) => <Box {...props} />)(() => ({
  display: "flex",
  alignItems: "flex-end",
}));
const Divider = styled((props) => <hr {...props} />)(({ theme }) => ({
  width: "100%",
  background: "#050E1D",
  opacity: "15%",
  border: "1px solid #050E1D",
}));

const Title = styled((props) => <h1 {...props} />)(({ theme }) => ({
  marginTop: "0px",
  fontSize: "20px",
}));

const Text = styled((props) => <p {...props} />)(
  ({ size = 14, weight = 400, textbold = false, color = "#373D4A" }) => {
    const textBoldSubTitle = {
      color: "rgba(33, 33, 33, 0.8)",
      marginTop: "8px",
      textTransform: "lowercase",
      "&::first-letter": {
        textTransform: "uppercase",
      },
    };
    return {
      fontSize: `${size}px`,
      color: color,
      lineHeight: "16px",
      fontWeight: `${weight}`,
      marginBottom: "0px",
      marginTop: "16px",
      ...(textbold ? textBoldSubTitle : {}),
    };
  }
);

const StyledMenuItem = styled((props) => <MenuItem {...props} />)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledSelectValue = styled((props) => <Box {...props} />)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const StyledSelect = styled((props) => <Select {...props} />)(() => ({
  "& .MuiSelect-select": {
    paddingTop: "0px",
    paddingBottom: "16px",
    paddingRight: "10px !important",
  },
}));

const StyledIcon = styled((props) => <ArrowBackIosIcon {...props} />)(() => ({
  transform: "rotate(-90deg)",
  marginRight: "10px",
  marginBottom: "10px",
}));

const StyledButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  borderRadius: theme.spacing(4),
  width: "100%",
  backgroundColor: "#82CD1C",
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const Details = ({ details = {},maxHeightRef }) => {
  const {
    price,
    numSeat,
    event: {
      date,
      forum: {
        name: forumName,
        mapId,
        city: {
          name: cityName,
          country: { name: countryName },
        },
      },
      name: eventName,
    },
    box: { level, section, zone },
  } = details;

 
  const [seatCount, setSeatCount] = React.useState(1);

  const handleChange = (event) => {
    setSeatCount(event.target.value);
  };

  const options = Array.from({ length: numSeat }, (_, index) => ({
    value: index + 1,
    label: `${index + 1} pase${index ? "s" : ""}`,
    price: price * (index + 1),
  }));

  console.log(maxHeightRef);
  return (
    <Root ref={maxHeightRef}>
      <Container>
        <Title>{eventName}</Title>
        <Text>{handleFormatDate(date)}</Text>
        <Text style={{ textDecoration: "underline" }}>
          {`${forumName} - ${cityName}, ${countryName}`}
        </Text>
      </Container>
      <Divider />
      <Container>
        <Text size={16} weight={700}>
          Detalles
        </Text>
        <Container grid={"true"}>
          <Container gridchild={"true"}>
            <Text size={12}>NIVEL</Text>
            <Text size={16} weight={700} textbold={"true"}>
              {level}
            </Text>
          </Container>
          <Container gridchild={"true"}>
            <Text size={12}>ASIENTOS DISPONIBLES:</Text>
            <Text size={16} weight={700} textbold={"true"}>
              {`${numSeat} lugares`}
            </Text>
          </Container>
          <Container gridchild={"true"}>
            <Text size={12}>ZONA:</Text>
            <Text size={16} weight={700} textbold={"true"}>
              {zone}
            </Text>
          </Container>
          <Container gridchild={"true"}>
            <Text size={12}>SECCIÓN</Text>
            <Text size={16} weight={700} textbold={"true"}>
              {section}
            </Text>
          </Container>
        </Container>
      </Container>
      <Divider />
      <Container>
        {numSeat > 0 && options.length > 0 ? (
          <>
            <FormControl fullWidth>
              <StyledSelect
                IconComponent={() => <StyledIcon />}
                value={seatCount}
                onChange={handleChange}
                renderValue={(selectedValue) => {
                  const selectedOption = options.find(
                    (option) => option.value === selectedValue
                  );
                  return (
                    <StyledSelectValue>
                      <Text size={16} weight={700}>
                        {selectedOption.label}
                      </Text>
                      <TextContainer>
                        <Text
                          size={16}
                          color="#5062D3"
                        >{`${selectedOption.price.toLocaleString(
                          "es-MX"
                        )} `}</Text>
                        <Text
                          size={12}
                          color="#5062D3"
                          style={{ lineHeight: "14px" }}
                        >
                          {" "}
                          &nbsp;MXN
                        </Text>
                      </TextContainer>
                    </StyledSelectValue>
                  );
                }}
              >
                {options.map((option) => (
                  <StyledMenuItem key={option.value} value={option.value}>
                    <Text size={16} weight={700}>
                      {option.label}
                    </Text>
                    <TextContainer>
                      <Text
                        size={16}
                        color="#5062D3"
                      >{`${option.price.toLocaleString("es-MX")}`}</Text>
                      <Text
                        size={12}
                        color="#5062D3"
                        style={{ lineHeight: "14px" }}
                      >
                        {" "}
                        &nbsp;MXN
                      </Text>
                    </TextContainer>
                  </StyledMenuItem>
                ))}
              </StyledSelect>
            </FormControl>

            <Container></Container>
            <TextContainer
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <Text>Impuestos</Text>
              <Text size={16}>
                {(
                  options.find((option) => option.value === seatCount).price *
                  0.16
                ).toLocaleString("es-MX")}
                MXN
              </Text>
            </TextContainer>
            <TextContainer
              style={{ width: "100%", justifyContent: "space-between" }}
            >
              <Text style={{ display: "flex", alignItems: "center" }}>
                Deposito de seguridad &nbsp;
                <Tooltip title="Es requerido para tener una garantia del pago final, consulta TYC">
                  <InfoOutlinedIcon style={{ color: "#373D4A" }} />
                </Tooltip>
              </Text>
              <Text size={16}>
                {(
                  options.find((option) => option.value === seatCount).price *
                  0.16
                ).toLocaleString("es-MX")}
                MXN
              </Text>
            </TextContainer>
          </>
        ) : (
          <Text sx={{margin:'0px'}}>No hay lugares disponibles</Text>
        )}
      </Container>
      <Divider />
      <Container>
        {numSeat > 0 && options.length > 0 && (
          <TextContainer style={{ width: "100%", justifyContent: "end" }}>
            <Text size={24} weight={600} color="#5062D3">
              ${" "}
              {options
                .find((option) => option.value === seatCount)
                .price.toLocaleString("es-CL")}
            </Text>
          </TextContainer>
        )}
        <StyledButton variant="contained" disabled={!numSeat > 0} color="primary">
          Rentar
        </StyledButton>
      </Container>
    </Root>
  );
};
