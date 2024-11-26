import React, { useContext } from "react";
import { HistoryContext } from "../context/historyContext";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import calculateAge from "../utils/calculateAge";

export default function ShowHistory() {
  const { history } = useContext(HistoryContext);

  return (
    <>
      <div className="history-display">
        <Grid2>
          <h1 style={{ justifySelf: "center" }}>History</h1>
        </Grid2>
        <div className="outer-wrap">
          <Box>
            <Grid2
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              direction="row"
            >
              <TableContainer
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                sx={{ flexWrap: "wrap" }}
              >
                <Table sx={{}} aria-label="simple table">
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Name
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Profile Picture
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Email
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Phone
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      DOB
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Age
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      Address
                    </TableCell>
                  </TableRow>
                  {history.map((value, index) => {
                    value = JSON.parse(value);

                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {value.firstName + " " + value.lastName}
                        </TableCell>
                        <TableCell align="center">
                          <img
                            src={value.profileImageUrl}
                            alt={
                              value.firstName +
                              " " +
                              value.lastName +
                              "'s Profile Picture"
                            }
                          />
                        </TableCell>

                        <TableCell align="center">{value.email}</TableCell>

                        <TableCell align="center">{value.phone}</TableCell>

                        <TableCell align="center">{value.dob}</TableCell>

                        <TableCell align="center">
                          {calculateAge(value.dob)}
                        </TableCell>

                        <TableCell align="center">{value.address}</TableCell>
                      </TableRow>
                    );
                  })}{" "}
                </Table>
              </TableContainer>
            </Grid2>
          </Box>
        </div>
      </div>
    </>
  );
}
