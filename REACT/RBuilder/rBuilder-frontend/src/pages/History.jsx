import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from "../services/allAPI";

const History = () => {
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    const result = await getHistoryAPI();
    // console.log(result.data);
    setHistory(result.data);
  };

  console.log(history);

  const deleteHistory = async (id) => {
    try {
      const result = await deleteHistoryAPI(id);
      console.log(result);
      getHistory()
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      <Typography variant="h3" align="center" my={3}>
        Resume Downloaded History
      </Typography>
      <Stack direction="horizontal" flexWrap="wrap" gap={2}>
        {history?.length > 0 ? (
          history?.map((item, index) => (
            <Paper elevation={7} sx={{ width: 400, p: 5, m: 3 }}>
              <Button
                onClick={() => deleteHistory(item?.id)}
                sx={{ float: "right" }}
              >
                <MdDelete color="red" fontSize="26px" />
              </Button>
              <Typography variant="h3" align="center">
                {item.personalData.name}
              </Typography>
              <Typography variant="subtitle1" align="center" color="#2962ff">
                {item.personalData.jobTitle}
              </Typography>
              <Divider></Divider>
              <Typography mb={3} varient="h6" align="center">
                {item.education.course}
              </Typography>
              <Typography variant="body2" align="center" mb={3}>
                {item.education.college} | {item.education.university} |{" "}
                {item.education.year}
              </Typography>
            </Paper>
          ))
        ) : (
          <h3>No History Yet</h3>
        )}
      </Stack>
    </div>
  );
};

export default History;
