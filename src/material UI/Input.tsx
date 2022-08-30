import { TextField } from "@mui/material";



type InputProps = {
    label: string;
    input: {
        id: string,
        type: string,
        value: string | number,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        inputPlaceholder?: string | number
    };
    inputLabelProps?: {
        shrink: boolean
    } ,
    
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div>
    
      <TextField
        sx={{ width: 200}}
        className="inputs"
        label={props.input.id}
        variant="standard"
        size="small"
        inputProps={{ ...props.input }}
        color="primary"
        required={true}
        InputLabelProps={props.inputLabelProps}
        margin="dense"
      />
    </div>
  );
};

export default Input;