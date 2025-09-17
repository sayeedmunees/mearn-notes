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

const Preview = ({ formData, setFormData }) => {
  console.log(formData);

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
            {formData.personalData.name}
          </Typography>
          <Typography variant="subtitle1" align="center" color="#2962ff">
            {formData.personalData.jobTitle}
          </Typography>

          <Typography variant="body2" align="center">
            {formData.personalData.email} | {formData.personalData.phoneNumber} | {formData.personalData.location}
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            <Link href={formData.personalData.github}>Github</Link> | <Link href={formData.personalData.linkedin}>Linkedin</Link> | <Link href={formData.personalData.portfolio}>Profile</Link>
          </Typography>

          <Divider>Summary</Divider>
          <Typography mb={3} mt={1} align="center">
            {formData.summary}
          </Typography>

          <Divider>Education</Divider>
          <Typography mt={1} varient="h6" align="center">
            {formData.education.course}
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            {formData.education.college} | {formData.education.university} | {formData.education.year}
          </Typography>

          <Divider>Professional Experience</Divider>
          <Typography mt={1} varient="h6" align="center">
            {formData.experience.jobRole}
          </Typography>
          <Typography variant="body2" align="center" mb={3}>
            {formData.experience.company} | {formData.experience.location} | {formData.experience.duration}
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
