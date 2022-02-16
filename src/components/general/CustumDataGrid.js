import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
     { field: "id", headerName: "Identifiant", width: 120 },
     { field: "title", headerName: "Titre", width: 180 },
     { field: "description", headerName: "Description", width: 250 },
     {
          field: "image",
          headerName: "Image",
          // type: "number",
          width: 100,
     },
     {
          field: "",
          headerName: "Actions",
          // type: "number",
          width: 100,
     },
     //  {
     //       field: "fullName",
     //       headerName: "Full name",
     //       description: "This column has a value getter and is not sortable.",
     //       sortable: false,
     //       width: 160,
     //       valueGetter: (params) =>
     //            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
     //  },
];

function CustumDataGrid({ data, onSelectionChange }) {
     return (
          <div style={{ height: 400, width: "100%" }}>
               <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={onSelectionChange}
                    loading={data.length === 0}
               />
          </div>
     );
}

export default CustumDataGrid;
