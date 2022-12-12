import { Input } from "@mui/material";

const style = {
    root: { padding: "5px", backgroundColor: "#434343", color: "#fff" }
  };

const CustomInput = (props, {variant = "standard"}) => (
    <Input
        style={style.root}
        { ...props }
        variant={variant}
        placeholder='Type...'
    />
)

export default CustomInput;