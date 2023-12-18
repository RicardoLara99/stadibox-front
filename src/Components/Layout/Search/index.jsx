import { styled } from "@mui/material/styles";
import { Box, Button, List, ListItem, Paper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Skeleton from "@mui/material/Skeleton";
import { useProducts } from "../../../../hooks/useProducts";
import { handleFormatDate } from "../../../features/utils/formatDate";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  width: "100%",
  display: "flex",
  color: "#98A1A8",
  margin: `${theme.spacing(2)}`,
  maxWidth: "385px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const StyledInput = styled((props) => <input {...props} />)(({ theme }) => ({
  border: "none",
  color: "#98A1A8",
  width: "100%",
  paddingLeft: `${theme.spacing(1)}`,
  ["&:focus"]: {
    border: "none",
    outline: "none",
  },
  ["&::placeholder"]: {
    color: "#98A1A8",
  },
}));

const ContainerInput = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1)}`,
  paddingLeft: `${theme.spacing(2)}`,
  width: "70%",
  display: "flex",
  alignItems: "center",
}));

const ContainerButton = styled(Box)(() => ({
  width: "30%",
  height: "100%",
  borderRadius: "0 16px 16px 0",
}));

const ContainerText = styled(Box)(() => ({
  display:"flex",
  justifyContent:'space-between',
  width:'100%'
}));


const ContainerMenu = styled(Box)(({ theme }) => ({
  width:"100%",
  padding:theme.spacing(2)
}));

const StyledButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  borderRadius: "0 16px 16px 0",
  height: "100%",
  width: "100%",
  padding: `${theme.spacing(1)}`,
}));

const DropdownMenu = styled(Paper)(({ theme }) => ({
  position: "absolute",
  width: "fit-content",
  minWidth:'385px',
  maxHeight: "250px",
  overflow: "auto",
  zIndex: theme.zIndex.modal,
  borderRadius: theme.shape.borderRadius,
  top: "75px",
  [theme.breakpoints.down("sm")]: {
    top:'115px',
    minWidth:'200px',
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

const StyledListItem=styled((props)=><ListItem {...props}/>)(({theme})=>({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  border: "2px solid #EAE9EA",
  borderRadius: "6px",
  marginBottom: theme.spacing(1),
  cursor:'pointer'
}))

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {getPublicationSearch}=useProducts()
  const menuRef = useRef(null);

  let timeOutId;
  const handleUpdateTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async() => {
    try {
      setIsLoading(true);
      setShowResults(true);
  
      const resultSearch=await getPublicationSearch(searchTerm)
      if(resultSearch){
        setResults(resultSearch)
      }
      setIsLoading(false);

    } catch (error) { 
      console.error('Error handleSearch',error)
    }
   
  };

  const handleRedirect=(id)=>{
    window.location.replace(`/publication/${id}`)
  }
  useEffect(() => {
    const handleClickOutside=(event)=> {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowResults(false); // Cerrar el menú
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Root>
      {showResults && (
        <DropdownMenu ref={menuRef}>
          <ContainerMenu>
            {!isLoading ? (
              <List sx={{gap:'8px'}}>
                {results.length>0 ? results.map((result, index) => (
                  <StyledListItem key={index} onClick={()=>{handleRedirect(result.id)}} >
                    <ContainerText>
                      <Text size={16} weight={700}>{result.event.name}</Text>
                      <Text>{result.event.forum.name} </Text>
                    </ContainerText>
                    <ContainerText>
                      <Text>{handleFormatDate(result.event.date)}</Text>
                      <Text color={result.numSeat>0 ?"#82CD1C" :"red"}>{result.numSeat>0?`${result.numSeat} lugares disponibles`:'AGOTADO'}</Text>
                    </ContainerText>
                  </StyledListItem>
                )):
                <StyledListItem >
                      <Text size={16} weight={700}>Sin resultados para: {searchTerm}</Text>
                  </StyledListItem>
                }
              </List>
            ) : (
              <>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
                <Skeleton animation="wave"/>
              </>
            )}
          </ContainerMenu>
        </DropdownMenu>
      )}
      <ContainerInput>
        <SearchIcon />
        <StyledInput
          placeholder="Busca tu estadio, equipo o evento"
          value={searchTerm}
          onChange={handleUpdateTerm}
          onKeyDown={() => {
            clearTimeout(timeOutId);
          }}
          onKeyUp={(e) => {
            clearTimeout(timeOutId);
            timeOutId = setTimeout(() => {
              if (searchTerm) {
                handleSearch();
              }
            }, 500);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          onFocus={()=>{
            if(results.length>0){
              setShowResults(true)
            }
          }}
        />
      </ContainerInput>
      <ContainerButton>
        <StyledButton variant="contained" color="primary"
          onClick={()=>searchTerm &&handleSearch()}>
          Buscar
        </StyledButton>
      </ContainerButton>
    </Root>
  );
};
