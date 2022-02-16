import React from "react";
import { Button } from "@mui/material";

import PropTypes from "prop-types";

function Buttons({ type, color, text, icon, onClick, ...props }) {
     return (
          <Button
               onClick={onClick}
               style={{ backgroundColor: color }}
               variant={type}
               startIcon={icon}
               {...props}
          >
               {text}
          </Button>
     );
}

Buttons.defaultProps = {
     color: "azure",
     type: "contained",
};

Buttons.propTypes = {
     text: PropTypes.string.isRequired,
     color: PropTypes.string,
     type: PropTypes.string,
     icon: PropTypes.object.isRequired,
     onClick: PropTypes.func,
};

export default Buttons;
