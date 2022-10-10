import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

type InputPropss = {
  label: string;
  input?: {
    id: string;
    type: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputPlaceholder?: string | number;
    name?: string;
  };
  startAdornment?: string;
  endAdornment?: string;
  half?: boolean;
  name?: string;
  autoFocus?: boolean;
  type?: string;
  handleShowPassword?: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TestInput: React.FC<InputPropss> = ({
  half,
  name,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
  endAdornment,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={{
          endAdornment:
            name === "password" ? (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <MdVisibility /> : <MdVisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : (
              ""
            ),
        }}
        sx={{
          "& label.Mui-focused": {
            color: "#6c1c6a",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#6c1c6a",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#6c1c6a",
            },
          },
        }}
      />
    </Grid>
  );
};

export default TestInput;
