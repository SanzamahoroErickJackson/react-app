import { Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function Typographys({ text, style, color, ...props }) {
     return (
          <Typography variant={style} color={color} {...props}>
               {text}
          </Typography>
     );
}

Typographys.defaultProps = {
     color: "black",
     //  color: "azure",
     style: "body2",
};

Typographys.protoTypes = {
     text: PropTypes.string.isRequired,
     color: PropTypes.string,
     style: PropTypes.string,
};
