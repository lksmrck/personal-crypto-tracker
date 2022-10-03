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
    ref?: React.Ref<HTMLInputElement | null>;
    min?: number;
    step?: number;
    name?: string;
  };
  inputLabelProps?: {
    shrink: boolean;
  };
  InputProps?: any;
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
      />
    </Grid>
  );
};

export default TestInput;
