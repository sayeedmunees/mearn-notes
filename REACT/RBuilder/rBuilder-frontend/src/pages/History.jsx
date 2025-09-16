import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { MdDelete } from "react-icons/md";

const History = () => {
  return (
    <div>
      <Typography variant="h3" align="center" my={3}>
        Resume Downloaded History
      </Typography>
      <Stack>
        <Paper elevation={7} sx={{ width: 400, p: 5, m: 3 }}>
          <Button sx={{ float: "right" }}>
            <MdDelete color="red" fontSize="26px" />
          </Button>
          <Typography variant="h3" align="center">
            Full name
          </Typography>
          <Typography variant="subtitle1" align="center" color="#2962ff">
            Full Stack Developer
          </Typography>
          <Divider></Divider>
          <Typography mb={3} varient="h6" align="center">
            Course
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            College | University | 2025
          </Typography>
        </Paper>
      </Stack>
    </div>
  );
};

export default History;
