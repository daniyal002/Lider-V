import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const RequisitesPromotioTable = ({ list, text }) => {
  return (
    <Grid>
      <Typography
        sx={{
          display: "flex",
          fontSize: "45px",
          color: "#fff",
          fontWeight: "900",
          marginBottom: "10px",
          "@media(max-width:425px)": {
            fontSize: "25px",
          },
        }}
      >
        {text}
      </Typography>
      <Table
        sx={{
          backgroundColor: "rgba(134, 155, 223, 0.14) !important",
          border: "2px solid rgba(83, 84, 136, 0.4)",
        }}
      >
        <TableBody>
          {list.map((item) => (
            <TableRow>
              <TableCell
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  "@media(max-width:425px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {item.description}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  color: "#A95BF3",
                  "@media(max-width:425px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {item.text}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default RequisitesPromotioTable;
