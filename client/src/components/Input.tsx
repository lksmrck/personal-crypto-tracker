import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";

type InputProps = {
  label: string;
  name?: string;
  input: {
    id: string;
    type: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputPlaceholder?: string | number;
    ref?: React.Ref<HTMLInputElement | null>;
    min?: number;

    step?: number;
    /*  name?: string; */
  };
  inputLabelProps?: {
    shrink: boolean;
  };
  startAdornment?: string;
  autoFocus?: boolean;
};

const Input: React.FC<InputProps> = ({
  input,
  label,
  inputLabelProps,
  startAdornment,
  autoFocus,
  name,
}) => {
  return (
    <div>
      <TextField
        className="inputs"
        label={input.id}
        variant="standard"
        size="small"
        inputProps={{ ...input }}
        color="primary"
        autoFocus={autoFocus}
        required={true}
        InputLabelProps={inputLabelProps}
        margin="dense"
        name={name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
        }}
        sx={{
          width: 200,
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
    </div>
  );
};

export default Input;
