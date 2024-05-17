import { GifItem } from "./GifItem";
import { Grid, IconButton, Skeleton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ dato, onDeleteCategory }) => {
  const { images, isLoading } = useFetchGifs(dato);

  return (
    <Grid item sm={12} py={2}>
      <Grid
        item
        container
        sm={12}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography variant="h4">Tipo de Gifs: {dato}</Typography>
        <IconButton onClick={() => onDeleteCategory(dato)}>
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      </Grid>
      {isLoading && (
        <Skeleton variant="rectangular" width={"100%"} height={200} />
      )}
      <Grid
        item
        container
        flexDirection={"row"}
        py={2}
        spacing={2}
        justifyContent={"center"}
      >
        {images.map((e) => (
          <Grid item sm={4} xs={12} key={e.id}>
            <GifItem
              // title={e.title}
              // url={e.url}
              {...e} //expando o exparso todas las propiedades de que me traiga images
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
