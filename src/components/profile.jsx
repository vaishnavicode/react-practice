import React, { useContext, useState } from "react";
import DeleteButton from "./deleteButton";
import { HistoryContext } from "../context/historyContext";
import { UserContext } from "../context/userContext";
import Box from "@mui/material/Box";
import { Grid2, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import UserEditingPage from "./userEditingPage";
import calculateAge from "../utils/calculateAge";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Profile(props) {
  const { history, setHistory } = useContext(HistoryContext);
  const { users } = useContext(UserContext);

  const [showEdit, setShowEdit] = useState(false);

  const addToHistory = (idGettingEdited) => {
    console.log("idGettingEdited", idGettingEdited);
    var editedUser = users.find((val) => val.id === idGettingEdited);
    setHistory([...history, JSON.stringify(editedUser)]);
  };

  return (
    <>
      <TableContainer
        spacing={{ xs: 1, sm: 1 }}
        direction="row"
        sx={{ flexWrap: "wrap", m: 0, p: 0 }}
      >
        <Table sx={{ m: 0, p: 0 }} aria-label="simple table">
          <TableRow>
            <TableCell align="center" colSpan={2}>
              <h3 style={{ margin: "0px" }}>
                {props.value.firstName + " " + props.value.lastName}
              </h3>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              <img
                src={props.value.profileImageUrl}
                alt={
                  props.value.firstName +
                  " " +
                  props.value.lastName +
                  "'s Profile Picture"
                }
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Email</TableCell>
            <TableCell
              align="right"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "11rem",
              }}
            >
              <Tooltip title={props.value.email}>
                <Typography
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "11rem",
                  }}
                >
                  {props.value.email}
                </Typography>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="right">{props.value.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">DOB</TableCell>
            <TableCell align="right">{props.value.dob}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Age</TableCell>
            <TableCell align="right">{calculateAge(props.value.dob)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Address</TableCell>
            <TableCell
              align="right"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "11rem",
                whiteSpace: "nowrap",
              }}
            >
              <Tooltip title={props.value.address}>
                <Typography
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "11rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {props.value.address}
                </Typography>
              </Tooltip>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">
              <DeleteButton value={props.value} />
            </TableCell>
            <TableCell align="right">
              <Tooltip
                title="Edit"
                type="button"
                id="edit"
                margin="0px"
                padding="0px"
                onClick={(e) => {
                  addToHistory(props.value.id);
                  setShowEdit(true);
                }}
              >
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>

          <Grid2>
            <UserEditingPage
              value={props.value}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
            />
          </Grid2>
        </Table>
      </TableContainer>
    </>
  );
}
