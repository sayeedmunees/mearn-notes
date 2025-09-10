import { FaFileDownload } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import { RiFileEditLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Edit from "./Edit";

const Preview = () => {
  return (
    <div className="p-3">
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <Button>
          <FaFileDownload className="fs-3" />
        </Button>
        <Edit />
        <Link href="/history">
          <Button>
            <FaHistory className="fs-3" />
          </Button>
        </Link>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 700,
            mt: 5,
            p: 5,
            borderRadius: 2,
          },
        }}
      >
        <Paper elevation={7}>
          <Typography variant="h3" align="center">
            Full name
          </Typography>
          <Typography variant="subtitle1" align="center" color="#2962ff">
            Full Stack Developer
          </Typography>

          <Typography variant="body2" align="center">
            user@gmail.com | 9876543210 | Kochi
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            <Link>Github</Link> | <Link>Linkedin</Link> | <Link>Profile</Link>
          </Typography>

          <Divider>Summary</Divider>
          <Typography mb={3} mt={1} align="center">
            I'm a passionate Web Developer
          </Typography>

          <Divider>Education</Divider>
          <Typography mt={1} varient="h6" align="center">
            Course
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            College University | 2025
          </Typography>

          <Divider>Professional Experience</Divider>
          <Typography mt={1} varient="h6" align="center">
            Job Title
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            Company | Location | Duration
          </Typography>

          <Divider>Skills</Divider>
          <Stack direction={"row"} justifyContent={"space-evenly"} mt={3}>
            <Button variant="contained">React</Button>
            <Button variant="contained">React</Button>
            <Button variant="contained">React</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
};
export default Preview;
