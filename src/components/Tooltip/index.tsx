import { Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const CustomTooltip = (props: { text: string }) => {
  return (
    <Tooltip 
      title={props.text} 
      sx={{ color: "#1976d2" }}
      enterTouchDelay={0}
      leaveTouchDelay={5000}
      disableFocusListener={false}
      disableHoverListener={false}
      disableTouchListener={false}
      placement="top"
    >
      <InfoIcon />
    </Tooltip>
  );
};

export default CustomTooltip;