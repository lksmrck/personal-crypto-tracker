import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";

type InputProps = {
  name?: string;
  input: {
    id: string;
    type: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    step?: number;
  };

  startAdornment?: string;
  autoFocus?: boolean;
};

const FormInput: React.FC<InputProps> = ({
  input,
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

export default FormInput;
