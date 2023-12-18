import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ImagesContainer } from "../../Components/Publication/ImagesContainer";
import { Details } from "../../Components/Publication/Details.jsx";
import { Includes } from "../../Components/Publication/Includes.jsx/index.jsx";
import { Warranty } from "../../Components/Publication/Warranty/index.jsx";
import { Stadium } from "../../Components/Publication/Stadium/index.jsx";
import { useRef } from "react";

const Root = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down('sm')]: {
    padding:'0px'
  },
}));

const Container = styled((props) => <Box {...props} />)(({ theme, main }) => {
  const mainStyles = {
    maxWidth: "1100px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

  };

  return {
    display: "flex",
    width: "100%",
    gap: theme.spacing(3),
    ...(main ? mainStyles : {
      [theme.breakpoints.down('md')]: {
        flexDirection:'column',
      },
      
    }),
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',
      gap:'0px',
    }, 
  };
});
// TODO: This is your blank canvas :) From here, you can do whatever you want

const Publication = ({ data, ...props }) => {
  console.log(data);
  const maxHeightRef=useRef(null)
  const warranty = [
    {
      title: "Boletos originales garantizados",
      description:
        "Commodo nulla imperdiet pulvinar augue tellus nullam sociis. Placerat id quis tellus nulla maecenas ut aliquet mauris.",
    },
    {
      title: "Atención personalizada 24/7",
      description:
        "Porta lobortis lacus iaculis egestas lacus mauris cras scelerisque.",
    },
    {
      title: "Devolución en caso de cancelación del evento",
      description:
        "Se regresará el 100% del monto pagado menos las comisiones bancarias (7%.)",
    },
  ];

  return (
    <Root>
      <Container main="true">
        <Container>
         
          {data.box.pictures.length > 0 ? (
            <ImagesContainer images={data.box.pictures} maxHeightRef={maxHeightRef}/>
          ) : (
            <Stadium stadium={data.event.forum.mapId} isTop={true} />
          )}

          <Details details={data} maxHeightRef={maxHeightRef} />
        </Container>
        <Container>
          <Includes amenities={data.box.amenities} isDivided={!data.box.pictures.length > 0}/>
          {!data.box.pictures.length > 0 && <Warranty warranty={warranty} isTop={true}/>}
        </Container>
        {data.box.pictures.length > 0 && (
          <Container>
            <Warranty warranty={warranty} />
            <Stadium stadium={data.event.forum.mapId} />
          </Container>
        )}
      </Container>
    </Root>
  );
};

export default Publication;
