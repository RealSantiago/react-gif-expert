import { Grid, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (inputValue.trim().length <= 1) return;

      onNewCategory(inputValue.trim().toLowerCase());
      setInputValue("");
    }
    return event;
  };

  return (
    <Grid item sm={12} py={2}>
      <TextField
        type="text"
        variant="outlined"
        label="Buscar Gifs"
        onChange={onInputChange}
        value={inputValue}
        onKeyDown={onSubmit}
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setInputValue("")}>
              <CloseIcon />
            </IconButton>
          ),
        }}
      />
    </Grid>
  );
};
