import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";

type InputProps = {
  label: string;
  input: {
    id: string;
    type: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputPlaceholder?: string | number;
    ref?: React.Ref<HTMLInputElement | null>;
    min?: number;
  };
  inputLabelProps?: {
    shrink: boolean;
  };
  startAdornment?: string;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <TextField
        sx={{ width: 200 }}
        className="inputs"
        label={props.input.id}
        variant="standard"
        size="small"
        inputProps={{ ...props.input }}
        color="primary"
        required={true}
        InputLabelProps={props.inputLabelProps}
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.startAdornment}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Input;
