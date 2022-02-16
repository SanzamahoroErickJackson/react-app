import {
     Avatar,
     Card,
     CardActions,
     CardContent,
     CardHeader,
     CardMedia,
     Collapse,
     Divider,
     IconButton,
     ListItemIcon,
     Menu,
     MenuItem,
     styled,
     Tooltip,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProdAvatar from "../profile/avator/prodAvatar";
import { blue } from "@mui/material/colors";
import Typographys from "../general/label/Typographys";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const ExpandMore = styled((props) => {
     const { expand, ...other } = props;
     return <IconButton {...other} />;
})(({ theme, expand }) => ({
     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
     marginLeft: "auto",
     transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest,
     }),
}));

export default function Cards({
     ttl,
     subhd,
     image,
     txt1,
     txt2,
     txt3,
     wd,
     avCl,
     avLt,
     avLb,
     colapsTt,
     ...props
}) {
     const [expanded, setExpanded] = React.useState(false);

     const handleExpandClick = () => {
          setExpanded(!expanded);
     };

     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };

     // <Card sx={(wd, { ...props })}>
     return (
          <Card sx={wd}>
               <CardHeader
                    avatar={
                         <ProdAvatar letter={avLt} label={avLb} bgcl={avCl} />
                    }
                    action={
                         <React.Fragment>
                              <Tooltip title="More">
                                   <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={
                                             open ? "account-menu" : undefined
                                        }
                                        aria-haspopup="true"
                                        aria-expanded={
                                             open ? "true" : undefined
                                        }
                                   >
                                        <MoreVertIcon />
                                   </IconButton>
                              </Tooltip>
                              <Menu
                                   anchorEl={anchorEl}
                                   id="account-menu"
                                   open={open}
                                   onClose={handleClose}
                                   onClick={handleClose}
                                   PaperProps={{
                                        elevation: 0,
                                        sx: {
                                             overflow: "visible",
                                             filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                             mt: 1.5,
                                             "& .MuiAvatar-root": {
                                                  width: 32,
                                                  height: 32,
                                                  ml: -0.5,
                                                  mr: 1,
                                             },
                                             "&:before": {
                                                  content: '""',
                                                  display: "block",
                                                  position: "absolute",
                                                  top: 0,
                                                  right: 14,
                                                  width: 10,
                                                  height: 10,
                                                  bgcolor: "background.paper",
                                                  transform:
                                                       "translateY(-50%) rotate(45deg)",
                                                  zIndex: 0,
                                             },
                                        },
                                   }}
                                   transformOrigin={{
                                        horizontal: "right",
                                        vertical: "top",
                                   }}
                                   anchorOrigin={{
                                        horizontal: "right",
                                        vertical: "bottom",
                                   }}
                              >
                                   <MenuItem>
                                        <Avatar /> Profile
                                   </MenuItem>
                                   <MenuItem>
                                        <Avatar /> My account
                                   </MenuItem>
                                   <Divider />
                                   <MenuItem>
                                        <ListItemIcon>
                                             <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                   </MenuItem>
                                   <MenuItem>
                                        <ListItemIcon>
                                             <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                   </MenuItem>
                                   <MenuItem>
                                        <ListItemIcon>
                                             <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                   </MenuItem>
                              </Menu>
                         </React.Fragment>
                    }
                    title={ttl}
                    subheader={subhd}
               />
               <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
               />
               <CardContent>
                    <Typographys text={txt1} />
               </CardContent>
               <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                         <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                         <ShareIcon />
                    </IconButton>
                    <ExpandMore
                         expand={expanded}
                         onClick={handleExpandClick}
                         aria-expanded={expanded}
                         aria-label="show more"
                    >
                         <ExpandMoreIcon />
                    </ExpandMore>
               </CardActions>
               <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typographys text={colapsTt} paragraph />
                    <Typographys text={txt2} paragraph />
                    <Typographys text={txt3} />
               </Collapse>
          </Card>
     );
}
Cards.defaultProps = {
     wd: { maxWidth: 345 },
     avCl: blue[200],
};

Cards.propTypes = {
     txt1: PropTypes.string,
     txt2: PropTypes.string,
     txt3: PropTypes.string,
};
