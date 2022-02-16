import React from "react";

import PropTypes from "prop-types";
import Buttons from "./general/actionButton/Buttons";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const Header = ({ title }) => {
     return (
          <div>
               <header>
                    <h2>{title}</h2>
               </header>
               <div>
                    <Buttons
                         text="Delete"
                         color="white"
                         icon={<DeleteIcon />}
                         type="outlined"
                    />
                    <Buttons
                         text="Send"
                         color="lightblue"
                         icon={<SendIcon />}
                         type="contained"
                    />
               </div>
          </div>
     );
};
Header.defaultProps = {
     title: "Trace Tracke",
};

Header.propTypes = {
     title: PropTypes.string.isRequired,
};

export default Header;
