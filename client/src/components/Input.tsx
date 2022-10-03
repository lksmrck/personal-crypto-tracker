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
    step?: number;
    name?: string;
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
}) => {
  return (
    <div>
      <TextField
        sx={{ width: 200 }}
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Input;
