import { Update } from "@mui/icons-material";
import Delete from "@mui/icons-material/Delete";
import {
     Button,
     Paper,
     Stack,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
} from "@mui/material";
import React from "react";

const CustumTable = ({ data }) => {
     return (
          <TableContainer component={Paper}>
               <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
               >
                    <TableHead>
                         <TableRow>
                              <TableCell>Identifiant</TableCell>
                              <TableCell align="right">Titre</TableCell>
                              <TableCell align="right">Description</TableCell>
                              <TableCell align="right">Image</TableCell>
                              <TableCell align="right"></TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {data.map((row) => (
                              <TableRow
                                   key={row.id}
                                   sx={{
                                        "&:last-child td, &:last-child th": {
                                             border: 0,
                                        },
                                   }}
                              >
                                   <TableCell component="th" scope="row">
                                        {row.id}
                                   </TableCell>
                                   <TableCell align="right">
                                        {row.title}
                                   </TableCell>
                                   <TableCell align="right">
                                        {row.description}
                                   </TableCell>
                                   <TableCell align="right">
                                        {row.image}
                                   </TableCell>
                                   <TableCell align="center">
                                        <Stack direction="row" spacing={1}>
                                             <Button
                                                  variant="contained"
                                                  startIcon={<Update />}
                                                  color="primary"
                                             >
                                                  Update
                                             </Button>
                                             <Button
                                                  variant="contained"
                                                  startIcon={<Delete />}
                                                  color="secondary"
                                             >
                                                  Delete
                                             </Button>
                                        </Stack>
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>
     );
};

export default CustumTable;
