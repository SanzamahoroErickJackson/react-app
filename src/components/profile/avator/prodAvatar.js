import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";

export default function ProdAvatar({ letter, label, bgcl, ...props }) {
     return (
          <Avatar sx={{ bgcolor: bgcl, ...props }} aria-label={label}>
               {letter}
          </Avatar>
     );
}

ProdAvatar.defaultProps = {
     label: "no info",
     bgcl: red[500],
};
ProdAvatar.propTypes = {
     letter: PropTypes.string.isRequired,
     label: PropTypes.string,
};
