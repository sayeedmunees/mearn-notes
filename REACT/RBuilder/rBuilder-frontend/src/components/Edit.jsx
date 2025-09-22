import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiFileEditLine } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { getAResumeHistoryAPI } from "../services/allAPI";
import { useEffect } from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const Edit = ({ resumeId }) => {
  console.log(resumeId);

  const [resumeDetails, setResumeDetails] = useState({
    id: "",
    personalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phoneNumber: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    education: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      jobRole: "",
      company: "",
      location: "",
      duration: "",
    },
    skills: [],
    summary: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAResume();
  }, [resumeId]);

  const getAResume = async () => {
    const result = await getAResumeHistoryAPI(resumeId);
    console.log(result);
    setResumeDetails(result.data);
  };

  return (
    <div>
      {" "}
      <div>
        <Button onClick={handleOpen}>
          <RiFileEditLine className="fs-3" />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              align="center"
            >
              Edit details
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              <div>
                <h3>Personal Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Full Name"
                    variant="standard"
                    value={resumeDetails?.personalData?.name}
                  />
                  <TextField
                    id="standard-basic"
                    label="Job Title"
                    variant="standard"
                    value={resumeDetails?.personalData?.jobTitle}
                  />
                  <TextField
                    id="standard-basic"
                    label="Location"
                    variant="standard"
                    value={resumeDetails?.personalData?.location}
                  />
                </div>
              </div>

              <div>
                <h3>Contact Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    value={resumeDetails?.personalData?.email}
                  />
                  <TextField
                    id="standard-basic"
                    label="Phone number"
                    variant="standard"
                    value={resumeDetails?.personalData?.phoneNumber}
                  />
                  <TextField
                    id="standard-basic"
                    label="Github Link"
                    variant="standard"
                    value={resumeDetails?.personalData?.github}
                  />
                  <TextField
                    id="standard-basic"
                    label="LinkedIn Link"
                    variant="standard"
                    value={resumeDetails?.personalData?.linkedin}
                  />
                  <TextField
                    id="standard-basic"
                    label="Portfolio Link"
                    variant="standard"
                    value={resumeDetails?.personalData?.portfolio}
                  />
                </div>
              </div>

              <div>
                <h3>Educational Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Course Name"
                    variant="standard"
                    value={resumeDetails?.education?.course}
                  />
                  <TextField
                    id="standard-basic"
                    label="College Name"
                    variant="standard"
                    value={resumeDetails?.education?.college}
                  />
                  <TextField
                    id="standard-basic"
                    label="University"
                    variant="standard"
                    value={resumeDetails?.education?.university}
                  />
                  <TextField
                    id="standard-basic"
                    label="Year of Passout"
                    variant="standard"
                    value={resumeDetails?.education?.year}
                  />
                </div>{" "}
              </div>

              <div>
                <h3>Proffessional Details</h3>
                <div className="d-flex row p-3">
                  <TextField
                    id="standard-basic"
                    label="Job or Internship"
                    variant="standard"
                    value={resumeDetails?.experience?.jobRole}
                  />
                  <TextField
                    id="standard-basic"
                    label="Company Name"
                    variant="standard"
                    value={resumeDetails?.experience?.company}
                  />
                  <TextField
                    id="standard-basic"
                    label="Location"
                    variant="standard"
                    value={resumeDetails?.experience?.location}
                  />
                  <TextField
                    id="standard-basic"
                    label="Duration"
                    variant="standard"
                    value={resumeDetails?.experience?.duration}
                  />
                </div>
              </div>

              <div>
                <h3>Skills</h3>
                <Box>
                  <Stack spacing={2}>
                    <TextField
                      id="standard-basic"
                      label="Job or Internship"
                      variant="standard"
                    />
                    <Button variant="text" sx={{ maxWidth: "40px" }}>
                      Add
                    </Button>
                  </Stack>
                  <div>
                    <h5>Selected: </h5>
                    {resumeDetails?.skills?.length > 0
                      ? resumeDetails?.skills.map((item, index) => (
                          <Button variant="outlied" size="small">
                            {item}
                          </Button>
                        ))
                      : ""}
                  </div>
                </Box>
              </div>

              <div>
                <h3>Proffessional Summary</h3>
                <div>
                  <TextField
                    id="standard-multiline-static"
                    label="Summary"
                    multiline
                    rows={4}
                    defaultValue="eg: I'm a passionate Web Developer"
                    variant="standard"
                    value={resumeDetails?.summary}
                  />
                </div>
              </div>
            </Typography>
            <Button variant="contained">Update</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Edit;
