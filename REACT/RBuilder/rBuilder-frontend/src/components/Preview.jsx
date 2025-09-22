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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { addHistoryAPI } from "../services/allAPI";
import { useState } from "react";

const Preview = ({ formData, setFormData }) => {
  console.log(formData);
  const { personalData, education, experience, skills, summary } = formData;

  const [resumeId, setResumeId] = useState("");
  const [downloadStatus, setDownloadStatus] = useState(false);
  const [updateData, setUpdateData] = useState(false);

  // console.log(resumeId);

  const downloadPDF = async () => {
    const input = document.getElementById("result"); //to get document
    const canvas = await html2canvas(input, { scale: 2 }); //cnvrt selctd html to canvas(ss)
    const imgData = canvas.toDataURL("image/png"); // to cnvrt canvas to img
    // Create pdf
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");

    setDownloadStatus(true);

    try {
      const result = await addHistoryAPI(formData);
      console.log(result);
      setResumeId(result.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (data) => {
    setUpdateData(data);
  };

  return (
    <div className="p-3">
      {downloadStatus ? (
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <Button onClick={downloadPDF}>
            <FaFileDownload className="fs-3" />
          </Button>
          <Edit resumeId={resumeId} onUpdate={handleUpdate} />
          <Link href="/history">
            <Button>
              <FaHistory className="fs-3" />
            </Button>
          </Link>
        </Stack>
      ) : (
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <Button onClick={downloadPDF}>
            <FaFileDownload className="fs-3" />
          </Button>
        </Stack>
      )}
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
        <Paper elevation={7} id="result">
          {updateData ? (
            <>
              <Typography variant="h3" align="center">
                {updateData.personalData.name}
              </Typography>
              <Typography variant="h3" align="center">
                {updateData.personalData.jobTitle}
              </Typography>
              <Typography variant="body2" align="center">
                {updateData.personalData.email} |{" "}
                {updateData.personalData.phoneNumber} |{" "}
                {updateData.personalData.location}
              </Typography>
              <Typography variant="body2" align="center" mb={3}>
                <Link href={updateData.personalData.github}>Github</Link> |{" "}
                <Link href={updateData.personalData.linkedin}>Linkedin</Link> |{" "}
                <Link href={updateData.personalData.portfolio}>Profile</Link>
              </Typography>

              <Divider>Summary</Divider>
              <Typography mb={3} mt={1} align="center">
                {updateData.summary}
              </Typography>

              <Divider>Education</Divider>
              <Typography mt={1} varient="h6" align="center">
                {updateData.education.course}
              </Typography>
              <Typography variant="body2" align="center" mb={3}>
                {updateData.education.college} |{" "}
                {updateData.education.university} | {updateData.education.year}
              </Typography>

              <Divider>Professional Experience</Divider>
              <Typography mt={1} varient="h6" align="center">
                {updateData.experience.jobRole}
              </Typography>
              <Typography variant="body2" align="center" mb={3}>
                {updateData.experience.company} |{" "}
                {updateData.experience.location} |{" "}
                {updateData.experience.duration}
              </Typography>

              <Divider>Skills</Divider>
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                mt={3}
                sx={{ flexWrap: "wrap" }}
                spacing={{ xs: 1, sm: 2 }}
              >
                {skills.map((item) => (
                  <div>
                    <Button className="mt-2" variant="contained">
                      {item}
                    </Button>
                  </div>
                ))}
              </Stack>
            </>
          ) : (
            <>
              <Typography variant="h3" align="center">
                {formData.personalData.name}
              </Typography>
              <Typography variant="subtitle1" align="center" color="#2962ff">
                {formData.personalData.jobTitle}
              </Typography>
              <Typography variant="body2" align="center">
                {formData.personalData.email} |{" "}
                {formData.personalData.phoneNumber} |{" "}
                {formData.personalData.location}
              </Typography>
              <Typography variant="body2" align="center" mb={3}>
                <Link href={formData.personalData.github}>Github</Link> |{" "}
                <Link href={formData.personalData.linkedin}>Linkedin</Link> |{" "}
                <Link href={formData.personalData.portfolio}>Profile</Link>
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
                {formData.education.college} | {formData.education.university} |{" "}
                {formData.education.year}
              </Typography>

              <Divider>Professional Experience</Divider>
              <Typography mt={1} varient="h6" align="center">
                {formData.experience.jobRole}
              </Typography>
              <Typography variant="body2" align="center" mb={3}>
                {formData.experience.company} | {formData.experience.location} |{" "}
                {formData.experience.duration}
              </Typography>

              <Divider>Skills</Divider>
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                mt={3}
                sx={{ flexWrap: "wrap" }}
                spacing={{ xs: 1, sm: 2 }}
              >
                {skills.map((item) => (
                  <div>
                    <Button className="mt-2" variant="contained">
                      {item}
                    </Button>
                  </div>
                ))}
              </Stack>
            </>
          )}
        </Paper>
      </Box>
    </div>
  );
};
export default Preview;
