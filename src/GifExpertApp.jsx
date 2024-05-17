import React, { useState } from "react";
import { AddCategory, Footer, GifGrid, NavBar } from "./components";
import { CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [modeDark, setModeDark] = useState(false);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = (dato) => {
    const newCategory = categories.filter((e) => e !== dato);
    setCategories(newCategory);
  };

  return (
    <ThemeProvider theme={modeDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Grid
        container
        direction="column"
        style={{ minHeight: "100vh" }}
        padding={2}
      >
        <Grid item>
          <NavBar setModeDark={setModeDark} />
        </Grid>
        <Grid item>
          <AddCategory onNewCategory={(event) => onAddCategory(event)} />
        </Grid>
        <Grid item container direction="column" flexGrow={1} padding={2}>
          {categories.map((elemento) => (
            <GifGrid
              key={elemento}
              dato={elemento}
              onDeleteCategory={onDeleteCategory}
            />
          ))}
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
